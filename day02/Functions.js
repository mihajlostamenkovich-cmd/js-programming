function greetings() {
  console.log("Hello Programmers");
  console.log("Welcome to the JavaScript Programming");
}

greetings();

console.log("------------------------------------");

function displayName(name = "Adam") {
    console.log(`The name of the person is: ${name}`);
}

displayName("Muhtar");

console.log("------------------------------------");

/**
 * Adds two or three numbers together. 
 * @param {number} num1 - The first number to add.
 * @param {number} num2 - The second number to add.
 * @param {number} num3 - The third number to add (optional, defaults to 0).
 * @returns {number} The sum of the numbers.
 */
function addNumbers(num1, num2, num3 = 0) {
   return num1 + num2 + num3;
}

let result = addNumbers(5, 10);
console.log(result);

result = addNumbers(5, 10, 15);
console.log(result);


console.log("------------------------------------");

/* create a function that can identify if a number is prime number */
function isPrime(num) {
    if (num <= 1) 
    return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

console.log(isPrime(2));  // true
console.log(isPrime(4));  // false
console.log(isPrime(17)); // true
console.log(isPrime(18)); // false