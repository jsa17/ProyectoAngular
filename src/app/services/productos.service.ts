import { Injectable } from '@angular/core';
import { hilos } from '../hilos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  hilos = hilos;
  items = [] as any;
  constructor() { }


  agregarCarrito(){
     this.items.push(hilos);
  }

  limpiarCarrito(){

  }

  listarCarrito(){
    return this.items;
  }
}
