let myYoutubeVideoOne = {
    title : "Loops in Javascript",
    videoLength : 15,
    videoCreator : "Hitesh Choudhary",
    videoDescription : "This is a video description and a long one"
}

let myYoutubeVideoTwo = {
    title : "Functions in Javascript",
    videoLength : 10,
    videoCreator : "Hitesh Choudhary",
    videoDescription : "This is a video description and a long one"
}

//console.log(myYoutubeVideo);

//console.log(`Hey new video on ${myYoutubeVideo.title} by ${myYoutubeVideo.videoCreator}`);

// myYoutubeVideo.title = "ForEach loop in 35";

// console.log(`Hey new Video on ${myYoutubeVideo.title} by ${myYoutubeVideo.videoCreator}`);

// console.log(myYoutubeVideo);


// Assignment completed
// let javascriptCourse = {
//     name : "Anonymous",
//     price : 15000,
//     description : "This is a totally benefits for you and easily i explained"
// }

// console.log(`Hey there is a new course by ${javascriptCourse.name} and at price ${javascriptCourse.price} and has a description is ${javascriptCourse.description}`);

//Using Console.log
// let changeVideoLength = function(myObject) {
//     console.log(`Time of this video is : ${myObject.videoLength}`);
// }

// changeVideoLength(myYoutubeVideoTwo);

//Using Return
// let changeVideoLength = function(myObject) {
//         return `Time of this video is : ${myObject.videoLength + 1}`;
//     }
//  console.log(changeVideoLength(myYoutubeVideoTwo));

//Using inside return in Objects
let changeVideoLength = function(myObject) {
        return {
            formatOne : `Time of this video is : ${myObject.videoLength + 15}`,
            formatTwo : `Time of this video is : ${myObject.videoLength + 2}`
        }
    }
let addOne = changeVideoLength(myYoutubeVideoTwo);

console.log(addOne.formatTwo);
//ek function banayu and ema ek Object take karyo and pachi object return thase from the function and pachi aakha function ne access karva mate ek variable create karvano and pachi console.log ma e variable.return ma je Object pass karvu hoy te lakhvu  

    