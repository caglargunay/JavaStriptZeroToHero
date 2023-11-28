//Find the sum of digits of a given four-digit number .
let num = 1934;
let sum = 0;
while(num > 0){
     sum += num%10;
   num= Math.floor (num/=10);
}
console.log(sum);