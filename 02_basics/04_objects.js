//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Anant"
tinderUser.isLoggedIn = false

//console.log(tinderUser);


const User = {
    email: "abc@google.com",
    fullname: {
        userfullname :{
            firstname: "Shiv",
            lastname: "Rathore"
        }
    }
}

// console.log(User.fullname.userfullname.firstname);


const obj1 = { 1: "a", 2: "b"}
const obj2 = { 3: "c", 4: "d"}

//const obj3 = {obj1,obj2}    // same array wali problem

//const obj3 = Object.assign({},obj1,obj2)   // {} is aise hi (hehehe)
// becuase assign(target,source);

const obj3 = {...obj1,...obj2}

//console.log(obj3); 


const users = [
    {
        id: 1,
        email: "a@google.com"
    },
    {
        id: 2,
        email: "b@google.com"
    },
    {
        id: 3,
        email: "c@google.com"
    },
    {
        id: 4,
        email: "d@google.com"
    },
    {
        id: 5,
        email: "e@google.com"
    }
]

// console.log(users[1].email)

// console.log(tinderUser); 

// console.log(Object.keys(tinderUser));  
// console.log(Object.values(tinderUser));  
// console.log(Object.entries(tinderUser)); 

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));  




// *************************************Destructuring***********************
const courses = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "shiv"
}

// console.log(courses.courseInstructor);

const {courseInstructor} = courses
console.log(courseInstructor);

const {courseInstructor:Instructor} = courses
console.log(Instructor);

//***************API INTRO***************


//JSON
// {
//     "name": "Shiv",
//     "coursename": "JS in Hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]