
for(let i=0; i<5; i++){
console.log("Hello");
}

console.log("------------------------------------------");

for(let i = 1; i<=10; i++){
    console.log(i);
    if(i==5){
        break; //terminates the loop
    }
}


console.log("------------------------------------------");

for(let i = 1; i<=10; i++){
    if(i==3 || i ==7){
        continue;
    }
    console.log(i);
    

}

console.log("------------------------------------------");

// create a for loop with 5 iterations and print the iteration number, use `` when printing
for(let i = 1; i < 5; i++){
    console.log(`Iteration: ${i}`);
}

console.log("------------------------------------------");

let contriesDropdown = ["USA", "Canada", "UK", "Australia", "Germany"];

for(let eachCountry of contriesDropdown){
    console.log(eachCountry);
}

console.log("------------------------------------------");