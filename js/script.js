var nombre= 'Paloma';
// asi se declara una funcion
let edad= 23;
const PI= 3.1416;
const TAU= Math.PI * 2;
let esMayorDeEdad= edad >= 18;
nombre= 'Paloma Arreola';
edad= 24;
console.log('Hola ' + nombre);

function saludar(_nombre= "Mundo") {
    // asi se declara patametro de una funcion
    alert("Hola" + _nombre);
}
// asi se llama a una funcion
saludar(); //llamada a una funcion sin parametros
//llamada a una funcion con parametros
saludar(nombre);
saludar("Juan");