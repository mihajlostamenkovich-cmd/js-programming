let employeeNames = [
  "mihajlo",
  "Jordan Lee",
  "Taylor Smith",
  "Casey Brown",
  "Riley Johnson",
  "Avery Davis",
  "Quinn Wilson",
  "Jamie Garcia",
  "Morgan Clark",
  "marija",
];

console.log(employeeNames);

// set the first employee name to "Muhtar" and last employee name to "Kuzzat"
employeeNames[0] = "Muhtar";
employeeNames[employeeNames.length - 1] = "Kuzzat";
console.log(employeeNames);

console.log("------------------------------------");

// diplay all the elements of the array in reverse order
for (let i = employeeNames.length - 1; i >= 0; i--) {
  console.log(employeeNames[i]);
}

console.log("------------------------------------");

let number = [100, 200, 300, 400, 5, 4,6 ,7, 8, 9, 10];

// write a program that can display the maximum and minimum numbers from the array, do not use any build-in sort method, use for loop and if statement
let max = number[0];
let min = number[0];

for (let i = 1; i < number.length; i++) {
  if (number[i] > max) {
    max = number[i];
  }
  if (number[i] < min) {
    min = number[i];
  }
}

console.log("Maximum:", max);
console.log("Minimum:", min);

console.log("------------------------------------");

// write a program that can sort the number array in ascending order without using any built-in sort method, use for loop and if statement
for (let i = 0; i < number.length - 1; i++) {
  for (let j = 0; j < number.length - 1 - i; j++) {
    if (number[j] > number[j + 1]) {
      let temp = number[j];
      number[j] = number[j + 1];
      number[j + 1] = temp;
    }
  }
}

console.log("Sorted numbers:", number);

console.log("------------------------------------");

let numbersWithDuplicates = [4, 2, 4, 7, 2, 9, 7];
let uniqueNumbers = [];

for (let i = 0; i < numbersWithDuplicates.length; i++) {
  let isDuplicate = false;

  for (let j = 0; j < uniqueNumbers.length; j++) {
    if (numbersWithDuplicates[i] === uniqueNumbers[j]) {
      isDuplicate = true;
      break;
    }
  }

  if (!isDuplicate) {
    uniqueNumbers[uniqueNumbers.length] = numbersWithDuplicates[i];
  }
}

console.log("Array without duplicates:", uniqueNumbers); // [4, 2, 7, 9]