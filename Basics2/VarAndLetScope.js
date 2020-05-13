let iAmGlobal = "someValue";

if(true) {
    let iAmLocal = "someMoreValue";
    iAmGlobal = "superman";
    console.log(iAmGlobal);
    console.log(iAmLocal);
}

//console.log(iAmLocal);
console.log(iAmGlobal);

//Kings territory

//let king = "John";

if(true) {
    //let king = "Sam";

    if(true) {
        let king = "Ram";
        console.log(king);
    }
}
//let king = "Ram";
//Suppose if i am declaring in here is let king = "Ram" so below code execute with output Ram
if(true) {
    console.log("I am second part : " + king);
}