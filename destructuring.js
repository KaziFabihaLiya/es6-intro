const { price, quantity, tax=7 } = {
    name: "Laptop",
    price: 1200,
    quantity: 5}
console.log(price, quantity, tax );
//const price = product.price;
// const discount = product.price*20/100;
// const yourPay = product.price - discount;
// const vatAmount = yourPay*7/100;
// const totalAmount = yourPay + vatAmount;
const discount = price*20/100;
const yourPay = price - discount;
const vatAmount = price*7/100;
const totalAmount = yourPay + vatAmount;

const device = {name: 'phone', price: 500, brand: 'samsung', color: 'black', storage: '128GB'};
const {brand} = device;

const arr = [10, 20, 30];
const [f, second] = arr;
console.log(f, second);

const [math, physics] = [95, 80, 75, 88, 66];
console.log(math, physics);