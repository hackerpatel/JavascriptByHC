let userEmail = "aBCdnadbau123";
let Password = "4567123@!";

console.log(Password.length);
console.log(userEmail.toLowerCase());
console.log(userEmail.toUpperCase());

//For UserEmail
let userChecker = function(myString) {
    if((myString.includes(123)) && (myString.length > 6)) {
        return true;
    } else {
        return false;
    }
}
//and suppose mare else na lakhvu hoy and only return false j lakhvu hoy if na pachi to chale lakhi sakay
//For Password
let passChecker = function(pass) {
    if((pass.includes("@!") || pass.includes(123)) && (pass.length >= 6)) {
        return true;
    } else {
        return false;
    }
}
console.log(userChecker(userEmail));
console.log(passChecker(Password));

