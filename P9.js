//Find the largest of number of an array
let arr = [1,1232,3,45,5,6,557,8,9,12,114,41];

//first
let highest=arr[0]
for (each of arr) {
    if(highest<each) highest=each
}
console.log(highest);

//second
arr.sort((a,b)=>a-b);
console.log(arr[arr.length-1]);
