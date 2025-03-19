// # Primitive   --> call by value

// 7 types : String,Number,Boolean,null,undefined,Symbol,BigInt

const score = 100   //dynamically typed language

const isloggedIn = false
const outsideTemp = null
let userEmail


const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id == anotherId);
// console.log(id);
// console.log(anotherId);

const bigNumber = 3632321787815468455132468n   // this 'n' represents it is bigInt data type




// #Reference(Non Primitive)

//Array,Objects,Functions

const heros = ["IronMan","Thor","Hulk"]

let myObj = {
    name : "Shiv",
    age : 19
}

const myFunction = function(){
    console.log("Hello");   
}


// console.log(typeof score);
// console.log(typeof bigNumer);
// console.log(typeof isloggedIn);
// console.log(typeof outsideTemp);
// console.log(typeof userEmail);
// console.log(typeof id);
// console.log(typeof heros);
// console.log(typeof myFunction);   // object function


// **************************************************


// Stack(Primitive) , Heap(Non-Primitive)

let myEmail = "shiv@google.com"

let anotherMail = myEmail

// console.log(myEmail);
// console.log(anotherMail);

anotherMail = "abc@google.com"
// console.log(myEmail);
// console.log(anotherMail);

myEmail = "xyz@google.com"
// console.log(myEmail);
// console.log(anotherMail);

let userOne = {
    email: "shiv@google.com",
    upi: "shiv@ybl"
}

let userTwo = userOne

console.log(userOne);
console.log(userTwo);

userTwo.email = "abc@google.com"

console.log(userOne.email);
console.log(userTwo.email);

userOne.email = "xyz@google.com"

console.log(userOne.email);
console.log(userTwo.email);

