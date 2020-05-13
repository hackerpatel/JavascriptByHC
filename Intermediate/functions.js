let sayHello = function(name) {
    console.log(`Greeting message for ${name}`);
    console.log(`Hey ${name}`);
}

//sayHello("John");

let fullNameMaker = function(firstname, lastname) { 
    console.log("Welcome to LCO");
    console.log(`Happy to have you, ${firstname} ${lastname}`);
}

//fullNameMaker("John", "Doe");

let myAdder = function(num1, num2) {
    let added = num1 + num2;
    return added;
}

//1)
//myAdder(3, 5);
//console.log(myAdder(3, 5));

//2)
//or
/*let result = myAdder(3, 5);

console.log(result);
*/

let myMultiplier = function(num1, num2) {
    return num1 * num2;
    //upper na code karta reduce kari line retun ma direct
}

//console.log(myMultiplier(2, 3));

let guestUser = function(name = "Anonymous", courseCount = 0) {
    return "Hello " + name + " and your course count is: " + courseCount;
}
/*function ni andar name and courseCount lakhi dai e to Default parameters kehvay
and suppose default parameter aapya hoy and niche console log ma value pas na kari hoy to default walu j print thay and default ma value aapi hoy and console ma pan value pass kari hoy to console wali value print thase*/
console.log(guestUser("John", 1));
