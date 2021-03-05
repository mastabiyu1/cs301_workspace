"use strict";
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