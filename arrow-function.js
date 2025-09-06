add(10, 20)

// function declaration
function add(num1, num2) {
    console.log(num1, num2);
    return num1 + num2;
}

//function expression
const addition = function add2(num1, num2) {
    return num1 + num2;
}

// arrow function
const add3 = (num1, num2) => num1 + num2;
const multiply = (x, y) => x * y;

const result = multiply(30, 20);
console.log(result);

const total = add3(50, 20);
console.log(total);

// multi line arrow function

const doMath = (a, b) => {
    const makeDouble = a * 2;
    const againDouble = b * 2;
    const total = makeDouble + againDouble;
    return total;
}

const output = doMath(10, 20);
console.log(output);