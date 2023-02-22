import { Producto } from "./producto";

export class Compra {
    private id: number;
    static id_cont: number = 0;

    constructor(private producto: Producto, private cantidad: number) { 
        this.id = this.autoIncrementId();
    }

    autoIncrementId() {
        return Compra.id_cont++;
    }

    getId(): number {
        return this.id;
    }

    setId(id: number) {
        this.id = id;
    }

    getProducto(): Producto {
        return this.producto;
    }

    setProducto(producto: Producto) {
        this.producto = producto;
    }

    getCantidad(): number {
        return this.cantidad;
    }

    setCantidad(cantidad: number) {
        this.cantidad = cantidad;
    }

}
