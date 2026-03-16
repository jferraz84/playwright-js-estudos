// Functions (Funções)
// Declarative function (Declaração de função)

helloOne(); // Hello One!
function helloOne() {
    console.log('Hello One!');
}   


//Anonymous function (Função anônima)
var helloTwo = function() {
    console.log('Hello Two!');
}
helloTwo(); // Hello Two!

// ES6 - function syntax or arrow function (Sintaxe de função ES6 ou função de seta)
var helloThree = () => {
    console.log('Hello Three!');
}  

// Function with arguments (Função com argumentos)

function printName(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}   

function sum(a, b) {
    return a + b;
} 

function multiply(number) {
    var result = number * 2;
    return result;  
}

var mayResult = multiply(5); // 10
printName('Jorge', 'Ferraz'); // Hello Jorge Ferraz
console.log(sum(5, 10)); // 15
console.log(mayResult); // 10

// importing helper function
import { printAge } from '../helpers/printHelper.js';    
printAge(41); // 41


//import everything from helper file
import * as helper from '../helpers/printHelper.js';
helper.printAge(42); // 42