// Check Even or Odd
// Question: Determine whether a number is even or odd. 
// - Input: Number = 6 - Output: Even number

let n=6;
if(n%2==0){
    console.log("Even number");
} else{
    console.log("Odd number");
}

// Divisible by 5 but Not by 10
// Question: Check if a number is divisible by 5 but not by 10. 
// Input: Number = 25 - Output: Satisfy 

let a=25;
if(a%5==0 && a%10!=0){
   console.log("Satisfy");
} else{
    console.log("not satisfy");
}

// Biggest Among Two Numbers
// Question: Find the biggest number among two. 
// - Input: A = 4, B = 7 - Output: Biggest is: 7

let A=4;
let B=7;
if(A>B){
    console.log("biggest is:",A);
} else{
    console.log("biggest is:",B);
}

// Smallest Among Two Numbers
// Question: Find the smallest number among two. 
// - Input: A = 4, B = 7 - Output: Smallest is: 4
let n1 = 4;
let n2 = 7;
if(n1<n2){
    console.log("smallest is:",n1);
}else{
    console.log("smallest is:",n2);
}


// Check if a number is divisible by 2, 3, and 6. 
// - Input: Number = 18 - Output: Satisfy

m=18
if(m%2==0){
    if(m%2==0){
        if(m%6==0){
            console.log("satisy");
        }
        else{
            console.log("not satisfy");
        }
    }
}
