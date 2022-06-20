import { Component, OnInit } from '@angular/core';
import { hilos } from '../../hilos';

@Component({
  selector: 'app-hilos',
  templateUrl: './hilos.component.html',
  styleUrls: ['./hilos.component.css']
})
export class HilosComponent implements OnInit {

  hilos = hilos;
  constructor() { }

  ngOnInit(): void {
  }

  agregarCarrito(){
    
  }
}
