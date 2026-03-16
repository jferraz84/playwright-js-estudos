//Concatination and interpolation
var price = 5000;
var itemName = "celular";
var itemName2 = "Tablet";
var messageToPrint = "O preço desse celular é 5000 reais.";
var messageToPrint2 = "O preço desse celular"+" é 5000,50 reais.";
console.log(messageToPrint);
console.log(messageToPrint2);
console.log("------------------------------");
console.log(`O preço desse ${itemName} é ${price} reais.`); //Interpolation
console.log("O valor comercial do " + itemName + " é " + price + " reais."); //Concatenation
console.log("-------------------------------");
console.log(`O preço desse ${itemName} é ${price} reais, mas o preço do ${itemName2} é ${price + 2000} reais.`);
console.log("O valor comercial do " + itemName2 + " é " + price + " reais.");