import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Producto } from 'src/app/models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productos!: Producto[];
  productos$!: BehaviorSubject<Producto[]>;

  constructor() {
    this.productos = [
      new Producto('Producto 1', 100),
      new Producto('Producto 2', 200),
      new Producto('Producto 3', 300)
    ];
    this.productos$ = new BehaviorSubject<Producto[]>(this.productos);
  }

  getProductos$(): Observable<Producto[]> {
    return this.productos$.asObservable();
  }

  addProducto(producto: Producto) {
    this.productos.push(producto);
    this.productos$.next([...this.productos]);
  }

  deleteProducto(id: number) {
    this.productos = this.productos.filter(producto => producto.getId() !== id);
    this.productos$.next([...this.productos]);
  }

  getProductoId(id: number): Producto | null {
    let find_prod: Producto | undefined = this.productos.find(producto => producto.getId() === id)
    if(find_prod) {
      return find_prod;
    }
    return null;
  }
}
