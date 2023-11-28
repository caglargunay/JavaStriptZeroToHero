//Convert all upper case letters to lower case and all lower case letters to upper case in the given string "WhAt Is thE mATter?"
let str = "WhAt Is thE mATter?"

let newStr ="";
for (let index = 0; index < str.length; index++) {

let eachLetter = str.charAt(index);

if(eachLetter.toLowerCase() == eachLetter){
    newStr += eachLetter.toUpperCase();
}else{
    newStr += eachLetter.toLowerCase();
}

}
console.log(newStr);

//second solution
let newText="";

for (let i = 0; i < str.length; i++) {
    let each=str.charAt(i);
   newText += (each.toLowerCase()==each) ? each.toUpperCase() : each.toLowerCase();
}
console.log(newText);