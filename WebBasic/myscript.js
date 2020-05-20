//alert("hey there Anonymous");
//console.log(document);
//console.log(document.title);
//console.log(document.head);
//console.log(document.body);

//document.URL means kai link thi aapde work kari rahya che e
//console.log(document.URL);

//console.log(document.title);

//document.title = "I got changed";
//or 
//console.log(document.title = "I got changed");

//console.log(document.getElementById("idone"));
//aa title na jem print nahi thay means value change na thay
//document.getElementById("idone") = "Something Different";


// //means aa querySelector e kadhi aapse je aapde string lakhiye e 
// const myElement = document.querySelector("#idone");

// console.log(myElement);

//querySelectorAll means jetla pan #idone thi hase e all display karse means print karse
// const myElement = document.querySelectorAll("#idone");

// console.log(myElement);


//const myElement = document.querySelectorAll("p");

//ahiya myElement[0] etla mate lakhyu bcoz all p tag mathi only first j aape output
//console.log(myElement[0]);

//const myPElements = document.querySelector("p");

//console.log(myPElements);
//myPElements.textContent = "I am being changed using js";

const myPElements = document.querySelectorAll("p");
// myPElements.forEach(function(p) {
//    p.textContent = "I am changed using loop in js";
//     //p.remove(); to remove all p tag
    
// });

//Assignment completed
myPElements.forEach( (p) => { p.textContent = "I am changed using arrow function and loop in js"; }
     //p.remove(); to remove all p tag
);
 
const myNewPara = document.createElement("p");

myNewPara.textContent = "I was added via js";

document.querySelector("body").appendChild(myNewPara);
//appendChild means body ma last ma add thase

/*suppose hu uper code p.textContent che e ahiya niche lakhu to all are changed arrow function walu thai jase 
and uper j rava dau to pehla e execute thase pachi niche walo code execute thase*/ 

document.querySelector("button").addEventListener("click", (event) => {
    //console.log("Button Was Clicked");
    event.target.textContent = "Hey, I am Hacker";
    //console.log(event.target.textContent = "Hey I am Hacker");
});

//Track input form
//ahiya input na badle change lakhi sakay e text ma lakhya pachi kya pan click kariye to console ma print thase
document.querySelector("#myform").addEventListener("input", (event) => {
    console.log(event.target.value);
    
})





