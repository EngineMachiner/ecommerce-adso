
export interface IProduct {
    nombre: string;   descripcion: string,
    precio: string;   colores: string[]
}

export const products: IProduct[] = [

    {
        nombre: 'Producto #1',
        descripcion: 'Descripción #1',
        precio: '10000',    colores: [ 'red', 'orange' ]
    },

    {
        nombre: 'Producto #2',
        descripcion: 'Descripción #2',
        precio: '20000',    colores: [ 'blue', 'green' ]
    },

    {
        nombre: 'Producto #3',
        descripcion: 'Descripción #3',
        precio: '30000',    colores: [ 'gray', 'purple' ]
    },

    {
        nombre: 'Producto #4',
        descripcion: 'Descripción #4',
        precio: '40000',    colores: [ 'lime', 'black' ]
    },

    {
        nombre: 'Producto #5',
        descripcion: 'Descripción #5',
        precio: '150000',    colores: [ 'cyan', 'orange' ]
    }

]

export const productTypes1 = [ 'Azul', 'Verde', 'Rojo' ]