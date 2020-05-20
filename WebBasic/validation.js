//alert("hello");

function myValidation() {
    //ahiya querySelector use kari sakay but ahiya getElementById use karishu
    let myValue = document.getElementById("myform").value;
    //isNaN means (not a number)
    if(isNaN(myValue) || myValue < 1 || myValue > 20) {
        console.log("Not a Valid no:");
    } else {
        console.log("this input is valid");
        
    }
}
// document.querySelector(".myform").addEventListener("submit", (event) => {
//     //event.preventDefault(); aa etla mate lakhyu bcoz URL ma batave nahi data so
//     event.preventDefault();
//     console.log(event.target.username.value);
//     console.log(event.target.realname.value);
//     event.target.username.value = "";
//     event.target.realname.value = "";

    
// })

//Assignment Completed
document.querySelector(".myform").addEventListener("submit", (event) => {
    event.preventDefault();
    if(event.target.email.value == "@" && event.target.password.value == event.target.repeatpassword.value) {
        console.log("Click on submit button");
    } else {
        const tempVar = document.createElement("p");
        tempVar.textContent = "It was wrong password pls write correct password";
        document.querySelector("body").appendChild(tempVar);
    }
    event.target.username.value = "";
    event.target.email.value = "";
    event.target.password.value = "";
    event.target.repeatpassword.value = "";
});