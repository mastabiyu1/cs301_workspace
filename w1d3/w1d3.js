// Q#1

let Weather = prompt('please enter weather: ');
let Footwear = prompt('please enter footweare: ');
if(Weather==='hot'){
    console.log('sandals');
}else if(Weather==='rain')
{
    console.log('galoshes');
}else if(Weather==='snow'){
   
    console.log('boots');
}
else 
{
    console.log('sneakers');
}
//////////////////////////////////////////////////////////////

 
//Q#2
let studentName = prompt('please enter students name: ');
let NoOfCredites = prompt('please enter number of completed credites: ');
if(NoOfCredites > 0 && NoOfCredites<30){
    console.log('Freshman');
}if(NoOfCredites >= 30 && NoOfCredites < 60){
    console.log('Sophomore');
}if(NoOfCredites >= 60 && NoOfCredites < 90){
    console.log('Junior');
}else if(NoOfCredites > 90){
    console.log('Senior');
}

//Q#3
let CostOfHouse = +prompt('please enter home lone: '); 
let DownPaymentCost = +prompt('please enter the downpayment: ');
if(DownPaymentCost>=0 && DownPaymentCost < 50000){
    console.log(0.05*DownPaymentCost);
}else if(DownPaymentCost>=50000 && DownPaymentCost < 100000){
    console.log(1000 +0.10*(DownPaymentCost - 50000));
}else if(DownPaymentCost>=100000 && DownPaymentCost < 200000){
    console.log(2000 + 0.15*(DownPaymentCost - 100000));
}else if(DownPaymentCost >= 200000){
    console.log(5000 + 0.10*(DownPaymentCost - 200000));
}
//////////////////Q#4///////////////////////////////

let status= +prompt('please enter the number of books: ');
let NumberOfBooksOverdue = +prompt('please enter number fo books overdue: ');
let LoanDurationInWeeks;
let studentLoanDuration;
let FacultyLoanDuration;
let OthersLoanDuration;
  if(NumberOfBooksOverdue===0){
      studentLoanDuration=6;
      FacultyLoanDuration=12;
      OthersLoanDuration=4
   console.log(studentLoanDuration);
   console.log(FacultyLoanDuration);
   console.log(OthersLoanDuration);

  }else if(NumberOfBooksOverdue > 0 && NumberOfBooksOverdue < 3){
       studentLoanDuration=4;
       FacultyLoanDuration=10;
       OthersLoanDuration=3;
    console.log(studentLoanDuration);
    console.log(FacultyLoanDuration);
    console.log(OthersLoanDuration);

   }else if(NumberOfBooksOverdue >= 3){
       studentLoanDuration=2;
       FacultyLoanDuration=8;
       OthersLoanDuration=2;
    console.log(studentLoanDuration);
    console.log(FacultyLoanDuration);
    console.log(OthersLoanDuration);
   }

//////Q#5///////////////////////////////////////////////////////////

  //W1D3 Q5

let prompt=require('prompt-sync')();

let age=prompt('enter the age: ');

let season=prompt('enter the season: ');

if((age<=5)&&(season==summer||season==fall)){

    console.log('The bed time is=8:30');

}

if(age>=6&&age<=12){

    if(season=='summer'){

    console.log('The bed time is=9:30')

    }else if(season=='winter'||season=='spring'||season=='fall'){

    console.log('The bed time is=8:30');    

    }

}

if(age>=13){

    if(season=='summer'){

    console.log('The bed time is=10:30');

}else if(season=='winter'||season=='spring'||season=='fall'){

    console.log('The bed time is=9:30');   

    }
}
