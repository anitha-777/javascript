let y=Math.ceil(Math.random()*100);
let input=document.getElementById("input");
let result=document.getElementById("result");
let score=document.getElementById("score")
let ct=0

function guess(){
     ct++
     if(input.value==y){
         result.textContent="Yah! You'r correct";
         result.style.color="green";
         score.textContent=`No of chances:${ct}`;
         

     } else if(input.value < y){
            result.textContent="Oops it is low";
              result.style.color="red";
     } else{
            result.textContent="Ohh! its too high";
              result.style.color="red";
     }
}


 