let myTodos = {
    day : "Monday",
    meetings : 0,
    meetDone : 0,
    
    addMeeting : function(num) {
        //console.log("Heyyy, I am a function");
        //console.log(this);
        this.meetings = this.meetings + num;
    },
//External che assignment nu not completed
    // meetDone : function() {
    //     this.meetDone = this.meetDone;
    // },

    // resetDay : function() {
    //     this.meetings = this.meetings;
    //     this.meetDone = this.meetDone;
    // },

    summary : function(){
        return `You have ${this.meetings} meetings today`;
    },
}
// let myTodosTwo = {
//     day : "Tuesday",
//     meetings : 15,
//     meetDone : 10,

//     addMeeting : function() {
//         console.log("Heyyy, I am a function");
//     }
// }
myTodos.addMeeting(4);
myTodos.addMeeting(2);

console.log(myTodos);

//myTodosTwo.addMeeting();
console.log(myTodos.summary());
