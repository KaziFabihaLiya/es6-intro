// const is fixed 
// let can be updated/modified/not fixed
let a = 10;
a = 20;
console.log(a);
const money = 150;
// money = money + 150;
// console.log(money); error dekhabe 

const person = { name: "John", age: 25 };
person.age = 26; // object er property change kora jabe
console.log(person);

// non primitive hole change kora jabe but primitive hole change kora jabe na
const numbers = [10, 20, 30];
numbers.push(40);
console.log(numbers);

// diff between var, let, const