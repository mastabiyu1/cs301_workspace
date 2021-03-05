   "use strict";
   /**
    * @param {Object} arr4 ;
    * @returns {number};
    * 
    */
   function rotateElements(arr4){
     //  let arrc=[];
   for(let i=0; i<arr4.length; i++){
      arr4.shift(i-1);
        //arr4[arr4.length-1] = arr4[i];
       // arrc[i-1]=arr4[i];
   }
}console.log(rotateElements([1,2,3]));