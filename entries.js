const employee = {
    name: "Suzie",
    age: 25,
    designation: "Developer",
    salary: 45000
}

const keys = Object.keys(employee);
const values = Object.values(employee);
console.log(keys);
console.log(values);

const entry = Object.entries(employee);
console.log(entry); //2D array
