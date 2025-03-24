for(let index = 0; index < 10; index++){
    const element = index;
    // console.log(element);   
}
for (let i = 0; i < 10; i++) {
    // console.log(`outer loop value: ${i}`);
    
    for (let j = 0; j < 10; j++) {
        // console.log(`inner loop value ${j} and outer loop ${i}`);
    }
}
for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop value: ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        // console.log(i + '*' + j + '=' + i*j);   // hehehehehhe
    }
}
let myArr = [1,2,3,4,5,6]
for (let index = 0; index <= myArr.length; index++) {
    const element = myArr[index];
    console.log(element);   
}
// no out of bound constraint in javascript it will give "undefined"

// break and continue

// while and do while loops

