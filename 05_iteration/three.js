//********************FOR EACH LOOP***************

const coding = ["js","ruby","java","python"]

//call back funtion ka nam nhi hota
coding.forEach(  function (item) {    // fucntion yhin ke yhin likha hai so no name
    //console.log(item);
    
})

coding.forEach( (val) => {
    //console.log(val);
    
})

// we can also pass fucntion in foreach loop

function printMe(item){
    //console.log(item); 
}  

coding.forEach(printMe)  // only give reference

const myCodling  = [
    {
        language: "Javascript",
        name: "js"
    },
    {
        language: "java",
        name: "java"
    },
    {
        language: "python",
        name: "py"
    }
]

myCodling.forEach(function (item)  {
    console.log(item.language);
    
})