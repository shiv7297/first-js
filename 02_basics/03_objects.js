// Signleton  --> formed by constructor
//Object.create

//object leterals

const mySym = Symbol("myKey1");   //must declare the symbol first

const  JsUser = {
    name: "Shiv",
    "full name": "Shivpratap Singh Rathore",
    age: 19,
    [mySym]: "myKey", 
    email: "abc@google.com",
    isLoggedIn: false,
    lasLoginDays: ["Monday","Saturday"]
}

console.log(JsUser.age);
console.log(JsUser["age"]);   // why this

//console.log(JsUser."full name");    //because this is not allowed
console.log(JsUser["full name"]); 

//console.log(typeof JsUser.mySym);   // type string 

console.log(JsUser[mySym]);    //this is the way to access symbol

JsUser.email = "shiv@chatgpt.com"
console.log(JsUser);
//Object.freeze(JsUser);

JsUser.email = "shiv@microsoft.com"    //not updated becuase user is freezed
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");   
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User ${this.name}`);   
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
