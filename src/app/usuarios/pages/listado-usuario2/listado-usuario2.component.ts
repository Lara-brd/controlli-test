import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { UsuariosService } from '../../service/usuarios.service';

@Component({
  selector: 'app-listado-usuario2',
  templateUrl: './listado-usuario2.component.html',
  styleUrls: ['./listado-usuario2.component.scss']
})
export class ListadoUsuario2Component {

  @ViewChild('tabla') tablaUsuarios!:MatTable<any>;
  
  displayedColumns: string[] = [
    'nombre', 
    'apellidos', 
    'telefono', 
    'cp', 
    'borrar'
  ];

  ELEMENT_DATA:any[] = this.usuariosServicios.listadoUsuarios;

  dataSource = this.ELEMENT_DATA;

  constructor( private usuariosServicios:UsuariosService){}

  deleteUser(user:any){
    this.usuariosServicios.deleteUser(user);
    this.tablaUsuarios.renderRows();
   
  }


}


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

