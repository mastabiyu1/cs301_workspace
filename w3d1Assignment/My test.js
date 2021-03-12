         //disable-eslint 
// function suffix(str1,str2){
//     str1=str1.split("");
//     str2=str2.split("");
//     let suff = [];
//        for(let i=str1.length-1;i>0;i--){
//            for(let j=str2.length-1;j>0;j--){
//                 if(str1[i]===str2[j]){
//                     suff[i]=str1[i];
//                 }
//            }
//        }
//    return suff;
//     }
//    console.log(suffix("swimming","drining"));
function countProperties(student){
    let count=0;
     // eslint-disable-next-line id-length
     for ( properties in student){
            count++;
     }
     return count;
   }

student={
 name:"abcd",
 age:84,
 id:12,
 department:"msd",
};
console.log(countProperties(student));