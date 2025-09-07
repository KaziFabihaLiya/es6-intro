const numbers = [1, 15, 6, 10, 2, 7]

const greaterThan10 = numbers.filter(x => x<10)
const evenNumbers = numbers.filter(num => num % 2 ===0)

console.log(evenNumbers)
console.log(greaterThan10)