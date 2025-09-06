//var

const tax = 5000;
let eta = 5;
 eta = 10;


 const student = { name: "John", age: 25, marks: 90 };
 const friends =  [ "Tom", "Piter", "Harry" ];
  //default parameter
 function add(num1, num2=0){

 }

 // template string
 const dynamicString = `I am a string, My Tax is ${tax * eta} and I have ${friends.length} friend. ${friends[1]} is friend of ${friends[2]}`;
 console.log(dynamicString);

 // arrow function
    const multiply = (x, y) => x * y;
    const result = multiply(30, 20);
    console.log(result);
    
    const add2 = (num1, num2) => num1 + num2;
    const total = add2(50, 20);
    console.log(total);

    const tenTimes = x => x * 10;
    console.log(tenTimes(5));

    // spread operator
    const numbers = [ 85, 7, 6 , 42]
    console.log(84, ...numbers, 2); // spread operator

    //destructuring
    const { marks: totalMarks, age=0 } = student
    console.log(totalMarks, age);
    const [ first, second, ...rest ] = friends;
    console.log(first, second, rest);



