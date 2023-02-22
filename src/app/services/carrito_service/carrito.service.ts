import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Compra } from 'src/app/models/compra';
import { Producto } from 'src/app/models/producto';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  compras!: Compra[];
  compras$!: BehaviorSubject<Compra[]>;

  constructor() {
    this.compras = [];
    this.compras$ = new BehaviorSubject<Compra[]>(this.compras);
  }

  getCompras$(): Observable<Compra[]> {
    return this.compras$.asObservable();
  }

  addCompra(producto: Producto, cantidad: number) {
    this.compras.push(new Compra(producto, cantidad));
    this.compras$.next([...this.compras]);
  }

  modificarCompra(id: number, cantidad: number) {
    let find_compra: Compra | undefined = this.compras.find(compra => compra.getId() === id);
    if(find_compra) {
      find_compra.setCantidad(cantidad);
      this.compras$.next([...this.compras]);
    }
  }

  eliminarCompra(id: number) {
    this.compras = this.compras.filter(compra => compra.getId() !== id);
    this.compras$.next([...this.compras]);
  }

}
