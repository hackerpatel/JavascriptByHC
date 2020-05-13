/*if(false) {
    console.log("I am inside if BLOCK");
    console.log("I am still inside if BLOCK");
}else if(false) {
    console.log("I am still inside If BLOCK");
} else {
    console.log("NOTICE THIS PART");
}*/

//LCO

/*var whoIsHere = "user";

if(whoIsHere === "user") { 
    console.log("Greeting message for USER");
    console.log("Allow access to view all courses");
} else if(whoIsHere === "teacher") {
    console.log("Greeting message for TEACHER");
    console.log("Allow access to his courses");
} else {
    console.log("MESSAGE: please verify your email");
    console.log("Send user an email for verification");
}*/

//Grade Problem

/*students marks:
10 - Amazing
5 - Good
3 - Poor
0 - Fail
*/
var markOfStudents = 4;

if(markOfStudents >= 10) { 
    console.log("The Student should be go into next Std");
} else if(markOfStudents < 10 && markOfStudents > 5) {
    console.log("The Student should be improvement");
} else if (markOfStudents < 5 && markOfStudents > 3) {
    console.log("This Student is Poor so Work Harder");
} else{
    console.log("This Student is Fail");
}