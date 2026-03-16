// Loops (Estruturas de repetição)

// for (let i = 0; i < 5; i++) {
//     console.log("Iteration: " + i);
// }

// while (condition) {
//     // execute some code here
// }

// do {
//     // execute some code here
// } while (condition);


console.log("Loop for");
for (let i = 0; i < 5; i++) {
    console.log("Hello, welcome to lesson 7! index: " + i);
}
console.log("------------------------------");

var cars = ["Toyota", "Honda", "Ford", "Chevrolet"];

for (let car of cars) {
    console.log("Car: " + car);
    if (car === "Ford") {
        console.log("Found Ford, breaking the loop.");
        break; // exit the loop when "Ford" is found (sair do loop quando "Ford" for encontrado)
    }
}   

console.log("------------------------------");

// ES6 syntax for iterating over an array (Sintaxe ES6 para iterar sobre um array)
console.log("Sintaxe ES6 para iterar sobre um array");
cars.forEach(car => {
    console.log("Car: " + car);
});

console.log("------------------------------");

// while loop example (Exemplo de loop while)
console.log("Loop while");
var count = 0;
while (count < 5) {
    console.log("Count: " + count);
    count++;
}

