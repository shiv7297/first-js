function  sayMyName() {
    console.log("S")
    console.log("H")
    console.log("I")
    console.log("V")
}

// sayMyName   // reference
// sayMyName()   // execution

function addTwoNumbers(number1,number2){
    console.log(number1 + number2);
}

// addTwoNumbers(22,55)
// addTwoNumbers(22,null)
// addTwoNumbers(22,"a")
// addTwoNumbers(22,"4")

// const result = addTwoNumbers(2,3)   //its printing not returning

// console.log(result);


function addNumbers(number1,number2){

    const result = number1 + number2;
    // console.log("Nidhi")
    return result;

    // console.log("Shiv")
}

const result1 = addNumbers(2,4) 

// console.log("Result -",result1);

function loginMessage(username = "Nidhi"){
    if(username === undefined){
        console.log("please enter a user name");
        return
    }
    return `${username} just logged in`
}

// console.log(loginMessage("SHIV"));
// console.log(loginMessage(""));
// console.log(loginMessage());

// console.log(addNumbers());



// ...  --> spread operator // ... --> rest operator

function calculateCartPrice(val1,val2,...num1){//rest 
    return num1
}

// console.log(calculateCartPrice(200,400,500,2000));

const user = {
    username: "Shiv",
    ages: 19
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and age is ${anyobject.age}`);    // the age im extracting here is not present in the object
}

// handleObject(user)

handleObject({
    username: "Nidhi",   // object can be directly passed also
    age: 19
})

const myArr = [200,400,500,2000]

function returnSecondVal(arr){
    return arr[1]
}

console.log(returnSecondVal(myArr));

