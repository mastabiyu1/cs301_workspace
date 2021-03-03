//  const prompt = require('prompt-sync')();
// let guess;
// let attempt=0;
// while(guess!==5){
//      guess = +prompt('please enter number between 1 and 10: ');
//   attempt++;
// }
// if(attempt===1){
//     console.log('Awesome!');
// }else if(attempt===2){
//     console.log('Great!');
// }else if(attempt===3){
//     console.log('Not bad!');
// }else{
// console.log(`it took you ${attempt} attempts!`);
// }
// console.log(`it took you ${attempt} attempts!`);

///////////////////////////////////////////////
// function smallestNumber(a,b,c){
// if(a<b && a>c || a>b && a<c ){
// return a;
// }
// if(b<a && b>c || b>a && b<c){
// return b;
// }
// return c;
// }
// console.log(smallestNumber(10,12,11));
/////////////////////////////////////////////
// for(let i=1; i<=10; i++){
//     for(let j=i; j<=10; j++){
//         if(j<=7){
//         continue;
//     }
//         if(i*j>=16){
//         break; // this break statement only breaks from the
// //inner loop
//     }
//           console.log(j);
//   }
//     if(i === 3){
//         break;
//   }
//     console.log(i);
//}


// let str ="";
// for(let i=5; i>=1; i--){
//     for(let j=1; j>=i; j++){
//         str += j  + "\t";
//     }
//     str+="\n";
// }console.log(str);
//////////////////////////////////////////////////////////


// function isPrime(n){
//      if(n<=1){
//         return false;
//     }
//     for(let i=2;i<n;i++){
//         if(n%i===0){
//           return  false;
//         }else{
//             return true;
//         }
//     }
//      return;
//     }
// console.log(isPrime(13));

// function Reversed(num){
//  let str = "";
//  while(num>0){
//      let lastDigit = num % 10;
//      str += lastDigit;
//      num = Math.floor(num/10);
// }
// return str;
// }
// console.log(Reversed(32));

//  /////////////////////////////

//  for(let i=0; i>10; i++){
//     console.log(i);
//    }

//  function isReversedPrime(){
//      if(Reversed(n)===isPrime(n)){
//          return true;
//      }else{
//          return false;
//      }
//  }
//  ////////////////////////////

//  for(let i=1; i<10; i++){
//     if(i%3===0) break;
//     console.log(i);
//    }
   

//    console.log("+++++++++++++++++++++++++++++");

// for(let i=1; i<10; i++){
//  if(i%3===0) continue;
//  console.log(i);
// }
// let h= null;
// console.log(typeof isPrime);
// console.log(typeof undefined);
// console.log('+++++++++++++++++++++++++++++++');

// const prompt =require('prompt-sync')();
// let radius = prompt('please enter the radius of cyclinder: ');
// let height = prompt('please enter the radius of cyclinder: ');

// let volumeOfCyclinder = Math.PI * Math.pow(radius,2) * height;
// console.log(volumeOfCyclinder);

// ///////////////////////////////////////////////////////

// let x = 2;
// let y = '5';
// console.log(y/x);
// console.log(x*y);
// console.log(x+y);
// console.log(y-x);
// console.log(typeof(y/x));
// console.log(typeof(y*x));
// console.log(typeof(y+x));
// console.log(typeof(y-x));
// console.log(5-3+2*4/2-2+8/2-2);
// let num = prompt('please enter number');
// if(num % 2 === 0){
//     console.log("Even");
// }else{
//     console.log("odd");
// }

// /////////////////////////////////////////
// let i = 100;
// let n=0;
// while(100>=n){
//     if(i===-5){
//         break;
//     }
//     console.log(i);
//         i-=5;
// }
// ////////////////////////////////////
// let a = 0;
// let m = 100;
// for(let m = 100; m >= 0 ; m-=5){
//     if(m % 5 ===0)
//         console.log(m);
    
// }
// ////////////////////////////////////////////////////

// let guess ;
// let attempt = 0;

// // do{
// //     guess = prompt('please your guess: ');
// //     attempt ++;
// // }while(guess!=7);
// while(guess!=5){

//      guess = prompt('please your guess: ');
//     attempt++;
// }

// if(attempt===1){
//     console.log('Awesome! you got correct on the first attempt:')
// }
// else if(attempt===2){
//     console.log('Not bad! you got it correct on teh second attempt:')
// }else{
//     console.log(`you got it correct after ${attempt} attempts`);
//}

////////////////////////////////////////////////////////////////////

const prompt = require('prompt-sync')();
let age = +prompt('please enter your age: ');
age = parseInt(age);
let l=0;
while(age > 0){
    console.log("happy birth day");
   
    age -=1;
}
// for(let i=0;i<age;i++){
//     console.log("happy birthday: ");
// }
// let radius;

// while(radius < 0){
//   radius = prompt('please enter radius: ');
//     radius=parseFloat(radius);
//   let area =Math.PI*Math.pow(radius,2);
// console.log(area);
//}
let x = 10;
function main() {
let x = 0;
console.log("x1 is " + x);
x = 20;
console.log("x2 is " + x);
if (x > 0) {
x = 30;
console.log("x3 is " + x);
}
console.log("x4 is " + x);
function f(x) {
console.log("x5 is " + x);
}
f(50);
console.log("x6 is " + x);
}
main();
console.log("x7 is " + x);