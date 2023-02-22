import { Component, Input, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Compra } from 'src/app/models/compra';
import { CarritoService } from 'src/app/services/carrito_service/carrito.service';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.scss'],
})
export class CompraComponent implements OnInit {
  @Input() compra!: Compra;

  constructor(private carritoService: CarritoService, private alertController: AlertController) { }

  ngOnInit() {}

  onModificar(cantidad: string|number|null|undefined) {
    if(cantidad != undefined && cantidad != null && cantidad != ''){
      if(Number(cantidad) > 0){
        this.compra.setCantidad(Number(cantidad));
        //this.carritoService.modificarCompra(this.compra.getId(), Number(cantidad));
        this.presentModifyAlert();
      } else {
        this.onBorrar();
      }
    }
  }

  onBorrar() {
    this.carritoService.eliminarCompra(this.compra.getId());
    this.presentDeleteAlert();
  }

  async presentModifyAlert(){
    const alert = await this.alertController.create({
      header: 'Modificar',
      message: 'La cantidad se ha modificado correctamente',
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentDeleteAlert(){
    const alert = await this.alertController.create({
      header: 'Borrar',
      message: 'La compra se ha borrado correctamente',
      buttons: ['OK']
    });
    await alert.present();
  }

}
