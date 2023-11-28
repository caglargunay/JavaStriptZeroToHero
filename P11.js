//Print the sum of numbers between 1 and 100 that are divisible by 5

let sum = 0;

//First
for (let index = 0; index <= 100; index++) {
    if(index % 5 == 0) sum +=index;
 
}
console.log(sum);

let numbers = Array.from(Array(100).keys());
