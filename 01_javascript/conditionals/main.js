<<<<<<< HEAD
// debugger;
console.log("Hello World");
if(true){
  console.log("Yep, this runs");
}
if (2===2){
  console.log("If you weren't sure, 2 is equal to 2");
}
if(3==2){
  console.log("Wait, what?");
} else {
  console.log("That did seem silly");
}
if (5>-4){
  console.log(" 5 greater than 4 ");

} else {
  console.log(" 4 greater than 5" );
}
var myName = "Wolf";

if(myName==="Wolf"){
  console.log("Howl");
} else {
  console.log("It seem I am a bear");
}
if(2+2 === 4){
  console.log("You mathed");
}
if(myName.length === 4){
  console.log("4 letters long");
}

if( 2 === 2 && 3 === 3){
 console.log("JavaScript math isn't that bad");
}
if( 2 === 2 || 5 === 3){
 console.log("Now");
}
var occupation = "Teacher";

if( myName === "Wolf" && occupation === "Clown"){
  console.log("Wolf: clown");
}else {
  console.log("You're someting else, and not in a good way");
}
=======
// // if () {}
// // debugger;
//
// if ( true ) {
//   console.log( "Yep, this runs" );
// }
//
// if ( 2 === 2 ) {
//   console.log( "If you weren't sure, 2 is equal to 2" );
// }
//
// if ( 3 === 2 ) {
//   console.log( "Wait, what?" );
// } else {
//   console.log( "That did seem silly" );
// }
//
// if ( 5 >= 4 ) {
//   console.log( "5 greater than 4" );
// } else {
//   console.log( "4 greater than 5" );
// }
//
// var myName = "Wolf";
// if ( myName === "Wolf" ) {
//   console.log( "Howl" );
// } else {
//   console.log( "It seems I am a bear" );
// }
//
// if ( myName.length === 4 ) {
//   console.log( "4 letters long" );
// }
//
// if ( 2 + 2 === 4 ) {
//   console.log( "You done mathed up" );
// }
//
// if ( 2 !== 4 ) {
//   console.log( "Of course it isn't" );
// }
//
// if ( 2 === 2 && 3 === 3 ) {
//   console.log( "JavaScript math isn't that bad" );
// }
//
// if ( 2 === 2 || 5 === 3 ) {
//   console.log( "Wow" );
// }
//
// var wallet = "$$$";
// var money;
// if (wallet === "$$$" && money ) {
//   console.log( "Go get a mcflurry" );
// }

if ( 3 === 3 ) {
  console.log( "Weird" );
} else if ( 3 === 3 ) {
  console.log( "Not weird" );
}

var myName = "Wolf";
var occupation = "Teacher";

if ( myName === "Wolf" && occupation === "Garbageman" ) {
  console.log( "Wolf: garbage man" );
} else if ( myName === "Wolf" && occupation === "Clown" ) {
  console.log( "Wolf: clown" );
} else {
  console.log( "You're something else, and not in a good way" );
}

// musicQuality "Good" "bad", speakers "Good" "bad"
>>>>>>> 3ac5b622e1a97bd15d1e2203fd2ae348804f6407

var musicQuality = "bad";
var speakerQuality = "Good";

<<<<<<< HEAD
// if the quality of both the music and the speakers are good
// say play this loud

if (musicQuality === "Good" && speakerQuality === "Good"){
  console.log("Play this loud");
}

// if the quality of the music is good and the speakers are bad
// say play this quietly

else if (musicQuality === "Good" && speakerQuality === "bad"){
    console.log("Play this quietly");
}

else if (musicQuality === "bad" && speakerQuality === "Good") {
      console.log("Pick a new song");
} else {
    console.log("Don't play it at all");
}
=======
// if the quality of both the music or the speakers are good
//   say play this loud

if ( musicQuality === "Good" && speakerQuality === "Good" ) {
  console.log( "Play this loud" );
} else if ( musicQuality === "Good" && speakerQuality === "bad" ) {
  console.log( "Play this quietly" );
} else if ( musicQuality === "bad" && speakerQuality === "Good" ) {
  console.log( "Pick a new song" );
} else {
  console.log( "No music. Sweet, sweet silence" );
}

// if the quality of the music is good and the speakers are bad
//   say play this quietly
// if the quality of both the music and the speakers are bad
//   say don't play it at all
>>>>>>> 3ac5b622e1a97bd15d1e2203fd2ae348804f6407
