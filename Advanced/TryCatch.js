const convertToRs = (dollar) => {
    if(typeof dollar === "number") {
        return dollar * 64;
    } else {
        throw Error("Amount needs to be in number")
    }
}


// const myValue = convertToRs("5");
// console.log(myValue);

try {
    const myValue = convertToRs("five");
    //niche na console.log ma error aavse to last 20 ni line execute nahi thay
    console.log(myValue);
} catch(error) {
    console.log(error);
}
console.log("I will not run if program crashes");


// const myValue = convertToRs("five");

// console.log(myValue);
