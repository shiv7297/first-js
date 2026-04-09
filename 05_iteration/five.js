const myNumbers = [1,2,3,4,5,6,7,8,9]

//const newNums = myNumbers.map( (num) => num + 10)

const newNums = myNumbers
                    .map( (num) => num*10)  
                        .map( (num) => num + 1) 
                            .filter( (num) => num >= 40)

console.log(newNums);

//map != Map


//************************reduce**************** */

const myNums = [1,2,3];

const total = myNums.reduce(function (acc, curr){
    console.log(`acc is ${acc} and curr is ${curr}`);
    return acc + curr;
},10);

console.log(total);