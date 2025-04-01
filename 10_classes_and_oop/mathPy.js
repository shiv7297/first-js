const descripter = Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(descripter);

// value of pi is hardcode such that we cant make it writable(writable flag =  true)

//const myNewObj = Object.create(null)

const chai = {
    name: "masala chai",
    price: 300,
    isAvailable: true,

    orderChai: function(){
        console.log("chai bni hi nhi");
        
    }
}

console.log( Object.getOwnPropertyDescriptor(chai,"name"));

 Object.defineProperty(chai,"name",{
//      writable: false,
    enumerable: false
 })           // name par iteration nhi hogi ab 

// console.log( Object.getOwnPropertyDescriptor(chai,"name"));


// for (const [key,value] of chai) {
//     console.log(`${key}: ${value}`);
// }                                       // but chai is not iteratable

for (const [key,value] of Object.entries(chai)) {
   if(typeof value != "function") {
    console.log(`${key}: ${value}`);
}
}   