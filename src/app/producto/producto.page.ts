import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { DataService } from '../services/data-service.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {

  producto: any;
  productos: any;
  cantidadProducto: number = 10;

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  

  constructor( private _dataService: DataService,
               public _toastController: ToastController) {}

  ngOnInit() {
    this.productos = this._dataService.setData();
    console.log(this.producto);
    if (this.producto) {
      this.producto = this.productos[this._dataService.productoSeleccionado];
    }
    this.producto = this.productos[1];
  }

  increaseQuantity() {
    this.cantidadProducto += 1;
  }

  decreaseQuantity() {
    this.cantidadProducto -= 1;
  }

    async orderProduct() {
      const toast = await this._toastController.create({
        message: 'Producto Agregado!',
        duration: 2000,
        color: "success"
      });
      toast.present();
    }

}
