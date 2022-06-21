import { Component, OnInit } from '@angular/core';
import { hilos } from 'src/app/hilos';
import { ProductosService } from 'src/app/services/productos.service';



@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  hilos = hilos;
  productos = new ProductosService();
  constructor() { }

  ngOnInit(): void {
  }

  agregarCarrito(hilos:any){
    this.productos.agregarCarrito();
    window.alert("se agrega producto id:" +hilos.id);
  }

  
}
