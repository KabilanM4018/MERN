///Array method//
// const arr=[1,2,3,4,5,6,7,8,9,10]
// arr.pop()
// console.log(arr);

// //push()//
// const arr1=[1,2,3,4,5,6,7,8,9,10]
// arr1.push(11)
// console.log(arr1);

// //shift()//
// const arr2=[1,2,3,4,5,6,7,8,9,10]
// arr2.shift(11)
// console.log(arr2);

// //unshift()//
// const arr3=[1,2,3,4,5,6,7,8,9,10]
// arr3.unshift(0)
// console.log(arr3);

// const numbers0=[1,2,3,4,5]
// numbers0.forEach(num=>console.log(num*2))

// const number1=[1,2,3,4,5]
// let sum=50
// number1.forEach(num=>sum+=num)
// console.log(sum);

// const num=[1,2,3,4,5,6,7]
// num.forEach((num,index,arr)=>{
//     arr[index]=num+2;
// })
// console.log(num)


let number=[1,2,3,4,5,6,7]
number.forEach((num,index,arr)=>{
    arr[index]=num+2;
})
console.log(number);

// const num=[1,2,3,4,5,6,7]
// const even=num.find(numbers=>numbers%2==0)
// console.log(even);

const num1=[1,2,3,4,5,6,7,8]
const even=num1.includes(8)
console.log(even)

// const array=['apple','mango','orange','pineapple']
// const check=array.includes('mango')
// console.log(check);


let obj={
    name:'suhail',
    age:22,
}
let array=Object.entries(obj)
console.log(array);


let obj0=[ [ 'name', 'suhail' ], [ 'age', 22 ] ]
let obj1=Object.fromEntries(obj0)
console.log(obj1);


//date methods//
let now=new Date()
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());













