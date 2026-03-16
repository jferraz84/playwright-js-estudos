export function printAge(age) {
    console.log(age);
}


class CustomerDetails {
    /**
     * This method prints the first name of the customer (este método imprime o primeiro nome do cliente)
     * @param {string} firstName 
     */
    printFirstName(firstName) {
        console.log(firstName);
    }

    /**
     * this method prints the last name of the customer (este método imprime o sobrenome do cliente)
     * @param {string} lastName 
     */
    printLastName(lastName) {
        console.log(lastName);
    }
}

export const customerDetails = new CustomerDetails();