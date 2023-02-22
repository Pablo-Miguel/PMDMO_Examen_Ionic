import { Component, Input, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Producto } from 'src/app/models/producto';
import { CarritoService } from 'src/app/services/carrito_service/carrito.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss'],
})
export class ProductoComponent implements OnInit {

  @Input() producto!: Producto;

  constructor(private carritoService: CarritoService, private alertController: AlertController) { }

  ngOnInit() {}

  onComprar() {
    this.carritoService.addCompra(this.producto, 1);
    this.presentAlert();
  }

  async presentAlert(){
    const alert = await this.alertController.create({
      header: 'Comprar',
      message: 'El producto se ha comprado correctamente',
      buttons: ['OK']
    });
    await alert.present();
  }

}
