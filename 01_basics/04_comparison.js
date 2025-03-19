// no need to do basic comparison i think


//  console.log(null > 0);
//  console.log(null == 0);
//  console.log(null >= 0);


console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined > 0);


 

 // the reason is that equality ==  and comparison < , > , <= , >= works differently 
 //Comparison convert null to a  numnber ,treatin it as 0.
 //That's why null >= 0 is true and null > 0 is false

// console.log("2" == 2);
// console.log("2" >= 2);
// console.log("3" == 2);
// console.log("3" >= 2);
// console.log("2" == 4);
// console.log("2" >= 4);


 //=== --> strict check

 //console.log("2" === 2);

 // strict check also checks the data type


