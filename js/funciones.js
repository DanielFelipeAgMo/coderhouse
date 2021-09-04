$(document).ready(function() {
    //$('[data-toggle="tooltip"]').tooltip();
    
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


//Matrices o Arreglos que pueden actuar como un JSON
const carrito = [];
const productos = [
    {"id": 0, "producto": "Hamburguesa Dobletona", "precio": 12000},
    {"id": 1, "producto": "Hamburguesa especial", "precio": 10000},
    {"id": 2, "producto": "Hamburguesa sencilla", "precio": 7000},
    {"id": 3, "producto": "Hamburguesa mini", "precio": 4000},
    {"id": 4, "producto": "Greñudas", "precio": 12000},
    {"id": 5, "producto": "Choripapa sencilla", "precio": 3000},
    {"id": 6, "producto": "Choripapa mediana", "precio": 4000},
    {"id": 7, "producto": "Choripapa grande", "precio": 6000},
    {"id": 8, "producto": "Salchipapa especial", "precio": 5000},
    {"id": 9, "producto": "Salchipapa mediana", "precio": 3000},
    {"id": 10, "producto": "Salchipapa pequeña", "precio": 2000},
    {"id": 11, "producto": "Chorizo de cerdo", "precio": 2000},
    {"id": 12, "producto": "Butifarra grande", "precio": 600},
    {"id": 13, "producto": "Butifarra pequeña", "precio": 500},
    {"id": 14, "producto": "Butifarra promoción x 5", "precio": 2000},
    {"id": 15, "producto": "Superpicada", "precio": 50000},
    {"id": 16, "producto": "Picada especial", "precio": 30000},
    {"id": 17, "producto": "Picada pequeña", "precio": 20000},
    {"id": 18, "producto": "Adiciones", "precio": 1000}
];

//Funcion JQuery cuando una lista cambia
$("#lista1").on('change', function (e){
    
    //Setea las constante del QuerySelector
    const lista2 = document.getElementById('lista2');
    
    //Setea en una constante el valor de la misma instancia (Listas1)
    const producto = this.value;
    
    //Agrega elemento a la matriz o el arreglo de Carrito
    carrito.push(
        {"producto": producto, "precio": productos[this.value]["precio"]}
    );
    if(carrito != ''){
        console.log('Hay elementos')
        $("#controles").html('<button id="total" onclick="Total()">Total a pagar</button>');
        
    }
    console.log("----Carrito Actual----");
    for (let i = 0; i < carrito.length; i++) {
        const element = carrito[i];
        
        console.log(element["producto"]+ " Precio: "+element["precio"]);
    }
    
    //Adiciona contenido HTML a un elemento del DOM
    lista2.innerHTML += "<tr><td>" + productos[producto]["producto"] + " Precio: " + productos[producto]["precio"] + "</td></tr>";
    
    
})

//---------------- Funciones para el boton total---------------------

// -----METODO 1 : cuando el boton esta en el html principal

//Funcion JQuery cuando el boton ha sido pulsado
$("#total").click(function(){
    let precio = 0;
    
    
    //Itera o recorre la matriz de Carrito
    for (let i = 0; i < carrito.length; i++) {
        const element = carrito[i];
        precio = precio + element["precio"];
    }
    console.log("Total:" + precio);

    //Imprime el valor en formato html dentro de un DIV
    $("#Resultado").html('<h3>Total: '+precio+'</h3>');
   
})

// -----METODO 2: Cuando el boton es creado desde JS

//Funcion de checkout cuando el elemento o el boton no está incluido en el body
function Total(){
    let precio = 0;
    
    //Itera o recorre la matriz de Carrito
    for (let i = 0; i < carrito.length; i++) {
        const element = carrito[i];
        precio = precio + element["precio"];
    }
    console.log("Total:" + precio);

    //Imprime el valor en formato html dentro de un DIV
    $("#Resultado").html('<h3>Total: '+precio+'</h3>');
}


function objeto(){
    $(".compras").html('<h1>Hola Mundo!!</h1>');
}


$("#productos").on('change', function(e){
    console.log(this.value);
    document.getElementById("compras").innerHTML+= "<br>" + this.value;
    
})