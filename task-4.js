let text=document.getElementById("number");
let bt1=document.getElementById("bt1");
let bt2=document.getElementById("bt2");
let bt3=document.getElementById("bt3");

let c=0;
function inc(){
    c++
    text.textContent=c;
}

function reset(){
    c=0
    text.textContent=c;
}

function dec(){  
    if(c>0) {
      c--;
      text.textContent=c;
    }
}



 