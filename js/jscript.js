//declaro variables
/*let a = 8;
let b = 7;

//Impresion de lo solicitado por consola
/*console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

//Impresion mediante un alert
/*alert("Las varables a & b tienen los valres " + a +" y " + b + " correspondientemente.");

alert("La suma de a + b es igual a  " + a + b);
alert("La resta de a - b es igual a  " + a - b);
alert("La multiplicación de a * b es igual a  " + a * b);
alert("La división de a / b es igual a  " + a / b);
alert("El sobrante de a % b es igual a  " + a % b);


*/

//Algoritmo con Condicional

/*let edad = prompt("Ingresa tu edad por favor :")

if (edad == "") { alert('No haz ingresado tu edad') } else if (edad > 0 && edad <= 15) { alert('Eres un niño mejor toma tu biberón') } else if (edad >= 16 && edad < 18) { alert('Espera un poco ya casi puedes ingresar') } else if (edad >= 18 && edad <= 50) { alert('Puedes ingresar') } else if (edad >= 51 && edad <= 90) { alert('Puedes ingresar pero ten cuidado con tu corazón, puede darte un infarto') } else if (edad >= 91 && edad <= 100) { alert('Puedes ingresar...pero a un asilo') } else { alert('Eres un fosil viviente')};*/

//simulador interactivo

alert("¡¡¡Bienvenido a Las Greñudas de Nata!!!");
alert("Ingresa dos números y selecciona un tipo de operación");

//Función para captura de datos

/*
function enviar() {
    var nombrecli = document.getElementById("nombrecli").value;
    var prodselec = document.getElementById("productos").value;
    if (prodselec == "1") {
        prodselec = "arepa"
        return alert("Tu nombre es " + nombrecli + " y tu producto escogido es Arepa Desmechada con un valor de " + prodselec + " COP. ");
    }
    if (prodselec == "2") {
        return alert("Tu nombre es " + nombrecli + " y tu producto escogido es Patacón con Desmechada con un valor de " + prodselec + " COP. ");
    }
    if (prodselec == "3") {
        return alert("Tu nombre es " + nombrecli + " y tu producto escogido es Hamburguesa Pequeña con un valor de " + prodselec + " COP. ");
    }
    if (prodselec == "4") {
        return alert("Tu nombre es " + nombrecli + " y tu producto escogido es Hamburguesa tradicional con un valor de " + prodselec + " COP. ");
    } //else
    //  return alert("Oye " + nombrecli + " Debes seleccionar algun producto de la lista.");


}*/

function operacion() {

    var numero1 = document.getElementById("numero1").value;
    numero1 = parseFloat(numero1);
    var numero2 = document.getElementById("numero2").value;
    numero2 = parseFloat(numero2);

    var operation = document.getElementById("operaciones").value;
    if (operation == "suma") {
        /*Codigo de la operacion de la suma aqui*/
        alert(operation + ': ' + (numero1 + numero2));
    }
    if (operation == "resta") {
        /*Codigo de la operacion de la suma aqui*/
        alert(operation + ': ' + (numero1 - numero2));
    }
    if (operation == "multiplicacion") {
        /*Codigo de la operacion de la multiplicacion aqui*/
        alert(operation + ': ' + (numero1 * numero2));
    }
    if (operation == "division") {
        /*Codigo de la operacion de la division aqui*/
        alert(operation + ': ' + (numero1 / numero2));
    }
    return false;
}