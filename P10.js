//Write a program that finds the smallest of three numbers.

let first = 20;
let second = 30;
let third = 40 ;

//first solution
let smallest = first;

if(smallest>second) smallest=second;
if(smallest>third)  smallesy = third;
console.log(smallest);


//Second Solution
let arr = [first,second,third]
arr.sort((a,b)=>a,b);
console.log(arr[0]);


//third solution
let min=0;
if(first<=second &&first <= third){
    min = first;

}else if(second <= first && second <= third){
    min=second
}else{
    min =  third
}

//Forth solution
console.log(Math.min(first,second,third));

