// Question: Write a program to print numbers from 1 to n. 
// Input: n = 5 - Output: 1 2 3 4 5

let n1 = 5
let i=1
while(i<=n1){
    console.log(i)
    i++
}


// Write a program to print numbers from m to n.
//  - Input: m = 3, n = 7 - Output: 3 4 5 6 7

let m = 3;
let n = 7 ;
while(m<=n){
    console.log(m);
    m++;
}


// Question: Write a program to print numbers in reverse from n to 1
//  - Input: n = 5 - Output: 5 4 3 2 1
let n = 5 
while(n>0){
    console.log(n)
    n-=1;
} 


// Write a program to print numbers from n to m in reverse. 
// Input: n = 10, m = 6 - Output: 10 9 8 7 6
let n1=10;
let m=6;
while(n1>=m){
    console.log(n1)
    n1--
}


//  Write a program to calculate the sum of first n natural numbers. 
//  - Input: n = 5 - Output: 15

let n=5;
let sum=0;
while(n>0){
    sum+=n;
    n--;
}
console.log(sum);

// Question: Write a program to find the factorial of a number. 
//  - Input: n = 5 - Output: 120
let x=5;
let y=1;
while(x>0){
    y*=x;
    x--;
}
console.log(y)


// Write a program to find the sum of all numbers from m to n. 
//  - Input: m = 3, n = 6 - Output: 18
let m=3;
let n=5;
let sum=0
while(n>=m){
  sum+=n;
  n--;
}
console.log(sum)

// Write a program to find the product of numbers from m to n. 
// - Input: m = 2, n = 4 - Output: 24
let x=2;
let y=4;
let z=1;
while(y>=x){
    z*=y;
    y--;
}
console.log(y);

// Write a program to print all factors of a given number. 
//  Input: n = 6 - Output: 1 2 3 6
let n=6;
let i=1
while(i<=n){
    if(n%i==0){
        console.log(i)
    }
    i++;
}

// Write a program to count how many factors a number has.
// - Input: n = 6 - Output: 4

let x=6;
let ct=0
i=1
while(i<=x){
    if(x%i==0){
        ct+=1
    }
    i++;
} 
console.log(ct)


// Check if a number is prime. 
// Input: n = 7 - Output: Prime
let n=7;
let i=1;
let ct=0;
while(i<=n){
    if(n%i==0){
        ct+=1;
    }
    i++;
}if(ct==2){
    console.log("prime");
}

//  Print all even numbers between m and n. 
//  Input: m = 3, n = 10 - Output: 4 6 8 10
let x=3;
let y=10;
while(x<=y){
    if(x%2==0){
        console.log(x);
    }
    x++;
}


// Print all odd numbers between m and n. 
//  - Input: m = 3, n = 10 - Output: 3 5 7 9
let x=3;
let y=10;
while(x<=y){
    if(x%2!=0){
        console.log(x);
    }
    x++;
}
// Count how many even and odd numbers are in the range m to n. 
// Input: m = 3, n = 7 - Output: Even = 2, Odd = 3
let m=3;
let n=7;
let ec=0;
let oc=0;
while(m<=n){
    if(m%2==0){
        ec+=1;
    }else{
        oc+=1;
    }
    m++;
}
console.log(ec,oc);


// Reverse a given string
//  - Input: “hello” - Output: “olleh”

let s="hello";
let i=s.length-1;
while(i>=0){
    console.log(s[i])
    i--;
}

// Check if a string is a palindrome. 
// Input: “madam” - Output: Palindrome
let s1="madam";
let s2=s1
let t=" ";
let j=s1.length-1;
while(j>=0){
    t+=s1[j];
    j--;
}
if(t=s2){
    console.log("is palindrome")
}


// Calculate the sum of digits of a number. 
// Input: 123 - Output: 6 
let num=123452;
let sum=0;
while(num>0){
    let digit=num%10;
    sum=sum+digit;
    num=Math.floor(num/10);
}
console.log(sum)


// Calculate the product of digits. 
// Input: 123 - Output: 6
let n=1234;
let m=1;
while(n>0){
    let digit=n%10;
    m=m+digit;
    n=Math.floor(n/10);
}
console.log(m)

//  Check if a number is an Armstrong number.
// - Input: 153 - Output: Armstrong number
let n=153;
let n2=n
let l=n.toString();
let x=l.length;
let m=0;
while(n>0){
    let digit=n%10;
    m+=(digit**x);
    n=Math.floor(n/10);
}
if(m==n2){
    console.log("is palindrome");
} else{
    console.log("not a palindrome");
}

// Reverse the digits of a number. 
// Input: 123 - Output: 321
let n1=153;
let l1=n.toString();
let x1=l1.length;
let rev=0;
while(n1>0){
    let digit=n1%10;
    rev= rev*10+digit;
    n1=Math.floor(n1/10);
}
console.log(rev)