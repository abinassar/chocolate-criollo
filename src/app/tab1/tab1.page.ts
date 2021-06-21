import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  productos: any = [
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



  constructor() {}

}
