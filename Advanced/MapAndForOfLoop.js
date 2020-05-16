var john = {
    name : "I am john",
    age : 23,
    isActive : true,
}
var marry = {
    name : "I am marry",
    age : 24,
    isActive : true,
}
var sam = {
    name : "I am sam",
    age : 29,
    isActive : false,
}

let users = new Map();
//Map returns always iterable or loop through it or iterate over
//console.log(typeof users);

//string ma lakhyu che e game te lakhay
users.set("john", john);
users.set("marry", marry);
users.set("sam", sam);

//console.log(users);

//size janva mate ketla object che e
//console.log(users.size);

//Notes - get method ni andar pas thase only value
//console.log(users.get("john"));

//only keys aavse je aapde set kari hoy e
//console.log(users.keys());

//only values aavse je aapde set kari hoy e
//console.log(users.values());

// for (const key of users.keys()) {
//     console.log(key);
// }

// for (const value of users.values()) {
//     console.log(value);
// }

// for (const value of users.values()) {
//     console.log(value.isActive);
// }

// for (const [key, value] of users.entries()) {
//     console.log(key + " = " + value.isActive);
// }

//return iterable using forEach
//ahiya forEach ma (value, key) lakhvu padse compulsory nahitar undefined aavse (key, value) lakhisu to
//users.forEach((value, key) => console.log(key + " = " + value.isActive));

var arrofArr = [["one", "1"], ["Two", "2"], ["Three", "3"]];

var newMap = new Map(arrofArr);

console.log(newMap);
