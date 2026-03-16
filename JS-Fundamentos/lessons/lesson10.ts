
var customerFirstName: string = 'Jorge';
var customerLastName: string = 'Ferraz';
var customerAge: number = 41;


type Customer = {
    firstName: string;
    lastName: string;
    age: number;
    active: boolean;
}   

var firstCustomer: Customer = { 
    firstName: 'Jorge',
    lastName: 'Ferraz',
    age: 41,
    active: true
}