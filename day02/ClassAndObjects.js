/*
Atrributes:
employeeName
salary

Methods:
work()
...
*/

class Employee {

    constructor(employeeName, employeeSalary) {
        this.employeeName = employeeName;
        this.salary = employeeSalary;
    }

    work() {
        console.log(`${this.employeeName} is working`);
    }
}

    let employee1 = new Employee("John Doe", 50000);
    let employee2 = new Employee("Jane Smith", 60000);
    // console.log(employee1.employeeName); // John Doe
    // console.log(employee1.salary); // 50000
    console.log(employee1); // John Doe is working
    console.log(employee2); // Jane Smith is working

    employee1.work(); // John Doe is working
    employee2.work(); // Jane Smith is working
    
    console.log("------------------------------------");
//Create a class named Item with the following requirements:- Attributes: name, price, quantity - Methods: constructor,calculatePrice() - Create an instance of the Item class and call the calculatePrice() method to display the total price of the item.

class Item { 
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    calculatePrice() {
        return this.price * this.quantity;
    }
}

let item1 = new Item("Laptop", 1000, 2);
let item2 = new Item("Mouse", 25, 5);

console.log(`Total price of ${item1.name}: $${item1.calculatePrice()}`);
console.log(`Total price of ${item2.name}: $${item2.calculatePrice()}`);