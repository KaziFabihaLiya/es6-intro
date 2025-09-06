const poem = `Roses are red,
Violets are blue,
Sugar is sweet,
And so are you.`;

// ` tilda symbol is used to create template strings
function sum(num1, num2){ // parameters : num1, num2
    const total = num1 + num2;
    const output = `sum of ${num1} and ${num2} is ${total}`;
    console.log(output);
}
sum(10, 20);

const price = 100;
const discountedPrice = `Price ${price}, discounted Price is after 20% discount: ${price - (price * 0.2)}`;
console.log(discountedPrice);