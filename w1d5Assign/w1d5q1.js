       "use strict";
/**
 * @return {boolean};
 * @param {number} num; 
 */
function checkPrime(num){
  if( num === 1 ){
     return false;    
   }else if(num === 2){
   return true;
   }else  {
    for(let i = 2; i < num ; i++){
         if(num % i === 0){
           return false;
         }
    }
    return true;
  }
}
console.log(checkPrime(8));

/**
 * checks if num is prime or not
 *  @param {number};
 *  @print 
 */

const prompt = require("prompt-sync")();
let num = prompt("please enter number: ");
 if(checkPrime(num)===true){
   console.log("isPrime");
 }else{
   console.log("is not Prime");
   }

