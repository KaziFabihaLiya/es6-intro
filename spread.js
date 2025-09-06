const numbers = [ 85, 7, 6 , 42]
console.log(numbers);
console.log(...numbers); // spread operator

 const max = Math.max(85, 7, 6 , 42, 1154, 1690.5);
console.log(max);

const max1 = Math.max(...numbers);
const max2 = Math.max(numbers); // spread needed
console.log(max1);
console.log(max2);

const first = [1,2,3];
const second = first; // reference copy
second.push(7,8,9);
console.log(first);

const third = [584,54,87,96];
const fourth = [1,...third, 0]; // reference copy
fourth.push(7,8,9);
console.log(third);
console.log(fourth);

const ages = [45, 25, 1]
const prices = [ 78, 96, 45, 12, 45]
const all = [...ages, ...prices];
console.log(`All Array List ${all}` );

const person = {name: "Suzie", age: 25};
const employee = {...person, designation: 'Engineer', salary: 45000};
console.log(employee);

const total = (x, y, z) => x + y + z;
const result = total(45, 65, 78);
const digits = [77, 55, 68];
console.log(...digits);