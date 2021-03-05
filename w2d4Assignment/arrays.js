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
console.log(getMiddle([1,2,3,4,5,6,7]));

module.exports= {isArrayEqual, addend ,getMiddle};