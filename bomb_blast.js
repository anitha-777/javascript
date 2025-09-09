let timer=document.getElementById("timer");
let image=document.getElementById("image");
let message=document.getElementById("message");
let heading=document.getElementById("heading");
let ct=10;
let width="200px";
let height="300px";

let time=setInterval(function(){
   heading.textContent="Bomb blast";
   ct--
   timer.textContent="Timer :"+ct;
   if(ct<=3){  
    timer.style.color="red";
    heading.textContent="Oops! ⏳Deadline is approaching... are you ready?";

   }
   if(ct==5){
      image.style.width="300px";
      image.style.height="300px";
      image.src="https://cdn.pixabay.com/photo/2018/12/31/19/06/smiley-3905722_1280.png";
   }
   if(ct==0){
    image.style.width="500px";
    image.style.height="400px";
    heading.textContent=" ";
    image.src="https://img.freepik.com/free-vector/word-bang-comic-cloud_1308-54587.jpg?semt=ais_hybrid&w=740&q=80"
     clearInterval(time);
   }
   },1000)




