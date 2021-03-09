"use strict";
const prompt=require("prompt-sync")(); 

//Q,a
let car={
    make:"Toyata",
    model: "camry"
};

//Q,b
 console.log(car);

 //Q,c
  car.model="RAVA4";
  console.log(car);

 //Q,d
 delete car.make;
 console.log(car);

 /**
  * @param {object} obj;
  * @returns {number} number;
  */
 function countProperties(obj){
// let count=0;

// while(obj){
//     let nOfobjects={
//         [obj]:
//     };
//     count++;
// }
 }
console.log();
 ////////////////////////////////////////////////////
 /**
  * @param {string} str;
  * @returns {boolean} true or false;
  */

    function checkSpam(str){
     let text=str.toLowerCase();

    if(text ==="lottery" || text ==="prize"){
      return true;
      }
      return false;
      }

 console.log(checkSpam("PRIZE"));

 ////////////////////////////////////////////////////////////////////////
 /**
  * @param {String} str1;
  * @param {String} str2;
  * @returns {String} suffix;
  */
 function suffix(str1,str2){



 }

 //////////////////////////////////////////////////////////////////////////
/**
 * 
 * @param {char} s;
 * @returns {String}; 
 */
 function titleCase(s){

    let text=s[0].toLowerCase() + s.slice(1);
             
    
    return text;

 }
 console.log(titleCase("abiyu"));
 ///////////////////////////////////////////////////////////////////////////

 /**
  * @param {number} num1 number;
  * @param {number} num2 number;
  * @returns {number} number;
  */
 function swap(num1,num2){
     
    let zzz=num1;
        num1=num2;
        num2=zzz;
  return (num2,num2);

 }
 console.log(swap(5,7));
 ///////////////////////////////////////////////////////
 /**
  * @param {Object} name;
  * @param {Object} age;
  * @returns {number} average age;
  */
 function getAverageAge(name,age){

//    let users={
//         name:"abc",
//         age:20,
//     };
//     users.name="xyz";
//     users.age=10;
    let abc = {name:"abc",age:20};
    let xyz = {name:"xyz",age:10};
    let arro=[abc,xyz];


  let averageAge= (abc.age + xyz.age)/arro.length;


 } 
 console.log(getAverageAge());