console.log("Test Started")

try{
console.log(result);
}catch(error){
    console.log(`Error: ${error}`);
}

console.log("Test Ended")

console.log("-----------------------------------")

throw new Error("This is a custom error message");