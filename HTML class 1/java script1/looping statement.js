// //for loop//
for (let i = 0; i <= 10; i++) {
    console.log(i);
}


let value = 10;
for (let i = 0; i <= 10; i++) {
    value *= i;
}
console.log(value);

//even number//
for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}
//odd number//
for (let i = 1; i <= 100; i += 2) {
    console.log(i)
}
const number = [3, 7, 2, 8, 5, 9, 4]
let max = number[0];
for (let i = 0; i < number.length; i++) {
    if (number[i] > max) {

        max = number[i];
    }
}
console.log(max);

//example of for loop//

let fruits = ["apple", "banana", "grapes", "orange", "mango"]
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}



//while loop//
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

//example of while loop//

let l = 10;
while (l<= 100) {
    console.log(l);
    l += 5;
}


//for in//
const person = {
    name: "kamal",
    age: 20,
    gender: "male"
}
for (let key in person) {
    console.log(key, person[key])
}


//eg for in//
const fruit = ["apple", "banana", "grapes", "orange", "mango"]
for (let index in fruit) {
    console.log(fruit[index])
}

//ex-2 for in//
const car = {
    model: "suzuki",
    color: "red",
    price: 1000000
}
for (let key in car) {
    console.log(key + " : ", car[key])
}

//for of//
const number1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let num of number1) {
    console.log(num)
}

//for of//
const colors = ["red", "yellow", "black", "orange", "green"]
for (let color of colors) {
    console.log(color)
}


//for of ex-2//
const word = "kabilan"
for (let letter of word) {
    console.log(letter)
}




//do while//
let f = 10;
do {
    console.log(f);
    f++;
} while (f <= 10);

//eg-3//
let x = 10;

do {
    console.log("This runs once even though x < 5 is false");
} while (x < 5);



//eg-4//
let t=10;
do{
    console.log("This runs once even though x < 5 is false");
    t--;
}while(t<5);





// //star pattern//
// let n=10
// for(let i=1;i<=n;i++){
//     console.log("*".repeat(i));
// }
 //pyramid
let p = 5;
for (let i = 1; i <= p; i++) {
  let spaces = ' '.repeat(p - i);
  let stars = '*'.repeat(2 * i - 1);
  console.log(spaces + stars);
 }

// let b=5;
// for(let i=b;i>=1;i--){
//     let spaces=' '.repeat(b-i);
//     let stars='*'.repeat(2*i-1);
//     console.log(spaces+stars);
// }
