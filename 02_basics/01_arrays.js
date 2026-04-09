//array

const myArr = [1,2,3,4,"Shiv"]
const heros = ["IronMan","Thor"]

const myArr2 = new Array(1,2,3,4,5)

//  console.log(myArr["1"])  ==  console.log(myArr[1])


//arrays create shallow copies not deep copies
// shallow --> shares the same reference

//              Array Methods  

myArr2.push(6)


// pop

// myArr2.unshift(9)  insert at start
// myArr2.shift()     remove from start
// myArr2.shift()
// myArr2.shift()

console.log(myArr2.includes(9));
console.log(myArr2.indexOf(9));
console.log(myArr2.indexOf(3));


console.log(myArr2);

const newArr = myArr.join() // converts to string
console.log(newArr);
console.log(typeof newArr);


//slice and splice
console.log('A',myArr2);

const n1 = myArr2.slice(1,3) //inludes only starting index

console.log('B',myArr2);
console.log('n1',n1);

const n2 = myArr2.splice(1,3) // both inclusive and removes that part from original array too

console.log('C',myArr2);
console.log('n2',n2);

