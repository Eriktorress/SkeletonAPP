import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificacionesComponent } from '../certificaciones/certificaciones.component';
import { ExperienciaComponent } from '../experiencia/experiencia.component';
import { MisdatosComponent } from '../misdatos/misdatos.component';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path:'certificaciones',
        component: CertificacionesComponent
      },
      {
        path:'experiencia',
        component: ExperienciaComponent
      },
      {
        path:'perfil',
        component: MisdatosComponent
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}