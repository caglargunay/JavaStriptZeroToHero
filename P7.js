//Find the average of an integer array;
let arr = [1,2,3,4,5,6,7,8,9,12,114,41];

//First Solution
let sum=0;
arr.forEach(i=>sum+=i)
console.log(sum/arr.length);


//Second
let sum2=0;
for (each of arr) {
    sum2 += each    
}
console.log(Math.round(sum2/arr.length));
