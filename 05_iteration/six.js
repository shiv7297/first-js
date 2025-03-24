const nums = [1,2,3]

// const total = nums.reduce( function (acc,currval) {
//     console.log(`acc: ${acc} and currVal: ${currval}`);
//     return acc + currval
// },0)

const total = nums.reduce( (acc,currVal) => acc + currVal,0)

// console.log(total);

const Cart = [
    {
        item: "mobile dev course",
        price: 6999
    },
    {
        item: "data science course",
        price: 5999
    },
    {
        item: "js course",
        price: 4999
    },
    {
        item: "py course",
        price: 7999
    },
]

const Total = Cart.reduce( (acc,item) => acc + item.price,0 )

console.log(Total);