// Write a program to find the sum of the first n natural numbers.

let input=5
let sum=0
for(i=0;i<input;i++){
    sum+=i
}
console.log(sum)


// Print the multiplication table of a given number.

let Input1= 3;
for(i=1;i<=10;i++){
    console.log(Input1,"*",i,"=",(Input1*i))
}


// Find the factorial of a number using a loop.

let n1=5
let x=1
for(i=1;i<=n1;i++){
    x=x*i
}
console.log(x)

// Reverse a Number

let n=1234
rev=0
while(n>0){
   x=n%10
   rev=rev*10+x
   n=Math.floor(n/10)
}
console.log(rev)



// Palindrome number

let Input=121
n1=Input
rev=0
while (Input>0){
     digit=Input%10;
     rev=rev*10+digit
     Input=Math.floor(Input/10)
}
if (n1==rev){
 console.log("is Palindrome");
} else{
    console.log("is not palindrome");
}
