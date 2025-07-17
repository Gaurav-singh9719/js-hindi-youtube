const accountId = 144553
let accountEmail = "gaurav.singh.971999@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState; 
// accountId = 2 // not allowed, as accountId is a constant

/*
prefer not to use var
because of issue in block scope and function scope
*/
accountEmail = "gs@gs.com"
accountPassword = "newpassword"
accountCity = "Delhi"
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);


