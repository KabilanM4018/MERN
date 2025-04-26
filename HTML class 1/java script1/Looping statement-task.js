//9th table//

let table = 9;
for (let i = 1; i <= 10; i++) {
    console.log(table + 'x' + i + '=' + table * i);
}
//8th table//
let table1 = 8;
for (let i = 1; i <= 10; i++) {
    console.log(table1 + 'x' + i + '=' + table1 * i)

}

//1.Write a program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.//
let a = 10;
let b = 20;
if (a == 50 || b == 50) {
    console.log(true);
} else {
    console.log(false);
}

//2.Write a  program to check whether a given integer is within 20 of 100 or 400//
let num = 100;
if (num == 100 || num == 400) {
    console.log("true");
} else {
    console.log("false");

}
//3.Write a  program to check two given integers whether one is positive and another one is negative//
let j = 10;
let h = 10;
if (j < 0 && h > 0) {
    console.log("true");
} else {
    console.log("false");
}

//4.Write a program to check whether a given number is divisible by 7 or divisible by 11.//
let num1 = 14;
if (num1 % 7 == 0 || num1 % 11 == 0) {
    console.log("true");
} else {
    console.log("false");
}

//5.Write a  program to check whether all the digits in a given number are the same or not.//
let str = "557"; //0=5, 1=5, 2=5//
let ref = str[0] //5
var same = true
for (let i = 0; i < str.length; i++) {//3
    if (ref != str[i]) {//
        var same = false
        break

    }
    i++
}
if (same == true) {
    console.log("digits are same");
} else {
    console.log("digits not same");
}

//6.Write a  program to find those numbers which are divisible by 7 and multiples of 5, between 1500 and 2700 (both included)//
let i = 1500;
while (i <= 2700) {
    if (i % 7 == 0 && i % 5 == 0) {
        console.log(i);
    }
    i++;
}
//7.Write a program to convert temperatures to and from Celsius and Fahrenheit//
let Celsius = 20;
let Fahrenheit = 50;
let c = (Fahrenheit - 32) * 5 / 9;
let f = (Celsius * 9 / 5) + 32;
console.log(c);
console.log(f);

//8.Write a program to guess a number between 1 and 9.//
let n = 1;
while (n <= 9) {
    console.log(n);
    n++;
}



//9.Write a program to construct the following pattern, using a nested for loop//
// let p=5;
// for(let i=1;i<=n;i++){
//     for(let j=1;j>=i;j--){
//         process.stdout.write("*");
//     }
//     console.log();





//10.Write a program that accepts a word from the user and reverses it. like "welcome to java script" to "javascript to welcome"//
let string = "welcome to java script";
let arr = string.split(' ');
let rev = "";
for (let i = arr.length - 1; i >= 0; i--) {
    rev = rev + arr[i] + " ";
}
console.log(rev);

//11.prime numbers//
let nu = 11;
let flag = 0;
for (let i = 2; i < nu; i++) {
    if (nu % i == 0) {
        flag = 1;
    }
}
if (flag == 1) {
    console.log("not prime");
}
else {
    console.log("prime");
}


//12.factorial number//
let q = 5;
let fact = 1;
for (let i = 1; i <= q; i++) {
    fact = fact * i;
}
console.log(fact);

//13.Write a program to check whether an alphabet is a vowel or consonant//

let char = 'g';
if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
    console.log("vowel");
}
else if (char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U') {
    console.log("vowel");
}
else {
    console.log("consonant");
}

