const student = {
    name : "John",
    age : 23,
    isActive : true,
}

//convert this object into a string to be stored in local storage
const studentObjToString = JSON.stringify(student);
//console.log(studentObjToString); uper ni line ma whole object aavse uper no student walo
console.log(typeof studentObjToString);// typeof lakhisu to string aavi jase
//localStorage.setItem("student", studentObjToString);

const toJSONStudent = JSON.parse(studentObjToString);
console.log(typeof toJSONStudent);
//niche no code e variable through object ni value get kari sakiye
//variable.object(whatever you want)
console.log(toJSONStudent.name);


