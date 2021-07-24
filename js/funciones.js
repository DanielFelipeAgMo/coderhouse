$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});


function sesion() {
    var form = document.form;
    var user = form.usuario.value;
    var pass = form.contrasena.value;

    if (user == "usuario@correo.com" && pass == "123") {
        alert("Bienvenido al sistema");
    } else {
        alert("Datos incorrectos");
    }
}