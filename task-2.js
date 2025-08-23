// Voting Eligibility
// Question: Check if a person is eligible to vote (age >= 18). 
//  Input: Age = 19 - Output: Eligible to vote

let age=19;
if(age>18){
    console.log("eligible");
} else{
    console.log("not eligible");
}

// Student Pass/Fail Based on All Subjects >= 35
// Question: Check if a student passed all subjects (maths, physics, chemistry)
// Input: Maths = 40, Physics = 36, Chemistry = 30 - Output: Fail
let Maths_1 = 40;
let Physics_1 = 36;
let Chemistry_1 = 30;
if (Maths_1>=35){
    if(Physics_1>=35){
        if(Chemistry_1 >35){
           console.log("Pass");
        }
        else{
            console.log("Fail");
        }
    }
 }

// Student Pass if Passed Any One Subject (>= 35)
// Question: Check if the student passed at least one subject. 
// - Input: Maths = 20, Physics = 38, Chemistry = 25 - Output: Pass

let Maths1 = 20;
let Physics1 = 38;
let Chemistry1 = 25;
if(Maths1>=35 || Physics1>=35 || Chemistry1>=35){
    console.log("pass");
} 
else{
    console.log("Fail");
}

// Student Pass if Passed Any Two Subjects
// Question: Check if the student passed any two out of three subjects. 
// Input: Maths = 40, Physics = 20, Chemistry = 36 - Output: Pass
let Maths = 40;
let Physics = 20;
let Chemistry = 36;
if(Maths>=35 && Physics>=35){
 console.log("pass");
} else if(Maths>=35 && Chemistry >=35){
    console.log("pass");
} else if(Physics>=35 && Chemistry >=35){
    console.log("pass");
}else{
    console.log("fail");
} 

// Biggest Among Three Numbers
// Question: Find the biggest number among three. 
// Input: A = 7, B = 4, C = 9 - Output: Biggest is: 9
let A = 7;
let B = 4;
let C = 9;
if(A>B){
    if(A>C){
        console.log("Biggest :",A);
    }else if(B>A && B>C){
        console.log("Biggest :",B);
    }else{
        console.log("Biggest is:",C);
    }
}

