     const prompt = require("prompt-sync")(); 
     const pin = 123;
     let pass= +prompt("please enter pass: ");
     if(pass===pin){
         console.log("“Correct, welcome back.”");
     } 
     let count =0;
         while(count < 3){
            pass= prompt("please enter pin: ");
          if(pass !== pin)
          {
         console.log(" “Incorrect, try again.”");
          }
         count++;
     }
     console.log(" “Sorry but you have beenlocked out.”");
