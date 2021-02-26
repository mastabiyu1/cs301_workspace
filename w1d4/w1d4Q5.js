// Write a JavaScript program to compute sum of all the digits in a given integer number.
// Input Output
// 123 6
// 102 3
// 8 8
let prompt = require('prompt-sync')();
let num=prompt('please enter number: ');
let sum=0;
for(let i=0;i<num.length;i++){
  let x = parseInt(num.charAt(i));

  sum=sum+x;
}
console.log(sum);
    
