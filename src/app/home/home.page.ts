import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Geolocation, Geoposition } from '@awesome-cordova-plugins/geolocation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  data: any; // Generamos una variable Any (permite cualquier valor)

  /**
   * En el constructor del HomePage se colocan por parametros
   * todas aquellas propiedades con el siguiente formato
   * private = visibilidad
   * activeRoute = identificador
   * ActiveRoute = Tipo de Objeto
   * : Indica que el identificador sera de la clase posterior a los : puntos
   * 
   */
  constructor(private activeroute: ActivatedRoute, private router: Router, public geolocation:Geolocation) {
    // Se llama a la ruta activa y se obtiene sus parametros mediante una subscripcion
    this.activeroute.queryParams.subscribe(params => { // Utilizamos lambda
      if (this.router.getCurrentNavigation().extras.state) { // Validamos que en la navegacion actual tenga extras
        this.data = this.router.getCurrentNavigation().extras.state.user; // Si tiene extra rescata lo enviado
        console.log(this.data) // Muestra por consola lo traido
      } else { this.router.navigate(["/login"]) } // Si no tiene extra la navegacion actual navegar al login
    });
  }
  segmentChanged($event){
    console.log($event.detail.value);
    let direction=$event.detail.value
    this.router.navigate(['home/'+direction])
  }
  ngAfterViewInit(){
    this.geolocationNative();
  }
  geolocationNative (){
    this.geolocation.getCurrentPosition().then((geoposition: Geoposition)=>{

      console.log(geoposition)
    })
  }
}

