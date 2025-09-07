const numbers = [54,7,3,45,12];
// const doubled = [];
// for (const number of numbers){
//     const result = number * 2;
//     doubled.push(result);
// }

// const doubleIt = num => num*2;
const doubled = numbers.map(num => num*2);
const fiveTimes = numbers.map(x => x*5);
const squared = numbers.map(x => x*x);
console.log(fiveTimes);
console.log(squared);

console.log(doubled);

const friends = ['Zaved', 'Liya', 'Rafayet', 'Ahad'];
const nameLengths = friends.map( name => name.length);
const firstChars = friends.map( name => name[0]);
const firstLetter = friends.map( name => name[0].toLowerCase());
const result = numbers.map((num, index) => {
    console.log(index * num);
})
console.log(nameLengths);
console.log(firstChars);
console.log(firstLetter);