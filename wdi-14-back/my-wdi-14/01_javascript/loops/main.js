<<<<<<< HEAD
// The even/odd reporter
//
// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

for (var i = 0; i < 20; i++) {
  if ( i % 2 === 0 ) {
    console.log( i + " is even");
  }
};

// Multiplication Tables
//
// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
//
// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).
=======
// I need to have a starting point
// I need to have a condition
// I need a step (some way to make the condition evaluate to false - to end the loop)

// var count = 10; // Starting Point
// while (count > 0) { // Condition
//   console.log( count );
//
//   count -= 1; // count = count - 1; count--; //
// }
// console.log( "Lift off!" );
//
// // for ( start; condition or an end; step ) {}
// for (var count = 10; count > 0; count -= 1) {
//   console.log( count );
// }
// console.log( "Lift off!" );

// I want to have some way of saying my 9 times tables
  // I want to do that using a function called multiplyNumbers
  // 1 through to 12

// var multiplyNumbers = function ( number, factor ) {
//   var result = number * factor;
//   var message = number + " multipled by " + factor + " is " + result;
//   console.log( message );
//   return result;
// };
//
// for (var i = 1; i <= 12; i += 1) {
//   multiplyNumbers( 8, i );
// }
//
//
// for (var i = 0; i <= 1010; i += 1) {
//   console.log( i );
//   if ( i === 7 ) {
//     break; // Pause on a bad movie
//   }
// }
//
// for (var j = 1; j <= 12; j += 1) {
//   console.log( "J is now " + j );
//   for (var i = 1; i <= 12; i += 1) {
//     multiplyNumbers( j, i );
//   }
// }

var printOutLetters = function ( name ) {
  for (var i = 0; i < name.length; i += 1) {
    var currentLetter = name.charAt( i );
    console.log( "Letter " + i + " is " + currentLetter );
  }
};

printOutLetters( "Chico" );
printOutLetters( "Harpo" );
>>>>>>> 3ac5b622e1a97bd15d1e2203fd2ae348804f6407
