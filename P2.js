//Find the sum of the odd numbers from 50,304
let sum=0;

for (let index = 50; index < 304; index++) {
   sum += index % 2 == 1 ? index:0   
}
console.log(sum);

let sum2=0;
for (let index = 50; index < 304; index++) {
    if(index %2 ==1) sum2 +=index  
 }
 console.log(sum2);

 