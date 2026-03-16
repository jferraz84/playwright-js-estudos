// Logical Operators (Operadores Lógicos)
// Logical "AND" (Lógico "E")
console.log(true && true);   // all values have to be true for the result to be true (todos os valores têm que ser verdadeiros para o resultado ser verdadeiro)
console.log(true && false);  // if any value is false, the result is false (se qualquer valor for falso, o resultado é falso)
console.log(false && true);
console.log(false && false); 
console.log("------------------------------");

// Logical "OR" (Lógico "OU")
console.log(true || true);    // if any value is true, the result is true (se qualquer valor for verdadeiro, o resultado é verdadeiro)
console.log(true || false);   // if any value is true, the result is true (se qualquer valor for verdadeiro, o resultado é verdadeiro)
console.log(false || true);
console.log(false || false);  // if all values are false, the result is false (se todos os valores forem falsos, o resultado é falso)

var ageIsMoreThanEighteen = true; // age is more than 18 (idade é maior que 18)
var isUSCitizen = true; // is a US citizen (é um cidadão dos EUA)

var eligibilityForDrivingLicense = ageIsMoreThanEighteen && isUSCitizen; // eligible for a driving license (elegível para uma carteira de motorista)
console.log("This customer is eligible for a driving license: " + eligibilityForDrivingLicense);