// Primitive data types in JavaScript

// 7 types of primitive data types: String, Number, BigInt, Boolean, Undefined, Null, Symbol

const score = 100; 
const scoreValue = 100.5;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symobol('123'); 
const anotherId = Symbol('123'); 

console.log(id === anotherId); // false, because Symbols are unique

const bigNumber = 1234567890123456789012345678901234567890n; // BigInt
// Reference (Non-primitive) data types
// Objects, Arrays, Functions, etc.

let heros = ['Thor', 'Ironman', 'Hulk'];
let myObj = {
    name: 'Thor',
    age: 1000,
}
const myFunction = function() {
    console.log('Hello World');
}


// ************ Typeof Operator ************ //

console.log(typeof heros); // object
console.log(typeof myObj); // object
console.log(typeof myFunction); // function
console.log(typeof score); // number
console.log(typeof scoreValue); // number
console.log(typeof isLoggedIn); // boolean
console.log(typeof outsideTemp); // object (null is considered an object in JS)
console.log(typeof userEmail); // undefined
console.log(typeof id); // symbol
console.log(typeof bigNumber); // bigint