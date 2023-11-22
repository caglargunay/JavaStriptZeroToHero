//Find the sum of the all integers of an array
let arr= [1,2,3,4,5,6,7,8,9];
let sum=0

//first solution
for ( a of arr)  sum+=a  
console.log(sum)

//second solution
let sum2=0
arr.forEach(i=>sum2+=i)
console.log(sum2); 

//third solution
let sum3= arr.reduce((acc,currentvalue)=> acc+currentvalue,0)
console.log(sum3);