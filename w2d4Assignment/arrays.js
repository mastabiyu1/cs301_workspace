 "use strict";
/**
 * 
 * @param {array} arr1 first array
 * @param {array} arr2 second array
 * @returns {boolean} true if equal else false
 */
function isArrayEqual(arr1, arr2){
   if (arr1.length !== arr2.length){
 return false;
    } 
    for (let i=0;i<arr1.length;i++){
          arr1!==arr2;
          return false;
    }
    return true;
}

/**
 * 
 * @param {array} arr 
 * @returns {number} result of addition of first and last elements of the array 
 */
  /**
   * @param {object} arr; 
   * @return {number} sum;
   */
  function addend(arr){
    let sum=0;
  for(let i=0; i<arr.length ; i++){
      sum= arr[0] + arr[arr.length-1];
  }
  return sum;
  }
  /**
 * @return {number} returns the middle number;
 * @param {Object} arr; 
 */
function getMiddle(arr){
    
    for(let i=0;i<arr.length;i++){
        if(arr.length % 2 === 0){
            return (arr[(arr.length/2)-1] + arr[(arr.length/2)])/2;
        }else{
            return arr[(arr.length + 1)/2 -1];
        }
    }

}

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

module.exports= {isArrayEqual, addend, getMiddle, rotateElementsLeft };