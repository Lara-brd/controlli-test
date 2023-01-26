import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearUsuarioComponent } from './usuarios/pages/crear-usuario/crear-usuario.component';
import { ListadoUsuarioComponent } from './usuarios/pages/listado-usuario/listado-usuario.component';
import { ListadoUsuario2Component } from './usuarios/pages/listado-usuario2/listado-usuario2.component';

const routes: Routes = [
  {
    path:'',
    component:CrearUsuarioComponent
  },
  { 
    path:'crear',
    component:CrearUsuarioComponent
  },
  {
    path:'listado',
    component:ListadoUsuario2Component
  },
  {
    path:'**',
    component:CrearUsuarioComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
