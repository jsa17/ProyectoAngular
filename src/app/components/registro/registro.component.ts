import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private authService: AuthService) {

  }

  ngOnInit(): void {
  }
  usuario={
    email:'',
    password:''
  }

  registrarse(){
    const {email, password} = this.usuario;
    this.authService.register(email, password).then(res=>{
      console.log("se registro: ", res);
    })
  }

}
