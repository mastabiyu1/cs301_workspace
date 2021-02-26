//w1d4Q
//Q1a
const prompt =require('prompt-sync')();
let number = prompt('please enter number');
let count=0;
let i=2;
while(i < number){

if(number % i === 0){
    if(count > 0){
        console.log('is not prime');
    }   
} 
count++;
i++;
}
console.log('isprime');

////////////////////////////////////
//Q2b

let num = prompt('please enter number');

let counter=0;
let i=2;
while(i < number){

if(number % i === 0){
   if(counter===0){
       console.log('isPrime');
   }else{
       break;
   }
} 
counter++;

i++;
}
console.log('is not prime')








