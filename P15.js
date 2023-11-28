//Find the number of positive divisors of a given number.

let givenNum=68;
let numArr=[];
for (let index = 1; index <= givenNum; index++) {
if(givenNum %index ==0){
    numArr.push(index)
    console.log(index);
} 
    
}
console.log("Arr list  : "+numArr);