import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.page.html',
  styleUrls: ['./product-form.page.scss'],
})
export class ProductFormPage implements OnInit {


  @Input() productName: string;
  @Input() productQuantity: number;

  usuario = {
    email: '',
    nombre: ''
  };

  form: FormGroup;

  constructor( public _modalController:ModalController,
               private _formBuilder: FormBuilder,
               public _toastController: ToastController ) { }

  ngOnInit() {
    this.form = this._formBuilder.group({
      nombre: [''],
      email: [''],
      dirección: [''],
    });
  }

  dismissModal() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this._modalController.dismiss({
      'dismissed': true
    });
  }

  onSubmitTemplate() {
    console.log('Form submit');
    console.log( this.usuario );
  }

  async orderProduct() {
  const toast = await this._toastController.create({
    message: 'Orden Agregada!',
    duration: 2000,
    color: "success"
  });
  toast.present();
  }

  async failedOrder() {
    const toast = await this._toastController.create({
      message: 'Formulario Inválido!',
      duration: 2000,
      color: "danger"
    });
    toast.present();
    }

  submit() {
    if (this.form.valid) {
      
      this.orderProduct();
      this.dismissModal();
    }
    else{
      this.failedOrder();
    }
  }

}
