import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HilosComponent} from './components/hilos/hilos.component';
import {TecnicasComponent} from './components/tecnicas/tecnicas.component';
import { LoginComponent } from './components/login/login.component';
import { PoliticasComponent } from './components/politicas/politicas.component';
import { EnviosComponent } from './components/envios/envios.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { RegistroComponent } from './components/registro/registro.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { ListaCarritoComponent } from './components/lista-carrito/lista-carrito.component';

const routes: Routes = [

  {pathMatch:'full', path:"", redirectTo:'home'},
  {path:"hilos", component:HilosComponent},
  {path:"tecnica", component:TecnicasComponent},
  {path:"login", component:LoginComponent},
  {path:"politicas", component:PoliticasComponent},
  {path:"envios", component:EnviosComponent},
  {path:"contacto", component:ContactoComponent},
  {path:"registro", component:RegistroComponent},
  {path:"home", component:HomeComponent},
  {path:"formulario", component:ReactiveFormsComponent},
  {path:"carrito", component:ListaCarritoComponent},
  {path:"**", component:PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
