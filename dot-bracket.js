const student = { 
    name: "John", 
    '1': 25,
    'home-address': 'Uttara-1230' ,
    marks: 90 
};

const studentName = student.name; // dot notation
// console.log(student.1);

const studentOne = student['1'];    // bracket notation
// const studentAdd = student['home-address']; 

// bracket notation
console.log(studentOne);
// console.log(studentAdd);
// console.log(student.home-address); // kaaz hobe nah
console.log(student['home-address']);

for (const key in student){
    const value = student[key];
    console.log(key, value)
}

