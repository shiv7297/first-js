const user = {
    username: "Shiv",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} welcome to website`);
        console.log(this);
        
        // this keyword is used when we're reffering to current context.
    }
}
//what is the currect context here???

// user.welcomeMessage()


// user.username = "Nidhi"
// user.welcomeMessage()


function one(){
    let username = "Shiv"
    console.log(this.username);   // undefined ,because this works only in objects
}

const two = function(){
    let username = "Shiv"
    console.log(this.username);   // undefined ,because this works only in objects
}

// one()
// two()


//*************** Arrow Function 

const arrowFunc = () => {
    let username = "Shiv"
    console.log(this.username);   // undefined ,because this works only in objects
    // but 
    console.log(this); // this will give empty object here unlike in function  
}

// arrowFunc()

const addTwo = (num1,num2) => {
    return num1 + num2
}

// console.log(addTwo(3,4));

// it can also be written as this
// this is called implicit return    no return keyword

const addTwoimpl = (num1,num2 ,num3) => num1 + num2 + num3

// both are same,but it is good practice to bind in parantheses

// const addTwoimpl = (num1,num2 ,num3) => (num1 + num2 + num3)

console.log(addTwoimpl(3,4,5));

const example = (num1,num2 ) => {username: "Shiv"}     //this is the correct way for oblect 
                                                        // but arrow fucntion doesn't return withour parantheses
console.log(example(3,4))  // undefined
const example1 = (num1,num2 ) => ({username: "Shiv"})

console.log(example1(3,4))
