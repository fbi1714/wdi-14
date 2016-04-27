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

var musicQuality = "bad";
var speakerQuality = "Good";

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
