import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { DbtaskService } from './dbtask.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  // Se crea un sujeto al cual van a observar y el que se actualizara con un valor booleano
  authState = new BehaviorSubject(false);
  constructor(
    private router: Router,
    private storage: Storage,
    public dbtaskService: DbtaskService,
    public toastController: ToastController
  ) 
  { 
    this.isLogged();
  }
  /**
   * Valida si existe un usuario iniciado
   */
  isLogged(){
    this.storage.get("USER_DATA").
    then((response)=>{
      console.log(response)
      if(response!=null){
        this.authState.next(true); //Se establece en verdadero el estado de la authentication
      }
    })
  }
  /**
   * Función que permite cerrar la sesión actual
   * actualiza el sesion_data de SQLite
   */
  logout(){
    // Se obtiene la informacion almacenada en storage mediante la clave "USER_DATA"
    this.storage.get("USER_DATA").then((data)=>{
      // Como quiere cerrar la sesión se cambia active a 0
      data.active=0;
      // Se usa la función del servicio "updateSesionData"
      this.dbtaskService.updateSesionData(data)
      // Manejamos la respuesta correcta
      .then((response)=>{
        // Se valida que efectuo una modificación en alguna fila
        if(response.rowsAffected>=1){
          // Se remueve el valor de USER_DATA
          this.storage.remove("USER_DATA");
          // Se rederige al login
          this.router.navigate(['login']);
          this.authState.next(false);
        }
      })
      .catch((error)=>console.error(error))
    });
  }
  login(login:any){
    // Se obtiene si existe alguna data de sesión
    this.dbtaskService.getSesionData(login)
    .then((data)=>{ // Si se ejecuto correctamente la consulta
      if(data===undefined){ // Si es undefined es por que no retorno firmas
        this.presentToast("Credenciales Incorrectas");
      }else{ // Si no es undefined es por que el usuario y la password coincidieron con algun registro
        data.active=1; // se cambia el active a 1
        this.dbtaskService.updateSesionData(data) // Y se actualiza la sesión
        .then((response)=>{ // Si la sentencia se ejecuto correctamente sin errores
          this.storage.set("USER_DATA",data); // Guardamos la data retornada
          this.authState.next(true);
          this.router.navigate(['home']); // Y se navega hasta el home
          
        });
      }
    })
    .catch((error)=>{
      console.log(error);
    });
  }
  async presentToast(message:string, duration?:number){
    const toast = await this.toastController.create(
      {
        message:message,
        duration:duration?duration:2000
      }
    );
    toast.present();
  }
  isAuthenticated() {
    return this.authState.value;
  }
}