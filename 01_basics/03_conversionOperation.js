let score = "33abc";

// console.log(typeof score); // string
// console.log(typeof (score)); // string
let valueInNumber = Number(score);
// console.log(typeof valueInNumber); // number
// console.log(valueInNumber);
// "33"=> 33
// "33abc"=> NaN (Not a Number)
// true => 1
// false => 0
let isLoggedIn = "Gaurav Singh";

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn); // true
// "" => false
// "Gaurav Singh" => true

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(typeof stringNumber); // string
console.log(stringNumber); // "33"