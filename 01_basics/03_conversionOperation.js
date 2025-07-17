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

// ************************ Operations ********************** //

let value = 3;
let negvalue = -value; // -3
console.log(negvalue); // -3

let str1 = "Gaurav";
let str2 = " Singh";
let str3 = str1 + str2; // "Gaurav Singh"
console.log(str3); // "Gaurav Singh"

console.log("1" + 2); // "12"
console.log(1 + "2"); // "12"
console.log(1 + 2 + "3"); // "33"
console.log("1" + 2 + 3); // "123"

console.log(+true); // 1
console.log(+""); // 0

let num1, num2, num3;

num1 = num2 = num3 = 2+2;

let gameCounter = 100;
gameCounter++;
console.log(gameCounter); // 101

