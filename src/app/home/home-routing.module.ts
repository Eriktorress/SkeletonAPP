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
<<<<<<< HEAD
    {
      path:'certificaciones',
      component:CertificacionesComponent
    },
    {
      path:'experiencia',
      component: ExperienciaComponent
    },
    {
      path:'misdatos',
      component: MisdatosComponent
    }
  ]
},

=======
      {
        path:'/experiencia',
        component: ExperienciaComponent

      },
      {
        path:'/certificaciones',
        component: CertificacionesComponent

      },
      {
        path:'/misdatos',
        component: MisdatosComponent
      },

    ]
  },
>>>>>>> 651362d1e2817db843ba2d95401d67194f3c409b
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
