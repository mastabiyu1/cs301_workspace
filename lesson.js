

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
let prompt = require('prompt-sync')();
let num=prompt('please enter number: ');
let sum=0;
for(let i=0;i<num.length;i++){
  let x = parseInt(num.charAt(i));

  sum=sum+x;
}
console.log(sum);
    