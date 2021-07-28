$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});

//funcion constructora para los productos de la compañía


// Mostrar elementos seleccionados
function contar() {
    let n = 0;
    //declaro la variable que almacenará los elementos de la lista
    lista = document.selector.productos
    for (let i = 0; i < lista.options.length; i++) {
        if (lista.options[i].selected) {
            document.write(lista.options[i].innerHTML)
            n++
        }

    }
    alert(" Seleccionaste " + n + " productos para comprarlos, puedes pagarlos ahora.")
}