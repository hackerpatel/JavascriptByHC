// const sayHello = function(name) {
//     return "hey there, " + name + " !";
// }

// console.log(sayHello("Anonymous"));

//Now Using Arrow Function
//Notes 1 - removing function word
//Notes 2 - right side of parenthesis the arroe shuold be put
//Notes 3 - curly braces as your wish you can put or otherwise remove it no matter  
//Notes 4 - if i am removing curly braces and return word then arrow ni baju ma je code hoy te lavi devo
const sayHello = (name) => `hey there ${name} !`;

console.log(sayHello("Anonymous"));

const todos = [{
    title : "Buy Bread",
    isDone : true,
}, {
    title : "Go To Gym",
    isDone : false,
}, {
    title : "Recor Youtube videos",
    isDone : true,
}, {
    title : "Learning Online",
    isDone : false,
}, {
    title : "Mid-Sem Exam",
    isDone : true,
}, {
    title : "Degree Engineering",
    isDone : false,
}]

//const thingsDone = todos.filter( (todo) => todo.isDone === false)

//console.log(thingsDone);

//Assignment Completed
//exercise evi hati ke jo suppose true lakhiye to true wala jetla pan title hoy e display thava joie and false lahiye to false wala jetla pan title hoy te display thava joie 
const thingsDone = todos.filter( (todo) => {
    if(todo.isDone === true) {
        console.log(todo.title);
    }
})

