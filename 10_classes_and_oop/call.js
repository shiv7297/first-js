function Setusername(username){
    this.username = username
}

function createUser(username,email,password){
    this.email = email
    this.password = password

    Setusername(username)  // ye krna chah rhe --->  this.username = username, but ye ho nhi rha
}

const shiv = new createUser("Shiv","abc@google.com","123")

console.log(shiv);  // sirf email and password hi aa rhe haian

function createdUser(username,email,password){
    this.email = email
    this.password = password

    Setusername.call(this,username)  // ye krna chah rhe --->  this.username = username, but ye ho nhi rha
}

const nidhi = new createdUser("Nidhi","xyz@google.com","247")

console.log(nidhi);

