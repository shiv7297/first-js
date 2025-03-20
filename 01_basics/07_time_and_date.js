//Dates

let myDate = new Date()
console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toTimeString());
console.log(myDate.getDate());
console.log(myDate.getDay());

console.log(typeof myDate);

// let createDate = new Date(2023,0,23)
// let createDate = new Date(2023,0,23,5,3)

let createDate = new Date("2023-01-14")
console.log(createDate.toLocaleString());


let myStamp = Date.now()
// console.log(myStamp);

// console.log(createDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());
console.log(newDate);

console.log(`${newDate.getDay()} and the time is`)

console.log(newDate.toLocaleString('default',{
    weekday: "long"
    date: "long"
}))
