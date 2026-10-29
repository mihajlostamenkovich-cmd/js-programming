// const utility = require('./Utility.js');

// let result = utility.square(5);
// console.log(result); // 25

// result = utility.cube(3);
// console.log(result); // 27


const {calculate, square} = require('./Utility.js');

let result = calculate(10, 5, "*"); // 50
console.log(result);

result = square(4); // 16
console.log(result);