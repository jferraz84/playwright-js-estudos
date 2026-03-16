//objects

var cliente = {
    firstName: "Jorge",
    lastName: "Ferraz",
    age: 42,
    email: "jorge@example.com",
    cars: ["Toyota", "Honda", "Ford", "Chevrolet"]
};
console.log(cliente);
console.log("O cliente se chama " + cliente.firstName + " " + cliente.lastName + ", tem " + cliente.age + " anos e seu email é " + cliente.email + ".");
console.log("Os carros do cliente são: " + cliente.cars.join(", ") + ".");
console.log("------------------------------");

cliente.firstName = "Carlos";
cliente.age = 35;
cliente.email = "carlos@exemplo.com";
console.log(cliente);
console.log("O novo cliente se chama " + cliente.firstName + " " + cliente.lastName + ", tem " + cliente.age + " anos e seu email é " + cliente.email + ".");
console.log("------------------------------");

cliente.firstName = "Ana";
cliente.lastName = "Silva";
cliente.age = 28;
cliente.email = "ana@exemplo.com";
console.log(cliente);
console.log(`O 3° cliente se chama ${cliente.firstName} ${cliente.lastName}, tem ${cliente.age} anos e seu email é ${cliente.email}.`);
console.log("------------------------------");

//arrays
var cars = ["Toyota", "Honda", "Ford", "Chevrolet"];
console.log(cars);
console.log("O primeiro carro é " + cars[0] + "."); 
cars[1] = "Nissan";
console.log("O segundo carro agora é " + cars[1] + ".");
console.log("------------------------------");

for (var i = 0; i < cars.length; i++) {
    console.log("Carro " + (i + 1) + ": " + cars[i]);
}