let image= document.getElementById("image");
let warning=document.getElementById("warning");
image.style.width="120px";
count=120;

function inc(){
    
    if(count<=300){
        count+=10
        image.style.width=count+"px";
        warning.textContent=" "

    }else{
         warning.textContent="Oh! size is very high";
         warning.style.color="red";
    }
}

function dec(){ 
 
    if(count>=80){
        count-=10
        image.style.width=count+"px";
        warning.textContent=" "


    }else{
         warning.textContent="Oops size is too low";
         warning.style.color="red";
    }
}