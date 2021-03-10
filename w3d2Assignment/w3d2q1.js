 "use strict";
 /**
  * @param {number} num is the base;
  * @param {number} pwr is the power of the number;
  * @returns {number} number;
  */
 function powerRecursion(num,pwr){

      if(num > 0 && pwr === 0){
        return 1;
        }else{
          return num*powerRecursion(num,pwr-1);
        }
 }
 console.log("+++++++++++++++++++++++ powerRecursion ++++++++++++++++++++");
 console.log(powerRecursion(3,4));
 //////////////////////////////////////////////////////////////////////////////////////////////

/**
 * @param {number} dig;
 * @returns {number} number;
 */
function countDigits(dig){
if(dig===0){
  return 0; 
 }else{
  return  1 + Math.floor(countDigits(dig/10));
 }
}
console.log("+++++++++++++++++++ countTheDigitsof a number +++++++++++++++++++++++++");
console.log(countDigits(1));
///////////////////////////////////////////////////////////////////////////////////
/***
 * @param {String} rstr;
 * @return {character} char; 
 */

console.log("++++++++++++++++++++ ReverseStringRecursion ++++++++++++++++++++++++");
//console.log(ReverseStringRecursion("string"));
/////////////////////////////////////////////////////////////////////////////////////////
// program to reverse a string
/**
 * 
 * @param {String} str;
 * @returns {String} character;  
 */
function reverseString(str) {

  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
      newStr += str[i];
  }
  return newStr;
}
console.log(reverseString("string"));
console.log("++++++++++++++++++++++  ReverseString  +++++++++++++++++++++++++++++");
 /////////////////////////////////////////////////////////////////////
 /**
  * 
  * @param {String} str;
  * @returns {String} str; 
  */
function revString(str){
if(str===""){
  return "";
}else{
  return revString(str.substring(1))+str.substring(0,1);
}
}
console.log(revString("ethiopian"));

/////////////////////////////////////////////////////////////////////////////////////////