import { Component } from '@angular/core';
import { Compra } from '../models/compra';
import { CarritoService } from '../services/carrito_service/carrito.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  compras!: Compra[];

  constructor(private carritoService: CarritoService) {
    carritoService.getCompras$().subscribe(compras => {
      this.compras = compras;
    });
  }

}
