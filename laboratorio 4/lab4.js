/* 1 Declarar dos variables con la palabra reservada "var", 
imprimir el resultado de las operaciones de "Suma", "Resta", "Multiplicación" y "División" en la consola.*/

var a = 7;
var b = 4;
var suma = (a + b);
var resta = (a - b);
var multiplicacion = (a * b);
var division = (a / b); 

console.log('Si a es igual a = ' + a + ' y b es igual a = ' + b);
console.log('el resultado de la suma de a y b es ' + suma);
console.log('el resultado de la resta de a y b es ' + resta);
console.log('el resultado de la multipliacion de a y b es ' + multiplicacion);
console.log('el resultado de la division de a y b es ' + division);


/*2 Declarar dos variables con la palabra reservada "let", imprimir la concatenación de ellas.*/

let con1 = "Peter";
let con2 = "Valdes"
    console.log(con1 + con2);
console.log("\n");

/*3 Declarar dos variables con la palabra reservada "const", imprimir cuál es el tipo de dato de esa variable.*/

const p = true;
const j = {};

console.log('El tipo de variable de p es igual a = ' + typeof(p));
console.log('El tipo de variable de j es igual a = ' + typeof(j));

/*4 Declarar una variable tipo Objecto, colocar 4 llaves dentro de él que contengan un entero, 
un string, un booleano y un objeto vacío, en ese mismo orden.*/

const obj = new Object();

obj.numero = 16;
obj.nombre = "Peter";
obj.boolean = false;
obj.vacio = null;

console.log(obj.numero, obj.nombre, obj.boolean, obj.vacio);