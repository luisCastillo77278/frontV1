import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-solicitud-renovacion',
  templateUrl: './solicitud-renovacion.component.html',
  styles: [
  ]
})
export class SolicitudRenovacionComponent implements OnInit {

  formulario: FormGroup;
  aparecer: boolean = true;
  constructor(private fb: FormBuilder) { 
    this.crearFormulario();
    //this.proceso.getPersona().subscribe( s => console.log( s['persona']));
  }

  get nombreInvalid(){
    return this.formulario.get('nombre').invalid && this.formulario.get('nombre').touched;
  }

  get apellidoMInvalid(){
    return this.formulario.get('apellidoM').invalid && this.formulario.get('apellidoM').touched;
  }

  get apellidoPInvalid(){
    return this.formulario.get('apellidoP').invalid && this.formulario.get('apellidoP').touched;
  }

  get correoInvalid(){
    return this.formulario.get('correo').invalid && this.formulario.get('correo').touched;
  }

  get telInvalid(){
    return this.formulario.get('telefono').invalid &&  this.formulario.get('telefono').touched;
  }

  get numRegInvalid (){
    return this.formulario.get('numReg').invalid && this.formulario.get('numReg').touched;
  }

  // get socialInvalid (){
  //   return this.formulario.get('razonS').invalid && this.formulario.get('razonS').touched;
  // }

  // get denominacionInvalid(){
  //   return this.formulario.get('denominacionF').invalid && this.formulario.get('denominacionF').touched;
  // }



  ngOnInit(): void {
    
  }

  crearFormulario(){
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required, ]],
      apellidoP: ['', [Validators.required]],
      apellidoM: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.min(10)]],
      numReg: ['', [Validators.required]],
      // razonS: ['', [Validators.required]],
      // denominacionF: ['', [Validators.required]]
    });
  }

  hidden(){
    this.aparecer = true;
  }

  show(){
    this.aparecer = false;
    this.formulario.controls['razonS'].markAsUntouched();
    this.formulario.controls['denominacionF'].markAsUntouched();
  }


  guardar(){

    if( this.formulario.invalid ){
      Object.values( this.formulario.controls ).forEach( form=>{
        form.markAsTouched();
        //form.markAsUntouched();
      });

      return;
    }

    console.log( this.formulario.value );
    //this.proceso.postPersona(this.formulario.value).subscribe( r => console.log( r));
  }


}
