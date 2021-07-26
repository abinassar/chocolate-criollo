import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  productos = [
    {
      nombre: 'Chocolate crema de Maní y Leche',
      img: '../../assets/images/Chocolate-Leche-y-Mani.jpg.png'
    },
    {
      nombre: 'Chocolate y Ron 70%',
      img: '../../assets/images/Chocolate-Ron-65.jpg.png'
    },
    {
      nombre: 'Chocolate Oscuro 61.9%',
      img: '../../assets/images/Chocolate-61.9-Cacao.jpg.png'
    },
    {
      nombre: 'Chocolate Leche y Café',
      img: '../../assets/images/Chocolate-Leche-y-Cafe.jpg.png'
    },
    {
      nombre: 'Chocolate Leche y Menta',
      img: '../../assets/images/Chocolate-Leche-y-Menta.jpg.png'
    },
    {
      nombre: 'Chocolate Dulce de Leche',
      img: '../../assets/images/Chocolate-Dulce-de-Leche.jpg.png'
    },
    {
      nombre: 'Chocolate Leche y Galleta',
      img: '../../assets/images/Chocolate-Leche-y-Galletas.jpg.png'
    },
    {
      nombre: 'Chocolate Mango',
      img: '../../assets/images/Chocolate-Mango.jpg.png'
    },
    {
      nombre: 'Chocolate de Parchita y Piña',
      img: '../../assets/images/Chocolate-Parchita-y-Pina.jpg.png'
    },
    {
      nombre: 'Chocolate Pie de Limón',
      img: '../../assets/images/Chocolate-Pie-de-Limon.jpg.png'
    },
    {
      nombre: 'Chocolate Tres Leches',
      img: '../../assets/images/Chocolate-Tres-Leches.jpg.png'
    },
    {
      nombre: 'Chocolate Naranja y Galletas',
      img: '../../assets/images/Chocolate-Trocitos-de-Naranjas-y-Galletas.jpg.png'
    },
    {
      nombre: 'Rocas de Chocolate',
      img: '../../assets/images/Rocas-De-Chocolate.png'
    }
]

  productoSeleccionado: number;

  constructor() { }

  setData(){
    return this.productos;
  }
}
