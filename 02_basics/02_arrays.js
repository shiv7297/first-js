const marvelHeros = ["Thor","IronMan","CaptainAmerica"]
 const dcHeros = ["SuperMan","BatMan","Flash"]

// marvelHeros.push(dcHeros)    //will take entire dcHeros arrays as element
// console.log(marvelHeros);
// console.log(marvelHeros[3]);
// console.log(marvelHeros[3][0]);


// const allHeros = marvelHeros.concat(dcHeros)    //doesnt add in the existing array intead it reuturns new array
// console.log(allHeros);   
// console.log(marvelHeros);


const allNewHeros = [...marvelHeros,...dcHeros]
// console.log(allNewHeros);


const anotherArr = [1,2,3,[4,5,6],7,[8,9,[10,11]]]

const realArr = anotherArr.flat(Infinity)    //this Infinity means all the depths
console.log(realArr);


console.log(Array.isArray("Shiv"))
console.log(Array.from("Shiv"))

const obj = {name:"Shiv"};
console.log(Array.from(Object.keys(obj)))


let s1 = 1
let s2 = 2
let s3 = 3

console.log(Array.of(s1,s2,s3))