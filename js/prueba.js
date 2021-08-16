$(document).ready(function() {
    //obtenemos el valor de los input

    $('#adicionar').click(function() {
        var nombre = document.getElementById("nombre").value;
        var descripcion = document.getElementById("descripcion").value;
        var precio = document.getElementById("precio").value;
        var i = 1; //contador para asignar id al boton que borrara la fila
        var fila = '<tr id="row' + i + '"><td>' + nombre + '</td><td>' + descripcion + '</td><td>' + precio + '</td><td><button type="button" name="remove" id="' + i + '" class="btn btn-danger btn_remove">Quitar</button></td></tr>'; //esto seria lo que contendria la fila

        i++;

        $('#mytable tr:first').after(fila);
        $("#adicionados").text(""); //esta instruccion limpia el div adicioandos para que no se vayan acumulando
        var nFilas = $("#mytable tr").length;
        $("#adicionados").append(nFilas - 1);
        //le resto 1 para no contar la fila del header
        document.getElementById("precio").value = "";
        document.getElementById("descripcion").value = "";
        document.getElementById("nombre").value = "";
        document.getElementById("nombre").focus();
    });
    $(document).on('click', '.btn_remove', function() {
        var button_id = $(this).attr("id");
        //cuando da click obtenemos el id del boton
        $('#row' + button_id + '').remove(); //borra la fila
        //limpia el para que vuelva a contar las filas de la tabla
        $("#adicionados").text("");
        var nFilas = $("#mytable tr").length;
        $("#adicionados").append(nFilas - 1);
    });
});
//Creamos una funcion para almacenar un diccionario

guardar_productos()


function guardar_productos() {
    let producto = {
        nom_producto: "Greñuda",
        precio: 10000,
        ingredientes: "Papas a la francesa, carne desmechada, queso, arepa, huevo codorniz"
    }
}
//Declaramos una variable adicional llamada servicio
let servicio = "Pedido"

localStorage.setItem("servicio", JSON.stringify(guardar_productos))

//declaramos variables para llamar por id
const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
//creamos funcion js para crear un array ser almacenado como string en local storage
form.addEventListener('submit', function(event) {
    event.preventDefault()
    let users = Array({
        usuario: username.value,
        clave: password.value
    })
    localStorage.setItem('user', JSON.stringify(users))
    location.href = 'galeria.html'
})

//Aplicando animaciones con Jquery
$(document).ready(function() {
    $('a.img').on('click', function() {
        $('.logo').animate({ width: '+=100px' })
        $('.logo').animate({ width: '-=100px' })

    })
})

//aplicando ajax
$(document).ready(function() {
    $("#enviar").click(function(datos) {
        $.post('respuesta.php', function() {
            $(alert("Gracias por suscribirse"))
        })
    })
})