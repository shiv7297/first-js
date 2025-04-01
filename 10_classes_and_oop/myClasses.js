// class User {
//     constructor(username,email,password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPass() {
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const shiv = new User("shiv","abc@google.com","123")

// console.log(shiv);

// console.log(shiv.encryptPass());
// console.log(shiv.changeUsername());



// agar class wali fucntinality nhi hoti

function User(username,email,password){
    this.username = username
    this.email = email
    this.password = password
}
 const shiv = new User("shiv","abc@google.com","123")


console.log(shiv);

User.prototype. encryptPass = function() {
    return `${this.password}abc`
}

console.log(shiv.encryptPass());

User.prototype. changeUsername = function() {
     return `${this.username.toUpperCase()}`
}

 console.log(shiv.changeUsername());


