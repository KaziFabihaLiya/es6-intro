function sum(num1, num2=0){ // parameters : num1, num2
    const total = num1 + num2;
    console.log(num1,num2, total);
}

sum(10, 20); 
//  ^    ^
//  arguments

function multiply(a, b=1){
    const result =  a * b;
    console.log(a, b, result);
}

multiply(5); // 5 1 5

function fullName(first, last=1){
    const name = first + " " + last;
    console.log(name);
}
fullName("Alice"); // Alice 0 Alice 0
// Some Thumb rules of default parameter
// add, substract --> 0
// multiply, divide --> 1
// string --> " "
// array --> []
