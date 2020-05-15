let myTodos = {
    day : "Monday",
    meetings : 0,
    meetDone : 0,
}

let addMeeting = function(todo, meet = 0) {
    todo.meetings = todo.meetings + meet;
}

let meetDone = function(todo, meet = 0) {
    todo.meetDone = todo.meetDone - meet;
} 

let resetDay = function(todo) { 
    todo.meetings = 0;
    todo.meetDone = 0;
}

let getSummaryOfDay = function(todo) { 
    let meetLeft = todo.meetings + todo.meetDone;
    //ahiya pela - hatu but getSummaryOfDay ma addition thatu hatu so meetDone ma positive kari devu or getSummaryOfDay ma positive kari devu to answer aavi jase
    return `you have ${meetLeft} meetings today!`;
}

addMeeting(myTodos, 4);

addMeeting(myTodos, 2);

meetDone(myTodos, 5);

console.log(myTodos);

console.log(getSummaryOfDay(myTodos));