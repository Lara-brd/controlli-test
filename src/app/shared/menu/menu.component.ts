import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [`
    img{
      display:block;
    }
  `]
})


export class MenuComponent {

  crearTitle:string = "Crear usuario";
  listadoTitle:string = "Listado usuario"

}
