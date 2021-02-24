//Q#1)

const prompt = require(prompt-sync)();
let VolumeInQuarts = parseFloat(prompt('Please enter voliume in quarts: '));
let VolumeInLiters = 0.946*VolumeInQuarts;
console.log('Volume in liters is= '+ VolumeInLiters);

//Write a JavaScript program that asks a user for a distance in kilometers and then convert that
//value in miles.
//Q#2

let DistanceInKm = prompt ('please enter distance in Killo meter: ');
let DistanceInMiles =  0.621 * DistanceInKm;
console.log(DistanceInMiles);

//Q#3
let TotalNumOfBoxes = prompt('please enter the total number of boxes: ');
let NumOfStacks = TotalNumOfBoxes/6;
 if(TotalNumOfBoxes % 6 == 0){
     
     console.log(NumOfStacks);   
 }
  if (TotalNumOfBoxes % 6 != 0){ 

      NumOfStacks = Math.floor(TotalNumOfBoxes/6) + 1;
      console.log(NumOfStacks);
  }
  //Q#4

 let begnningOdoMeter = prompt('please enter the begnning odometer');
 let endingOdoMeter = prompt('please enter the ending odometer');
 let NumberOfGalonOfGasUsed = prompt('please enter nomber of galon of gas used');
 let reading = (endingOdoMeter - endingOdoMeter)/NumberOfGalonOfGasUsed;
 console.log(reading);

 //Q#5
 
 let age = +prompt('please enter your age');
 let range = 220 - age;
 let slowest = range * 0.65;
 let fastest = range * 0.85;
 console.log('the slowest heart beat per minuit is = ' + slowest);
 console.log('the fastest heart beat per minuit is = ' + fastest);


 









