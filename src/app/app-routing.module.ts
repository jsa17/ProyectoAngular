import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HistoriaComponent} from './components/historia/historia.component';
import {HilosComponent} from './components/hilos/hilos.component';
import {TecnicasComponent} from './components/tecnicas/tecnicas.component';
import {AccesoriosComponent} from './components/accesorios/accesorios.component';
import {PuntosComponent} from './components/puntos/puntos.component';

const routes: Routes = [
  {path:"historia", component:HistoriaComponent},
  {path:"hilos", component:HilosComponent},
  {path:"tecnica", component:TecnicasComponent},
  {path:"accesorios", component:AccesoriosComponent},
  {path:"puntos", component:PuntosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
