//*****************Array Specific Loops***********

// for of

const arr = [1,2,3,4,5]

for (const num of arr) {   // here element means iterator and object is container
    // console.log(num);   
}

const greetings = "Hello World!"
for (const greet of greetings) {   // here element means iterator and object is container
    // console.log(greet);   
}


//Maps

const map = new Map()
map.set('IN',"India")
map.set('US',"United States Of America")
map.set('FR',"France")
map.set('NZ',"NewZealand")

// console.log(map);


for (const [key,value] of map) {
    //console.log(key, ':-', value);
        
        }

//objects are not iterable by for of loop
const myObj = {
    game1: "Pokemon",
    game2: "Spiderman"
}

// for (const element of myObj) {
//     console.log(key, ':-',value);
// }


//**********************FOR IN LOOP*************
const myObject = {
    js: "Javascript",
    cpp: "C++",
    rb: "Ruby",
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`); 
}

const programming = ["js","c","c++","java"]

for (const key in programming) {
   //console.log(programming[key]);
   
}

//for in loop me keys aati hai and for of loop me vlaues
//map is not iteratable so for in loop can't run on map



