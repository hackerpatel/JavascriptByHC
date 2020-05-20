class User { 
    constructor(firstname,middlename, lastname, credit) {
        this.firstname = firstname;
        this.middlename = middlename;
        this.lastname = lastname;
        this.credit = credit;
    }
    getFullName() {
        let fullname = `${this.firstname} ${this.middlename} ${this.lastname} is my full name`;
        return fullname;
        //do this in just 1 line
    }
    editName(newname) {
        const myname = newname.split(" ");
        this.firstname = myname[0];
        this.middlename = myname[1];
        this.lastname = myname[2];
    }
}
class Teacher extends User { 
    constructor(firstname, middlename, lastname, credit, subject) {
        super(firstname, middlename, lastname,credit);
        this.subject = subject;
    }
    getFullName() {
        let fullname = `${this.firstname} ${this.middlename} ${this.lastname} ${this.credit} is my full name`;
        return fullname;
        //do this in just 1 line
    }
    favDrink(name) {
        console.log(`My fav. drink is ${name}`);
    }
}

const john = new Teacher("john", "Doe", "Anderson", 34, "Javascript");
console.log(john);
console.log(john.getFullName());
john.editName("Johnny Anonymous Anderson");
//ahiya niche john j lakhvanu johnny nahi lakhvanu 
console.log(john.getFullName());
john.favDrink("Dabeli");



//niche no code ma output undefined aavse bcoz value object ma parameter ma pass nathi kari
// const sammy = new User();
// console.log(sammy);

