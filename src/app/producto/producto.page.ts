import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data-service.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {

  producto: any;
  productos: any;

  constructor( private _dataService: DataService) {
    this.productos = this._dataService.setData();
    this.producto = this.productos[this._dataService.productoSeleccionado];
   }

  ngOnInit() {
  }

}
