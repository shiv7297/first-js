// if-else,switch

// falsy values
// false,0,-0,BigInt 0n,""",null,undefined,NaN

// truthy values 
// "0",'false'," ",[],{},function(){}


const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    // console.log("empty object");
    
}

// false == 0 is true
// false == '' also true
// 0 == '' also true


// Nullish Coalescing Operator(??):null undefined

let val1;
//val1 = 5?? 10
//val1 = null ?? 10
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 100


console.log(val1);
//it's not ternary operator(hehehehe)