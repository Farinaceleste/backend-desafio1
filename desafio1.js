class ProductManager {

    constructor() {

        this.productos = []
    }

    AddProduct(titulo, descripcion, precio, thumbnail, codigo, stock) {

        if (!titulo || !descripcion || !precio || !thumbnail || !codigo || !stock) {
            console.log ("Es necesario rellenar todos los campos")
            return
        }


        let existe = this.productos.find(producto => producto.codigo === codigo)
        if (existe) {
            console.log('El producto ya existe')
            return
        }

        let id = 1
        if (this.productos.length > 0) {
            id = this.productos[this.productos.length - 1].id + 1
        }

        let nuevoProducto = {
            id: id,
            titulo: titulo,
            descripcion: descripcion,
            precio: precio,
            thumbnail: thumbnail,
            codigo: codigo,
            stock: stock
        }
        this.productos.push(nuevoProducto)
    }

    GetProducts() {
        return this.productos
    }

    GetProductsbyId(id) {
        let producto = this.productos.find(producto => producto.id === id)
        if (!producto) {
            console.log("Not Found")
            return
        }
        return producto
    }
}

let producto1 = new ProductManager()

producto1.AddProduct("Silla", "Para sentarse", 2100, "sin foto", 1, 5)
producto1.AddProduct("Mesa", "Para sentarse a comer", 3500, "sin foto", 2, 7)
producto1.AddProduct("Sillon", "Para acostarse", 4000, "sin foto", 3, 3)
producto1.AddProduct("Lavarropas", "Para lavar ropa", 10500, "sin foto", 4, 2)

console.log (producto1.GetProducts())

producto1.AddProduct("Secarropas", "Para secar ropa", 11500, "sin foto", 4, 10)
producto1.AddProduct("Heladera", "Para enfriar", "sin foto", 5, 8)

producto1.GetProductsbyId(10)
console.log (producto1.GetProductsbyId(2))















