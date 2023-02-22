export class Producto {

    private id: number;
    static id_cont: number = 0;

    constructor(private nombre: string, private precio: number) { 
        this.id = this.autoIncrementId();
    }

    autoIncrementId() {
        return Producto.id_cont++;
    }

    getId(): number {
        return this.id;
    }

    setId(id: number) {
        this.id = id;
    }

    getNombre(): string {
        return this.nombre;
    }

    setNombre(nombre: string) {
        this.nombre = nombre;
    }

    getPrecio(): number {
        return this.precio;
    }

    setPrecio(precio: number) {
        this.precio = precio;
    }

}
