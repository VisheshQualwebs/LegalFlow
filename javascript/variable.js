// let = it can be changed later and it is a blocked scope we can again define in Excecution controller
// but not in global execution controller 

// const = it can not be changed later and it is also a blocked scope. if the value is assign once
// it can not be changed, it exist only in scope where it defined ({}).

// var = it still works but modern js prefers let and const.

const name = "Vishesh";
let age = 20;

console.log(name);
console.log(age);

// Data types in javascript.

// const name = 'Vishesh'; // String
let isStudent = true; // Boolean
const pi = 3.14; // Number
let x; // Undefined
let data = null; //  Null
const n = 3145467225528916546n; // Big Int