// Conditional statements (Declarações condicionais)


// if (condition) {
//     // execute some code here if condition is true (execute algum código aqui se a condição for verdadeira)
// } else {
//     // execute some code here if condition is false (execute algum código aqui se a condição for falsa)
// }   

var age = 20;

if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}

console.log("------------------------------");

// If hour between 6 and 12 print "Good morning" (Se a hora estiver entre 6 e 12, imprime "Bom dia")
// If hour between 12 and 18 print "Good afternoon" (Se a hora estiver entre 12 e 18, imprime "Boa tarde")
// If hour between 18 and 24 print "Good evening" (Se a hora estiver entre 18 e 24, imprime "Boa noite")
// If hour between 0 and 6 print "Good night" (Se a hora estiver entre 0 e 6, imprime "Boa madrugada")

// helper that returns a random integer between min and max inclusive
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var hour = randomInt(0, 23); // random hour between 0 and 23 (hora aleatória entre 0 e 23)
console.log("Current hour: " + hour);

if (hour >= 6 && hour < 12) {
    console.log("Good morning");
} else if (hour >= 12 && hour < 18) {
    console.log("Good afternoon");
} else if (hour >= 18 && hour < 24) {
    console.log("Good evening");
} else {
    console.log("Good night");
}
console.log("------------------------------");

var ageIsMoreThanEighteen = false; // age is more than 18 (idade é maior que 18)
var isUSCitizen = true; // is a US citizen (é um cidadão dos EUA)

if (ageIsMoreThanEighteen && isUSCitizen) {
    console.log("This customer is eligible for a driving license.");
} else {
    console.log("This customer is NOT eligible for a driving license.");
}