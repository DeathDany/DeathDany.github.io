function palindrome(str) {

     var rep = str.replace(/\W+|_/g,"").toLowerCase();

     var revArray = rep.split("").reverse().join("");
     
     if(rep != revArray){
       return  false;
     }else{
       return  true;
     }
 
 }
 
 console.log(palindrome("eye"));