//14.Write a program to convert a month name to a number of days.//
let month = 'july';
switch (month) {
    case 'january':
        console.log("january", "31 days");
        break;
    case 'february':
        console.log("feburary", "28 days");
        break;
    case 'march':
        console.log("march", "31 days");
        break;
    case 'april':
        console.log("april", "30 days");
        break;
    case 'may':
        console.log('may', '31 days');
        break;
    case 'june':
        console.log('june', '30 days');
        break;
    case 'july':
        console.log('july', '31 days');
        break;
    case 'august':
        console.log('august', '31 days');
        break;
    case 'september':
        console.log('september', '30');
        break;
    case 'october':
        console.log('october', '31');
        break;
    case 'november':
        console.log('november', '30');
        break;
    case 'december':
        console.log('december', '31');
        break;
}
//15.Write a program that checks whether a string represents an integer or not//
let strings = '10';
if (strings.length == 1 && strings >= 0 && strings <= 9) {
    console.log("integer");
} else {
    console.log("not integer");
}
//16.Write a program to find the median of three values.//









//17.leap year//
var year = 2020;
if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
    console.log("leap year");
} else {
    console.log("not leap year");
}
//18.write a program to check wether a number is 3 digit number or not//
let z = 55;
if (z >= 100 && z <= 999) {
    console.log("3 digit number");
}
else {
    console.log("not 3 digit number");
}

//19.Write a program that prints all the numbers from 0 to 6 except 3 and 6.//
for (let i = 0; i <= 7; i++) {
    if (i == 3 || i == 6) {
        continue;
    }
    console.log(i);
}

//20.get input from users from 1 to 7 and print the respected day of the week//
let day = 5;
switch (day) {
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;
    default:
        console.log("invalid");
}
//21.accept the 3 sides of triangle and check whether it is equilateral or not//
let a1 = 5;
let b1 = 5;
let c1 = 5;
if (a1 == b1 && b1 == c1) {
    console.log("equilateral");
} else {
    console.log("not equilateral");
}

//22.fibonacci series//
let n1 = 0;
let n2 = 1;
let n3;
for (let i = 1; i <= n; i++) {
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
    console.log(n3);
}
//23.school grading system//
let marks = 55;
if (marks >= 90) {
    console.log("A+");
} else if (marks >= 80) {
    console.log("A");
} else if (marks >= 70) {
    console.log("A-");
} else if (marks >= 60) {
    console.log("B");
} else if (marks >= 50) {
    console.log("C");
} else if (marks >= 40) {
    console.log("D");
} else {
    console.log("F");
}

//24.hotel management//
let dosa=50;
let idly=15;
let vada=10;
let food="dosa"
let quantity=50;

if(food=="dosa")
{
    console.log("you have to pay" + dosa*quantity);
    
}
else if(food=="idly")
{
    console.log("you have to pay" + idly*quantity);
}
else if(food=="vada")
    console.log("you have to pay" + vada*quantity);
else {
    console.log("enter valid food");
}

//25.seasons//
let season="oct"
if(season=="jan"||season=="feb"||season=="mar")
{
    console.log("winter");
}
else if(season=="apr"||season=="may"||season=="jun")
{
    console.log("spring");
}
else if(season=="jul"||season=="aug"||season=="sep")
{
    console.log("summer");
}
else if(season=="oct"||season=="nov"||season=="dec")
{
    console.log("autumn");
}
else {
    console.log("enter valid season");
}

//26.employee bonus criteria//
let salary=50000;
let exper=7;
if(exper==0||exper==1||exper==2||exper==3){
    console.log((salary*10)/100 + salary);
}
else if (exper==4||exper==5||exper==6)
    console.log((salary*15)/100 + salary);
else if (exper>6)
    console.log((salary*25)/100 + salary);
else {
    console.log("enter valid exper");
}


//27.calculate the percentage//
let total=100;
let persent=78;
let absent=10;
let total1=total-absent;
let percentage1=persent/total1;
let percentage=percentage1*100;
if(percentage>=75){
    console.log(percentage + "%" + "you are eligible for exam");
    
}
else{
    console.log("you are not eligible for exam");
}


//28.accept 5 numbers from user and print 3rd largest number//
let num0=70;
let num2=20;
let num3=30;
let num4=40;
let num5=50;
let largest=num0;
if(largest<num2){
    largest=num2;
}
if(largest<num3){
    largest=num3;
}
if(largest<num4){
    largest=num4;
}
if(largest<num5){
    largest=num5;
}
console.log(largest);










