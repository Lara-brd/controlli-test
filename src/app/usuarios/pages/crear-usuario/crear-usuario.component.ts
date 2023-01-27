import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { UsuariosService } from '../../service/usuarios.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styles: [``]
})



export class CrearUsuarioComponent implements OnInit{

  formSubmited:boolean = false;

  hide:boolean = true;
  hide2:boolean = true;
  public nombreApellidoPattern:string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public telefonoPatter:string = '([1-9]+)';
  public cpPattern:string = '^\d{5}$'

  public formRegister:FormGroup = this.fb.group({
    nombre:['', [Validators.required]],
    apellidos:['', [Validators.required, Validators.pattern(this.nombreApellidoPattern)]],
    telefono:['',[Validators.required, Validators.pattern(this.telefonoPatter)]],
    cp:['',[Validators.required]],
    password:['', [Validators.required, Validators.minLength(6)]],
    password2:['', [Validators.required, Validators.minLength(6)]],
  },{validators: [ this.camposIguales('password', 'password2')]} )


/////////////////////////////////////////////////////////////////


  constructor( private fb:FormBuilder,
                private usuariosService:UsuariosService){}


///////////////////////////////////////////////////////////////////

  ngOnInit(): void {
    this.formRegister.reset()
  }


  //Validación de los passwords
  camposIguales( campo1:string, campo2:string){
    
    return (formGroup:AbstractControl):ValidationErrors | null =>{
      const pass1 = formGroup.get(campo1)?.value;
      const pass2 = formGroup.get(campo2)?.value;

      if(pass1 !== pass2){
        formGroup.get(campo2)?.setErrors({noIguales:true})
        return { noIguales:true }
      }

      formGroup.get(campo2)?.setErrors(null);
      return null
    }
  }


  //Submit del form Añadiendo usuarios a la lista
  
  submitFormulario(event:any ){

    this.formSubmited = true;

    const inputUser = this.formRegister.controls['telefono'].value;

    let found = false;

    if(this.formRegister.invalid){
      return;
    }

    if(this.usuariosService.listadoUsuarios.length === 0){
      this.newUser(event)
      
    }else{
      this.usuariosService.listadoUsuarios.forEach(el => {
        if(el.telefono === inputUser){
          found = true;
          Swal.fire({
            title: '',
            text: 'No es posible registrarse con ese teléfono.',
            icon: 'error',
            confirmButtonText: 'Cerrar'
          })
        }     
      })

      if(!found){
        this.newUser(event)
      }

    }
    
  }



  newUser(event:any){
    this.usuariosService.addUsuarios(this.formRegister.value);
    event.currentTarget.reset();
    this.formRegister.reset();
  }



}
