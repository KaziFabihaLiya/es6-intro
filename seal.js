const employee = {
    name: "Suzie",
    age: 25,
    designation: "Developer",
    salary: 45000
}
Object.seal(employee); // object ke freeze kore dibe mane change kora jabe na
employee.salary += 5000;
delete employee.age; // age property delete kore dibe
employee.location = "Uttara"; // new property add kore dibe
console.log(employee);



