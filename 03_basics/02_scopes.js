// {}
// not called scope in object because it comes in object definition


var c = 400
d = 500    // problem is with this and var only

if(true){
    let a = 10
    const  b = 20
    var c = 40      // value going out of scope
    d = 50     // value going out of scope
}

// console.log(a);
//console.log(b);
// console.log(c);
// console.log(d);


// function one () {
//     const username = "Shiv"

//     function two () {
//         const website = "Youtube"
//         console.log(username);
//     }
//     // console.log(website);

//     two()  
// }
// one()

if(true){
    const username = "Shiv"
    if(true){
        const website = " resumify"
        console.log(username + website);
    }
    // console.log(website); 
}

// console.log(username);

//****************** Interesting**************
  
console.log(addone(5));   // printing the result even befor initialization
function addone (num){
    return num + 1
}


//hoisting
console.log(addTwo(5));  // can't call the fucntion before initialization because it was declared oin different way
const addTwo = function(num){
    return num + 2
}                                  // also a fucntion but declared in different way
                                   // also called expression
