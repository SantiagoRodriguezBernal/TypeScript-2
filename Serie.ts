export class Serie {
    id:number;
    nombre:string;
    productora:string;
    temporadas:number;
    resumen:string;
    informacion:string;
    imagen:string;
    constructor(_id: number, _nombre: string, _productora: string, _temporadas: number, _resumen:string, _informacion: string, _imagen:string) {
        this.id = _id;
        this.nombre = _nombre;
        this.productora = _productora;
        this.temporadas = _temporadas;
        this.resumen = _resumen;
        this.informacion = _informacion;
        this.imagen = _imagen
    }
}
