// creation and consumption of preomises

// promises call back leta hai and call back hell reduce karta hai

//promise ya to pura hoga ya nhi hoga

const promiseOne = new Promise(function (resolve,reject){
    //Do an async task
    //DB calls,cryptography,netwok

    setTimeout(function(){
        console.log("Async Task is complete"); 
        resolve()   
    },1000)
   
})

// promise create ho gya hai ab ise consume karna hai

promiseOne.then(function(){
    console.log("promise consumed");
    
}) // jab tak resolve call nhi kroge tab tak ye connect nhi hoga

//directly
new Promise(function(resolve,reject) {
    setTimeout(function(){
        console.log("Async task Two");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");   
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"chai@example.com"})
    },1000)
})


promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"shiv",password: "123"})
        } else {
            reject('Error: Something went wrong.')
        }
    },1000)
})


// const uname = promiseFour.then((user) => {   // aise to nhi hota
// console.log(uname);



promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then(function(username){
    console.log(username);   
})
.catch(function (error){
    console.log(error);
})
.finally(function(){
     console.log("Ther promise is Either Resolved or  Rejected");
     
})


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"nidhi",password: "2458"})
        } else {
            reject('Error: hehehehhehehe.')
        }
    },1000)
})


// async await can't directly handle errors

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);  
    } catch (error) {
        console.log(error); 
    }
}

consumePromiseFive()


async function getAllusers() {
  try {
     const response = await fetch('https://api.github.com/users/shiv7297')
    //console.log(response);
    
     const data =  await response.json()
     console.log(data);
    } catch (error) {
        console.log("Error:",error);
        
    }
}

getAllusers()


//same same


// fetch('https://api.github.com/users/shiv7297')
// .then((response) => {
//     return response.json()
// }).then((data) => {
//     console.log(data); 
// })
// .catch((error) => console.log(error))