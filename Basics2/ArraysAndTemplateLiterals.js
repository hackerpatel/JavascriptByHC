//datatype - Array

/*const superHeroes = ["Iron Man", "Spiderman", "Captain America", "Thor"];

console.log(superHeroes);
console.log(superHeroes[0]);
console.log(superHeroes[2]);
console.log(superHeroes[superHeroes.length-1]);

console.log(`We Have ${superHeroes[superHeroes.length-1]} Super Heroes`);
*/
//console.log ma javascript through print karavu hoy to ` ${ Here write code } ` aa use karvu
//aane Template Literals use karyu kehvay

const numbers = ["One", "Two", "Three", "Four", "Five", "Six"];

// numbers[1] = "SOMETHING";

// console.log(numbers);

//Start-----------------------------------------------------------

// console.log(numbers.shift());

// console.log(numbers);

// numbers.unshift("SOMETHING");

// console.log(numbers);

//End-------------------------------------------------------------

// console.log("The Element to be deleted is : " + numbers.pop());

// console.log(numbers);

// numbers.push("Seven");

// console.log(numbers);

//Middle----------------------------------------------------------

numbers.splice(2, 2, "SOMETHING");

console.log(numbers);
