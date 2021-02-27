

// const prompt = require('prompt-sync')();
// let i=1;
// while(i <= 20){
//     if(i % 2===0){
//         console.log(i);
//     }
//  i++;
// }
// console.log('++++++++++++++++++++++++++++++++++++++');

// for(i = 1; i<= 20; i++){
//     if(i % 2===0){
//         console.log(i);
//     }
// }

// console.log("++++++++++++++++++++++++++++++++++++++++++++++++++")

// let age //= prompt('please enter your age: ');
// while(age <= 18){
//     if (age < 18){
//    console.log(prompt('please enter your age: '));
//     }
//     i++;
// }
           //  "use strict";
// let age;
// do {
//     age = prompt('please enter your age: ');
// }while (age<18);

// for (let i = 0; i<10; i++){
//     if(i % 2==0){
//         console.log(i+1);
//     }
// }
  
    //     let row;
    //  for(let i=1; i<=5; i++){
    //      row = "";
    //      for(let j=1; j<=i; j++){ 
    //          row += j;
    //      }
    //      console.log(row);
    //  }
     
    //  const prompt = require("prompt-sync")(); 
    //  const pin = 123;
    //  let pass= +prompt("please enter pass: ");
    //  if(pass===pin){
    //      console.log("“Correct, welcome back.”");
    //  } 
    //  let count =0;
    //      while(pass!== pin){
    //      console.log(" “Incorrect, try again.”");
    //       pass= prompt("please enter pin: ");
    //      if(count===3){
    //          break;
    //      }
    //      count++;
    //      console.log(" “Sorry but you have beenlocked out.”");

    //  }
    // console.log(" “Sorry but you have beenlocked out.”");
    
    // continue inside a for loop
    // for (let i = 0; i < 20; i++) {
    //   if (i % 2 == 0){
    //     continue;
    //   }
    //   console.log(i);
    // }
    
    //continue inside a while loop
    // let j = 0;
    // while (++j <= 20) {
    //   if (j % 2 !== 0){
    //     continue;
    //   }
    //   console.log(j);
    // }

    //const prompt = require("prompt-sync")();
//let year = prompt('please enter year: ');
// if(year % 100===0){
//       if(year % 400===0){
//     console.log('leap year');
//   }else{
//     console.log('not leap year');
//   } 
// }else if(year % 4===0){
//     console.log('leap year');
//   }else{
//     console.log('not leap year');
//   }
  // let isLeapYear=year%100===0?year%400===0:year%4===0;
  // console.log(isLeapYear);                      
// a function without explicit return and no parameter
//const prompt=require("prompt-sync");
// Write a JavaScript program to check whether a number is Perfect number or not?
// Perfect number is a positive integer which is equal to the sum of its proper positive divisors.
// For example: 6 is the first perfect number
// Proper divisors of 6 are 1, 2, 3
// Sum of its proper divisors = 1 + 2 + 3 = 6.
// Hence 6 is a perfect number.
// let number = prompt('please enter the number:');
// let sum = 0;
// for(let i = 1; i < number ; i++){
//   if(number % i === 0){
//     sum=sum + i;
//   }
// }
// console.log(sum===number);
// if(sum===number){
//   console.log('perfect number');
// }else{
//        console.log('not perfect number');
//   }
// prompt('please enter the number of class members')
 
// function reverseDigit(n){
// let reverse = 0;
//   while(n > 0){
//   let LastDigit = n % 10; 
//   reverse = reverse *10 + LastDigit;
//   n = Math.floor(n/10)
//  }
//  return reverse;
// }
// console.log(reverse);
// //console.log(reverseDigit(123));
// reverseDigit(123);
//////////////////////////////////////////////////////////
///w1d5q1-a
// function checkPrime(n){
//    if( n === 1 ){
//       return false;    
//     }else if(n === 2){
//     return true;
//     }else  {
//      for(let i = 2; i < n ; i++){
//           if(n % i === 0){
//             return false;
//           }
//      }
//      return true;
//    }
// }
// console.log(checkPrime(8));
// ///// w1d5q
// const prompt = require('prompt-sync');
// let num = prompt('please enter number: ');
//   if(checkPrime(num)===true){
//     console.log('isPrime');
//   }else{
//     console.log('is not Prime');
//   }

  // Write a function that computes and returns area of a circle based on the
  //  value of input radius.
  // a. Write a function that compute volume of a cylinder and making
  //  use of function that
  // computes area of a circle

    // function areaOfCircule(r){
      
    //      let area;
    //   area = Math.PI * Math.pow(r,2);
    //   return area;
    // }
    // console.log(areaOfCircule(10));

    // function volumeOfCircule(h){

    //  let volume;
    //  volume = areaOfCircule(10)*h;
    //   return volume;  
    // }
    // console.log(volumeOfCircule(10));

    //width, depth, height and sweep
/////////////////////////////////volume calculation////////////////////////////////////////////////////
// const prompt = require('prompt-sync')();
// let depth = prompt('please enter depth: ');
// let height = prompt('please enter height: ');
// let width = prompt('please enter width:');
// let sweep = prompt('please enter sweep: ');

// let volumeOfHouse = width * depth * height;
// let volumeOfRoof = 1/2 * (width * depth * sweep);
// let totalVolume = volumeOfHouse + volumeOfRoof;
// console.log( 'the total volume of the house is: ' + totalVolume);

/////////////////////////////hcf of two numbers////////////////////////////////////////////












