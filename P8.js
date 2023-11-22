//Calculate the factorial of numbers in this range (1-10)

arr = [1,2,3,4,5,6,7,8,9,10]


function factorial(number){
    let fac=1;
    for (let i = 1; i <= number; i++) {
       fac*=i 
    }
    return fac
}

for (let i = 0; i < 10 ; i++) {
    console.log(factorial(i));
}
