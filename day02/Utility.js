function square(x) {
    return x * x;
}

function cube(y) {
    return y * y * y;
}

function calculate(num1, num2, operation) {
    if (operation === "-") {
        return num1 - num2;
    } else if (operation === "+") {
        return num1 + num2;
    } else if (operation === "*") {
        return num1 * num2;
    } else if (operation === "/") {
        return num1 / num2;
    }else {
        console.log("Invalid operation. Please use '+', '-', '*', or '/'.");
        return 0;
    }
}

module.exports = {square, cube, calculate};