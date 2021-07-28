//
class Product {
    constructor(name, description, price, date) {
        this.name = name
        this.description = description
        this.price = price
        this.date = date
    }
}
//
class UI {
    addProduct(product) {
        const productList = document.getElementById("product-list")
        const element = document.getElementById("div")
        element.innerHTML = `
            <div class="card text-center mb-4">
               <div class ="card-body">
                    <strong>Producto</strong>: ${product.name}
                    <strong>Descripción</strong>: ${product.description}
                    <strong>Precio</strong>: ${product.price}
                    <strong>Fecha de creación</strong>: ${product.date}
                    <a href="#" class="btn btn-danger" name= "delete">Borrar</a>
                </div>            
            </div>
       `
        productList.appendChild(element)

    }
    resetForm() {
        document.getElementById("product-form").reset()
    }

    deleteProduct() {
        if (element.name === "delete") {
            element.parentElement.parentElement.parentElement.remove()
            this.showMessage("Producto eliminado con éxito", "info")
        }
    }
    showMessage(message, cssClass) {
        const div = document.createElement("div")
        div.className = `alert alert-${cssClass} mt-4`
        div.appendChild(document.createTextNode(message))
            //Mostrando en el DOM
        const container = document.querySelector(".container")
        const app = document.querySelector("#seleccionar")
        container.insertBefore(div, app)
        setTimeout(function() {
            document.querySelector(".alert").remove()
        }, 3000)

    }
}
//Eventos DOM
document.getElementById("product-form")
    .addEventListener("submit", function(e) {
        const name = document.getElementById("name").value
        const description = document.getElementById("description").value
        const price = document.getElementById("price").value
        const date = document.getElementById("date").value

        const product = new Product(name, description, price, date)

        const ui = new UI()

        if (name === '' || description === '' || price === '' || date === '') {
            return ui.showMessage("Debe diligenciar todos los campos", "danger")
        }
        ui.addProduct(product)
        ui.resetForm()
        ui.showMessage("Producto agregado con éxito", "success")

        e.preventDefault()
    })

document.getElementById("product-list").addEventListener("click", function(e) {
    const ui = new UI()
    ui.deleteProduct(e.target)
})