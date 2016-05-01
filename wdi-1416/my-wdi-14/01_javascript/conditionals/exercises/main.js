/*
Exercises: if/else statements
What number's bigger?

Write an if statement that tests two number (numOne and numTwo), and prints the biggest number

The World Translator

Write an if statement that writes Hello World in different languages (i.e. if the language is english, write Hello World, if the language is French write something romantic)

The Grade Assigner

Write an if statement that gives users a score (A, B, C, D, E or F) based on the test results

The Pluralizer

Write an if statement that works with a noun and a number. Make the noun plural if necessary!!

*/

//First

var numOne = 10;
var numTwo = 12;


(numOne > numTwo) ? console.log("Number One is bigger: "+ numOne) : console.log("Number Two is bigger: "+ numTwo);

if ( numOne > numTwo ){
  console.log("Number One is bigger: "+ numOne);
} else {
  console.log("Number Two is bigger: "+ numTwo);
}

//Second
var lang = "German";

if ( lang === "English"){
  console.log("Hello World");
} else if ( lang === "Brazilian Portuguese"){
  console.log("Olá Mundo");
}else if ( lang === "French"){
  console.log("Bonjour le monde");
}else if ( lang === "German"){
  console.log("Hallo Welt");
}else if ( lang === "Spanish"){
  console.log("Hola Mundo");
}else {}


//Third

var grade = "A";

if ( grade === "A"){
  console.log("Outstanding Distinction");
} else if ( grade === "B"){
  console.log("Solid Accomplishment");
}else if ( grade === "C"){
  console.log("Ordinary");
}else if ( grade === "D"){
  console.log("Passable");
}else if ( grade === "E"){
  console.log("Almost Fail");
}else if ( grade === "F"){
  console.log("Fail");
}else {}

//Fourth

var num = 10;

if (num > 0 && num <= 1) {
  console.log("noun");
} else {
  console.log("nouns");
}
