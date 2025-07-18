const name = "Gaurav Singh";
const repoCount = 10;

// console.log(name + repoCount + " Value");

console.log(`My name is ${name} and my repo count is ${repoCount}`); // Template literals


const gameName = new String("Gaurav-gs-Coder"); // String object

// console.log(gameName[0]); // String object
// console.log(gameName.__proto__); // Prototype of the String object


// console.log(gameName.length); // Length of the string object
// console.log(gameName.toUpperCase()); // Convert to uppercase

console.log(gameName.charAt(2)); // Get character at index 0
console.log(gameName.indexOf("G")); // Find index of character 'G'


const newString = gameName.substring(0, 4);
console.log(newString); // Substring from index 0 to 4

const anotherString = gameName.slice(-8, 4);
console.log(anotherString); // Slice from index -8 to 4

const newStringOne = "   Gaurav Singh   ";
console.log(newStringOne); // Original string with spaces
console.log(newStringOne.trim()); // Trim spaces from both ends

const url = "https://www.gaurav.com/gaurav%20singh";
console.log(url.replace("%20", "-")); // Replace %20 with -

console.log(url.includes("gaurav")); // Check if 'gaurav' is present in the URL

console.log(gameName.split("-")); // Split the string by '-'