const prompt = require("prompt-sync")(); 
let number = +prompt("please enter number: ");
let factorial;
if(number < 0){
console.log("error");
} 
else if(number===0){
   console.log('factorial is: '+ 1);
}else{
    factorial = 1;
    for(let i=1 ; i <= number ; i++ ){
          factorial*=i;
    }
    console.log('factorial is:'+ factorial);
}