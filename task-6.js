let input1=document.getElementById("input1");
let input2=document.getElementById("input2");
let input3=document.getElementById("input3");
let output=document.getElementById("output");
let x=input1.value*500
let y=input2.value*200
let z=input3.value*100
let a=x+y+z

function caluculate(){
    let x=input1.value*500
    let y=input2.value*200
    let z=input3.value*100
    let a=x+y+z
    output.textContent=`Total Amount:${a}`;
       
}