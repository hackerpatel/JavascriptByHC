const cameras = {
    price : 600,
    weight : 2000,
    myDes : () => {
        return `This canon camera is of ${this.price}$`;
    }
}
//ahiya this.price nahi lakhiye to error aavse ke price is not defined
//an this.price lakhishu to output aavi jase but using function word 
//now if i am remove the function word and apply arrow function then error show 
//arrow function use kari ne this.price lakhisu to output ma undefined aave che
//Solution of this keyword whenever i am using arrow function, its explicitly bind the function (For REACT)
console.log(cameras.myDes());

//Only for REDUX People
//For Returning Value
//Notes - round brackets karva pade key and value na before and after
const func = () => ({key : "value"});

