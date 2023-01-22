import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  //Listado usuario para tabla
  listadoUsuarios:any[] = [];
  // get listadoUsuarios(){
  //   return [...this._listadoUsuarios]
  // }

  constructor() { }

  addUsuarios(usuario:any){
    this.listadoUsuarios.push(usuario);
  }

  deleteUser(user:any){
    const i = this.listadoUsuarios.indexOf(user);
    this.listadoUsuarios.splice(i,1);
    console.log(this.listadoUsuarios)
  }

}
