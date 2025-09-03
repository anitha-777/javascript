let input=document.getElementById("input");
let result=document.getElementById("result");


function cars_required(){
    let v =Math.ceil(input.value/5);
    result.textContent= `Cars required is:  ${v}`;
} 