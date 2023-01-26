import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  //Listado usuario para tabla
  listadoUsuarios:any[] = [
    { 
      nombre: 'Marisa',
      apellidos:'Perez Lopez',
      telefono:'555625852',
      cp:'25363',
      password:'111111',
      password2:'222222',
    },
    { 
      nombre: 'Ramón',
      apellidos:'Sorolla Perez',
      telefono:'588747174',
      cp:'25363',
      password:'558822',
      password2:'558822',
    },
    { 
      nombre: 'Carla',
      apellidos:'Santiago Saez',
      telefono:'555696985',
      cp:'55511',
      password:'558822',
      password2:'558822',
    },
  ];
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
