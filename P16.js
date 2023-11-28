//Find if the given number is prime or not.
let givenNum= 14;
isPrime=true
for (let index = 2; index < givenNum; index++) {
   if(givenNum% index == 0) isPrime=false
}
console.log("given number is prime ?  "+ isPrime);
console.log(isPrime ? givenNum + " is a prime number. ": givenNum + " is not prime number. ");