   "use strict";
   /**
    * @param {Object} arr4 ;
    * @returns {number};
    * @param {number}num the number fo rotations;
    */
   function rotateElementsLeft(arr4,num){
  if(num === arr4.length){
      return arr4;
  }else if(num > arr4.length){
      num = num % arr4.length;
  }
  for(let i=0;i<num;i++){
      arr4.unshift(arr4.pop());
  }
 return arr4;
}
console.log(rotateElementsLeft([1,2,3],2));