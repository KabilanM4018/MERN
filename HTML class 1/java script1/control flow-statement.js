//control flow statement//
//if,else if,if else,nested if,switch case statement//

//if statement//
let num=10;
if(num>11){
    console.log("num is greater than 10");
}

//if else statement//
let no=11;
if(no>10){
    console.log("no is greater than 10");
}
else{
    console.log("no is less than 10");
}

//if else if statement//
//example 1//
let age=17;
if(age>18){
    console.log("you are eligible for voting");
}
else if(age<18){
    console.log("you are not eligible for voting");
}
else{
    console.log("you are not eligible for voting");
}
//example 2//
let rating=5;
if(rating<=2){
    console.log("you are not a good student");
    }
else if(rating>=4){
    console.log("you are a good student");
}
else{
    console.log("you are a average student");
}

//example 3//
let marks=100;
if(marks<35){
    console.log("you are fail");
}
else if(marks>=35 && marks<50){
    console.log("you are pass");
}
else if(marks>=50 && marks<60){
    console.log("you are second class");
}
else if(marks>=60 && marks<70){
    console.log("you are first class");
}
else if(marks>=70 && marks<100){
    console.log("you are first class with distinction");
}
else{
    console.log("you are eligible for admission");
    }

//nested if statement//

let score=80;
if(score<35){
    if(marks>=80){
        console.log("distinction");
    }
    else{
        console.log("passed");
      }
    }
     else{ 
     console.log("fail");
 }

//switch case statement//
let day=8;
switch(day){
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
        console.log("invalid day");
}

//example 2 for switch case statement//
let name="raj";
switch(name){
    case "sagar":
        console.log("student2");
        break;
    case "raju":
        console.log("teacher");
        break;
    case "ranjith":
        console.log("student1");
        break;
    default:
        console.log("invalid name");
}

//example 3 for switch case statement//
let subject="tamil";
switch(subject){
    case "english":
        console.log("english");
        break;
    case "hindi":
        console.log("hindi");
        break;
    case "maths":
        console.log("maths");
        break;
    case "science":
        console.log("science");
        break;
    case "social science":
        console.log("social science");
        break;
    default:
        console.log("invalid subject");
}

//example for switch case statement//
let fruit = "banana";
switch (fruit) {
  case "banana":
    console.log("Yellow fruit");
    break;
  case "apple":
    console.log("Red fruit");
    break;
  default:
    console.log("Unknown fruit");
}

//example for switch case statement//
let status = "success";
switch (status) {
  case "success":
    console.log("Operation successful");
    break;
  case "error":
    console.log("An error occurred");
    break;
  default:
    console.log("Status unknown");
}
   

//example for nested if statement//
let year = 14;
let hasLicense = true;
if (year>= 18) {
  if (hasLicense) {
    console.log("You can drive");
  } else {
    console.log("You need a license to drive");
  }
}


 
//if statemet example//
 var homework = true
 if(homework)
    {
    console.log("you are done your homework");
 }
 else{
    console.log(" you are not done your homework");
 }


 var cookies=false
 if(cookies)
    {
    console.log("would you like a cookies?");
 }
 else{
    console.log("Times to bake more cookies");
 }


 var teeth=true
 if(teeth)
 {
    console.log("you are healthy");
 }
 else{
    console.log("you are not healthy");
 }

var birthday=false
if(birthday)
{
    console.log("Happy Birthday");
}
else{
    console.log("Have a great day");
}

var season="spring"
if(season=="summer")
{
    console.log("Have fun in the sun")
}
else if(season=="winter")
{
    console.log("Have fun in the snow")
}
if(season=="spring")
{
   console.log("Enjoy the blooming flowers")
   }
if(season=="fall")
{
    console.log("Enjoy the colorful leaves")
}


// let birthday=false
// if(birthday)
// {
//     console.log("Happy Birthday");
// }
// else{
//     console.log("Have a great day");
// }
