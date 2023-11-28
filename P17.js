////Find the average of all numbers between 50 and 500 whose ones digit is 6

let sum =0;
let avg=0;
let count=0;

for (let index = 50; index <= 500; index++) {
 if(index % 10 == 6){
    sum +=index
    count++
 } 
    
}
avg= sum/count
console.log(avg);
