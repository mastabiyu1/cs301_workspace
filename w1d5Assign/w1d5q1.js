
///w1d5q1
function checkPrime(n){
  if( n === 1 ){
     return false;    
   }else if(n === 2){
   return true;
   }else  {
    for(let i = 2; i < n ; i++){
         if(n % i === 0){
           return false;
         }
    }
    return true;
  }
}
console.log(checkPrime(8));

///// w1d5q1

const prompt = require('prompt-sync');
let num = prompt('please enter number: ');
 if(checkPrime(num)===true){
   console.log('isPrime');
 }else{
   console.log('is not Prime');
 }
