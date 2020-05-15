// const myTodos = ["Buy Bread", "Go To Gym", "Record Youtube Videos"];

// console.log(myTodos[myTodos.indexOf("Go To Gym")]);

const newTodos = [{
    title : "Buy Bread",
    isDone : false,
},
{
    title : "Go To Gym",
    isDone : false,
},
{
    title : "Record Youtube videos",
    isDone : true,
}]

// const index = newTodos.findIndex(function(todo, index) {
//     //console.log(todo);
//     //etla mate log karvyu uper bcoz e loop farse jya ans mali jase tya stop thai jase etla mate
//     return todo.title === "Go To Gym";
// })
// console.log(index);


///////Method 1


// const findTodo = function(myTodos, title) {
//     const index = myTodos.findIndex(function(todo, index) { 
//         return todo.title.toLowerCase() === title.toLowerCase();
//     })
//     //return myTodos;
//     //aa lakhishu to all Object show karse output ma
//     return myTodos[index];
//     //aa etla mate lakhyu bcoz je Object ma title match thay e index show karse
// }

// let printMe = findTodo(newTodos, "Go To gym");

// console.log(printMe);


////////Method 2


const findTodo = function(myTodos, title) {
    //niche return titleReturned na lakhvu hoy to const na badle return titleReturned = lakhi sakay
    const titleReturned = myTodos.find(function(todo, index) {
        return todo.title.toLowerCase() === title.toLowerCase();
    }) 
    //ahiya uper wali comment line nu kehvu thay che
    return titleReturned;
}

let printMe = findTodo(newTodos, "Go To gym");

console.log(printMe);
