const students = [
    { id: 1, name: 'kabul', marks: 98},
    { id: 2, name: 'abul', marks: 46},
    { id: 3, name: 'makbul', marks: 36},
    { id: 4, name: 'tabul', marks: 81}
]


const goodStud = students.filter(students => students.marks>60)
const names = students.map(students => students.name)
const brilliantStud = students.find(students => students.marks>85);

console.log(`Student names: ${names}`)

console.log(goodStud)

console.log(`First brilliant Student: ${brilliantStud}`)