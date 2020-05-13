//const days = ["Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];

/*console.log(days[0]);



days.forEach(function(day, index) {
    console.log(`starts with ${index + 1} -- ${day}`);
});
*/
/*
const months = ["jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

console.log(months);

months.forEach(function(months, index) {
    console.log(`starts with ${index + 1} -- ${months}`);
});
*/

/*Ascending Order
for (let index = 0; index < days.length; index++) {
    console.log(days[index]);
}*/

/*Descending Order
for (let index = days.length -1; index >= 0; index--) {
    console.log(days[index]);
}
*/

// const myTodos = [];

// myTodos.push("Buy Bread");
// myTodos.push("Record videos for youtube");
// myTodos.push("Go to Gym");

// myTodos.forEach(function(todo, index) {
//     console.log(`Your task no. ${index + 1} is: ${todo}`);
// });

//Assignment Completed As Below Using For Loop
const myTodos = [];

myTodos.unshift("Buy Bread");
myTodos.unshift("Record videos for youtube");
myTodos.unshift("Go to Gym");

for (let index = 0; index < myTodos.length; index++) {
    console.log(`Your task no. ${index + 1} is: ${myTodos[index]}`);
}
