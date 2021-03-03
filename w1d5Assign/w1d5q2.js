      "use strict";
/**
 * 
 * @param {radius} rad; 
 * @return {area} area;
 */
function areaOfCircule(rad){
      
    let area;
 area = Math.PI * Math.pow(rad,2);
 return area;
}
console.log(areaOfCircule(10));


/**
 * 
 * areaOfCircule @param {rad};
 * @param {height} hig; 
 * @return {vol}; 
 */
function volumeOfCyclinder(hig){
let vol = areaOfCircule() * hig;
 return vol;  
}
console.log(volumeOfCyclinder());
