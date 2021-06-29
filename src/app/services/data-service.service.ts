import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  productos = [
    {
      nombre: 'Chocolate crema de Maní y Leche'
    },
    {
      nombre: 'Chocolate y Ron 70%'
    },
    {
      nombre: 'Chocolate Oscuro 61.9%'
    },
    {
      nombre: 'Chocolate Leche y Café'
    },
    {
      nombre: 'Chocolate Leche y Menta'
    },
    {
      nombre: 'Chocolate Dulce de Leche'
    },
    {
      nombre: 'Chocolate Leche y Galleta'
    }
]

  productoSeleccionado: number;

  constructor() { }

  setData(){
    return this.productos;
  }
}
