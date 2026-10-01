const greet = (name, faculty) => `สวัสดี ${name} จากคณะ ${faculty}!`;
console.log(greet("ฟ้า", "CITU"));
const student = { name: "ฟ้า", faculty: "CITU", year: 2 };
const { name, faculty } = student;
console.log(name);
console.log(faculty);
const updated = { ...student, year: 3 };
console.log(student);
console.log(updated);