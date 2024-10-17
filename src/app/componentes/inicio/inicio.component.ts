import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  formularioForm;
  datos_formulario:any;

  constructor(private formBuilder: FormBuilder){
    this.formularioForm = this.formBuilder.group({
      nombre:'',
      apellido: '',
      edad: '',
      correo: ''
    })
  }
  
  ngOnInit(){
    console.log("Test")
  }

  enviarDatos(){
  this.datos_formulario = this.formularioForm.value;
  console.log(this.datos_formulario)
  }
}
