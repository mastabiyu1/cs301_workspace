        "use strict";
        
const prompt = require("prompt-sync")();

let depth = prompt("please enter depth: ");
let height = prompt("please enter height: ");
let width = prompt("please enter width:");
let sweep = prompt("please enter sweep: ");

let volumeOfHouse = width * depth * height;
let volumeOfRoof = 1/2 * (width * depth * sweep);
let totalVolume = volumeOfHouse + volumeOfRoof;

console.log( "the total volume of the house is: " + totalVolume);
