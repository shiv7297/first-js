const name = "Shiv"
const count = 500

//console.log(name + count + "Value");

console.log(`Hello my name is ${name} and my count is ${count}`);


const gameName = new String("Po-ke-mon-go")

console.log(gameName);

console.log(gameName[0]);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));

console.log(gameName.indexOf('o'));
console.log(gameName.indexOf('o'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-1,-7)
console.log(anotherString);

const stringOne = "           Shiv         "
console.log(stringOne.trim());

const url = "https://shiv.com/shiv%20pratap"

console.log(url.replace('%20','-'))

console.log(url.includes('nidhi'));

console.log(gameName.split('-',3));




