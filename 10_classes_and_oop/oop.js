const users = {
    username: "shiv",
    logIncount: 9,
    signedIn:  true,

    getUserDetails: function(){
        console.log("got use details from database");
        console.log(`Username: ${this.username}`);
        console.log(this);
        
    }
}

//user.getUserDetails()

//console.log(user.getUserDetails())

//console.log(this);  --> gives empty object 
// but on browser it gives Window Object



//********************Constructor Funtion*************


// const date  = new Date()   ,ye new nya context bnane me kam aata hai

function user(username,logIncount,isLoggedIn) {
    this.username =  username
    this.logIncount = logIncount
    this.isLoggedIn = isLoggedIn

    this.greeting = function () {
        console.log(`Welecome ${this.username}`);
    }

    return this   // agar ye na likho to bhi implicitly defined hota hai
}

const userOne = user("Shiv",9,true)
const userTwo = user("Harshit",2,false)

// agar bina new ke nya isntance bnaenge to ye overwrite kar dega
// userOne overwrite ho gya hai user two ki details se
// isliye use new(constructor)

// console.log(userOne);
// console.log(userTwo);

const userThree = new user("Yuvraj",2,false)
const userFour  = new user("Amit",9,true)

console.log(userThree.greeting);
console.log(userFour);




