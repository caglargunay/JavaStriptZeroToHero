//Check if given string variable starts with "a" and has less than five characters (output must be true or false)

//first solution
let givenText="asad"
console.log(givenText.startsWith("a")&& givenText.length<5);


//second solution
let checkText =  text => (text.startsWith("a") && text.length < 5)
console.log(checkText("sadklad"));

console.log(checkText("sdlkasd"));






