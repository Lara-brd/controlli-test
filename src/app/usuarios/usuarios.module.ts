import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CrearUsuarioComponent } from './pages/crear-usuario/crear-usuario.component';
import { ListadoUsuarioComponent } from './pages/listado-usuario/listado-usuario.component';
import { MaterialModule } from '../material/material.module';
import { ListadoUsuario2Component } from './pages/listado-usuario2/listado-usuario2.component';




@NgModule({
  declarations: [
    CrearUsuarioComponent,
    ListadoUsuarioComponent,
    ListadoUsuario2Component,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports:[
    CrearUsuarioComponent,
    ListadoUsuarioComponent
  ]
})
export class UsuariosModule { }
