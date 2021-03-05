           "use strict";
  /**
   * @param {object} arr; 
   * @return {number} sum;
   */
     function Addend(arr){
              let sum=0;
            for(let i=0; i<arr.length ; i++){
                sum= arr[0] + arr[arr.length-1];
            }
            return sum;
           }
    console.log(Addend([1,2,3,4,5,7]));