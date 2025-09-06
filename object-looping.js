const numbers = [54,7,3,45,12];
for (const number of numbers){
    console.log(number);
}

const employee = {
    name: "Suzie",
    age: 25,
    designation: "Developer",
    salary: 45000
}

for (const prop in employee){
    const value = employee[prop];
    console.log(prop, value)
}

const keys = Object.keys(employee);
console.log(keys);

for (const key of keys){
    const value = employee[key];
    console.log(key, value);
}