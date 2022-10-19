import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-mis-datos',
  templateUrl: './misdatos.component.html',
  styleUrls: ['./misdatos.component.scss'],
})
export class MisdatosComponent implements OnInit {


  ngOnInit() {}
  usuario:String;
  niveles:any[]=[
    {id:1,nivel:"Basica Incompleta"},
    {id:2,nivel:"Basica Completa"},
    {id:3,nivel:"Media Incompleta"},
    {id:4,nivel:"Media Completa"},
    {id:5,nivel:"Media Incompleta"},
    {id:6,nivel:"Superior Completa"}
  ]
  data:any={
    nombre:"",
    apellido:"",
    education:"",
    nacimiento:""
  };
  constructor(public alertController: AlertController) {

  }
  /**
   * Metodo limpíar recorre un objeto y se define el 
   * valor de su propiedad en ""
   */
  limpiar(){
    for (var [key, value] of Object.entries(this.data)) {
      Object.defineProperty(this.data,key,{value:""})
    }
  }

  mostrar(){
    // IF
    (this.data.nombre!="" && this.data.apellido!="") &&
    // THEN 
    this.presentAlert("Usuario","Su nombre es "+this.data.nombre+" "+this.data.apellido) ||
    // ELSE 
    this.presentAlert("Usuario","No ingreso nada");
  }

  async presentAlert(titulo:string,message:string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
}
