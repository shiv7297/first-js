class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)    // this does the call part automatically
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const shiv = new Teacher("shiv", "shiv@teacher.com", "123")

shiv.logMe()
const nidhi = new User("nidhi")

nidhi.logMe()

console.log(shiv instanceof Teacher);
console.log(shiv instanceof User);