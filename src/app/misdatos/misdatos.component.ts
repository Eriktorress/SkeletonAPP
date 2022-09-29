import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-misdatos',
  templateUrl: './misdatos.component.html',
  styleUrls: ['./misdatos.component.scss'],
})
export class MisdatosComponent {
  data: any;

  constructor(private activeroute: ActivatedRoute, private router: Router, private api: ApiService) {
    // Se llama a la ruta activa y se obtiene sus parametros mediante una subscripcion
    this.activeroute.queryParams.subscribe(params => { // Utilizamos lambda
      if (this.router.getCurrentNavigation().extras.state) { // Validamos que en la navegacion actual tenga extras
        this.data = this.router.getCurrentNavigation().extras.state.expe; // Si tiene extra rescata lo enviado
        console.log(this.data) // Muestra por consola lo traido
      } else { this.router.navigate(["/"]) } // Si no tiene extra la navegacion actual navegar al login
      this.api.getPosts().subscribe((res) => { console.log(res[0]); }, (error) => { console.log(error); });

    });
  }
  createPost() {
    var post = {
      title: 'titulo prueba',
      body: 'algun cuerpo del post',
      userId: 1
    }
    this.api.createPost(post).subscribe((success) => {
      console.log(success);
    }, error => {
      console.log(error);
    })
  }
}