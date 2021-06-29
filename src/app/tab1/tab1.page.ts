import { Component } from '@angular/core';
import { DataService } from '../services/data-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  productos: any;

  constructor( private _dataService: DataService) {
    this.productos = this._dataService.setData();
  }

  verProducto(index: number) {
    this._dataService.productoSeleccionado = index;
  }
}
