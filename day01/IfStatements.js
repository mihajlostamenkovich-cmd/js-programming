let score = 50;

if (score >= 60) {
  console.log("You passed the exam");
} else {
  console.log("You failed the exam");
}

console.log("---------------------------------------------");

let number = 1000;

if (number > 0) {
  console.log("Positive Number");
} else if (number < 0) {
  console.log("Negative number");
} else {
  console.log("Zero");
}

console.log("---------------------------------------------");

score = 80;
if (score >= 0 && score <= 100) {
  if (score >= 60) {
    console.log("You passed the exam");
  } else {
    console.log("You failed the exam");
  }
}else{
    console.log("Invalid score");
}
 
console.log("---------------------------------------------");

let env = "development"; // Possible values: "development", "production", "test"

if (env === "development") {
  console.log("Running in development mode");
} else if (env === "production") {
  console.log("Running in production mode");
} else if (env === "test") {
  console.log("Running in test mode");
} else {
  console.log("Unknown environment");
}

switch (env) {
  case "development":
    console.log("Running in development mode");
    break;
  case "production":
    console.log("Running in production mode");
    break;
  case "test":
    console.log("Running in test mode");
    break;
  default:
    console.log("Unknown environment");
}
