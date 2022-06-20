import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  form: FormGroup;
  
  constructor( private fb: FormBuilder) {
    this.form = this.fb.group({

    })
   }
   

  ngOnInit(): void {
  }

  get validaNombre(){
    return null;
  }

  enviar
  (){

  }

  creaForm(){
    this.form= this.fb.group({
      nombre: ['',[Validators.required, Validators.minLength(3)]],
      paterno:['', Validators.required, Validators.minLength(3)],
      materno:['', Validators.required, Validators.minLength(3)],
      correo :['', [Validators.email]],
      comentario:['',[Validators.required, Validators.minLength(10)]]
    })
  }


}
