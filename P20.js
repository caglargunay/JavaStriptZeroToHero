//Print the three largest numbers below 5000 that are divisible by 37.

let count=3
for (let index = 5000; index > 0; index--) {
    if(index%37 == 0 && count>0) {
    console.log(index);  
    count--
    }
    
    
}