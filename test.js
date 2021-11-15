function add7(b){
  b +=7;
  return b;
}

let c =add7(12)
console.log(c);
function multiply(a,b){
  var produit = a*b;
  return produit;

}
console.log(multiply(12, 2)); 
function capitalize(string){

  string = string.charAt(0).toUpperCase() + string.slice(1).toLowerCase() ;
  return string;

} 
console.log(capitalize("bonjour"));
function last(string){
  let nb = string.length;
  string = string.slice(nb-1);
  return string;
}
console.log("La dernière lettre est "+last("bonjour"));
const prompt = require("prompt-sync")();
let answer = parseInt(
  prompt("Please enter the number you would like to FizzBuzz up to: ")
);

for (let i = 1; i <= answer; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

