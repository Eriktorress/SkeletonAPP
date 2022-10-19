import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss'],
})
export class ExperienciaComponent implements OnInit {

  expe = {
    empresa: "",
    anoinicio: "",
    anotermino: "",
    cargo: ""

  }

  constructor(private router: Router) { }

  ngOnInit() {
  }
  ingresar() {
    // Se declara e instancia un elemento de tipo NavigationExtras
    let navigationExtras: NavigationExtras = {
      state: {
        expe: this.expe // Al estado se asignamos un objeto con clave y valor
      }
    };
    this.router.navigate(['/'], navigationExtras); // navegamos hacia el misdatos y enviamos información adicional
  }

}