const student = { 
    name: "John", 
    1: 25, 
    marks: 90,
    family: {
        title: "Bhuiyaan",
        mother: {
            name: "Shajeda",
            age: 50,
            profession: "Housewife"
        },
        father: {
            name: "Kazi Golam Mowla",
            age: 55,
            profession: "Businessman"
        }
    }
};

console.log(student.family.mother.name);
console.log(student.family.mother?.name);
