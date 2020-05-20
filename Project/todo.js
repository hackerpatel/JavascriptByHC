// //alert("hello, connected");
// var h = document.createElement("h1");
// //h1 tag ni andar Hello World print thase createTextNode thi or createElement thi pan thay
// var myValue = document.createTextNode("Hello World!");
// //etla mate niche ni line likhi bcoz <h1></h1>Hello World na aave etle h variable ni andar appenChild thi myValue ni aavi jay
// h.appendChild(myValue);
// //niche ni line etla mate lakhi che bcoz h1 tag pachi appendChild thase h var walu
// document.querySelector("h1").appendChild(h);

// var val = 5;

// while (val > 0) {
//     console.log(val);
//     val--;
//     //or 
//     //val = val - 1;
// }
var ul = document.getElementById("list");
var li;

var addButton = document.getElementById("add");

addButton.addEventListener("click", addItem);

var removeButton = document.getElementById("remove");

removeButton.addEventListener("click", removeItem);

var removeAllButton = document.getElementById("removeall");

removeAllButton.addEventListener("click", removeAllItem);






function addItem() { 
    //console.log("Add button clicked");
    var input = document.getElementById("input");
    var item = input.value;
    ul = document.getElementById("list");
    var textnode = document.createTextNode(item);

    if(item === "") {
        //return false;
        //below Assignment Completed
        //Add p tag and assign a value of "Enter your todo"
        ////Method 1
        // var p = document.createElement("p");
        // p.textContent = "Enter TODO name";
        // document.querySelector("input").after(p);

        //Method 2
        var p =document.createElement("p");
        p.textContent = "Enter TODO name";
        var input = document.getElementById("input");
        input.after(p.textContent);
    } else {
        //create li
        li = document.createElement("li");

        //create checkbox
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.setAttribute("id", "check");

        //create label
        var label = document.createElement("label");
        label.setAttribute("for", "item"); //optional


        //add these elements on web page

        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textnode);
        li.appendChild(label);
        ul.insertBefore(li, ul.childNodes[0]);
        //li.className = "visual";
        setTimeout(() => {
            li.className = "visual";
        }, 2);

        input.value = "";
    }


}

function removeItem() { 
    //console.log("Delete button clicked");

    //aa niche ni be line no code execute karishu to ema ek j array ma aavse so aapde for loop use karvu padse jenathi each section aave and easily understand thay
    // li = ul.children;
    // console.log(li);
    
    //for FOR LOOP
    li = ul.children;
    for (let index = 0; index < li.length; index++) {
    //     const element = li[index];
    //     console.log(element);
        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index]);
        }
    }
}

//Assignment Completed
//remove karva na hata removeAll Done TODO Button par click kariye tyare all list delete thai java jovie
function removeAllItem() { 
    li = ul.children;
    for (let index = 0; index < li.length; index++) {
        ul.remove(li[index]);
    }
}