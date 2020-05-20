//key and value pair ma j store thase localstorage ma means aapde submit button par click karie etle all clear thai jay che so aapde localstorage ma lakhiye to delete na thay jya sudhi aapde clear storage na kari e tya sudhi
localStorage.setItem("Hero", "Thor");
localStorage.setItem("Marvel", "Superman");

//niche no code etla mate lakhyo che bcoz key ni value joi ti hoy to getItem method(property) use karvi pade
//niche na code ma getItem() lakhi ye to ema only key j lakhvi
var myHero = localStorage.getItem("Hero");
console.log(myHero);

localStorage.setItem("Todo", "Record youtube Videos");
console.log(localStorage.getItem("Todo"));

//niche no code e Hero nam ni key ma value je hase e delete karse

//niche ni be line hu ahiya lakhu to console ma output aavse
//myHero = localStorage.getItem("Hero");
//localStorage.removeItem("Hero");
//niche no code e pela removeItem() thase localStorage mathi e delete thase but niche log karvayu che ema pachi console ma print thase
//localStorage.clear();// aa code ahiya lakhish to all localstorage clear thai jase so niche ni be line je active che ema null value aavse
//niche ni be line ahiya lakhu to console ma null value aavse bcoz pela localstorage mathi remove thai gayu che so
myHero = localStorage.getItem("Hero");
console.log(myHero);

localStorage.clear();//aa line ahoya lakhu to pela localstorage mathi value getItem("Hero") thase and pachi clear thase so value console ma print thase getItem("Hero") ni 

