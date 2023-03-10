import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { UsuariosService } from '../../service/usuarios.service';

@Component({
  selector: 'app-listado-usuario',
  templateUrl: './listado-usuario.component.html',
  styleUrls: ['./listado-usuario.component.scss']
})
export class ListadoUsuarioComponent {

  displayedColumns: string[] = ['nombre', 'apellidos', 'telefono', 'cp', 'borrar'];

  @ViewChild('tabla') tablaUsuarios!:MatTable<any>;
  
  ELEMENT_DATA:any[] = this.usuariosServicios.listadoUsuarios;
  dataSource = this.ELEMENT_DATA;

  constructor( private usuariosServicios:UsuariosService){}

  deleteUser(user:any){
    this.usuariosServicios.deleteUser(user);
    this.tablaUsuarios.renderRows();
   
  }

}
