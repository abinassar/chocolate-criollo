import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { DataService } from '../services/data-service.service';
import { ProductFormPage } from '../shared/pages/product-form/product-form.page';

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
               public _toastController: ToastController,
               public _modalController: ModalController) {}

  ngOnInit() {
    this.productos = this._dataService.setData();
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

    async openModalForm() {
    const modal = await this._modalController.create({
      component: ProductFormPage,
      componentProps: {
        'productName': this.producto.nombre,
        'productQuantity': this.cantidadProducto,
      }
    });
    return await modal.present();

  }

}
