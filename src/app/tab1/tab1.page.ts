import { Component } from '@angular/core';
import { Producto } from '../models/producto';
import { ProductoService } from '../services/producto_service/producto.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  productos!: Producto[];

  constructor(private productoService: ProductoService) {
    productoService.getProductos$().subscribe(productos => {
      this.productos = productos;
    });
  }

}
