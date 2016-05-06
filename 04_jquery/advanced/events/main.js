// EXTREMAMENTE IMPORTANTE PARA ANIMACOES
//SALVAR ISSO!!!

$(document).ready(function(){



// $("h1").on("click", function(){
// });

var $newHeading = $("<h3>");

$newHeading.text("Hello Wordl")

// $newHeading.text("Hello World").css("font-size", "50px");

// $("body").apped($newHeading);

// var animateBox = function(){

//   $(".animate").animate({
//       width: "500px",
//       top: "50px"
//   },1000).animate({
//     width: "200px",
//     top: "0px"
//     }, 1000, animateBox);


// };

var animateBox = function () {
  //Set the width of this box to be 500px
  $(".animate").animate({
    width: "500px",
    top: "50px"
  }, 1000, function () {
    $(".animate").animate({
      width: "200px",
      top: "0px"
      },1000,animateBox);
    });
};


$(".pixel").on("mouseover", function(){
//     $(".pixel1").css("background", "hotpink");
//     console.log(this);
       var $currentPixel = $(this);
       $currentPixel.css("background", "hotpink");
       //For TIC TAC TOE exercise.
       $currentPixel.text("X");
});

// $("input.type").on("keypress", function(e){
//     var currentLetter = String.fromCharCode(e.keyCode);
//     console.log(currentLetter);
// });

// $(window).on("keypress", function(e){
//     var currentLetter = String.fromCharCode(e.keyCode);
//     console.log(currentLetter);
// });

$(window).on("keypress", function(e){
    var currentLetter = String.fromCharCode(e.keyCode);
    console.log(currentLetter);
    //Find and store the h2 with the class of typing
    var $h2 = $("h2.typing");
    //Store its current HTML
    var currentHTML = $h2.html();
    var newHTML = currentHTML + currentLetter;
    //I then want to add whatever the currentLetter is
    $h2.text(newHTML);
});

// $(window).on("mousemove", function(){
//     console.log("The mouse was moved.");r
// });

// $(window).on("mousemove", function(e){
//     //Create
//     var $div = $("<div>");

//     //Manipulate
//     $div.addClass("dot");
//     //Change the top and left position so
//     //that they represent where the mouse is
//     var mouseX = e.clientX;
//     var mouseY = e.clientY;

// //     $div.css("top", mouseX );
// //     $div.css("left", mouseY);

//     $div.css({
//         top: mouseY,
//         left: mouseX
//     });



//     //Inject
//     $("body").append($div);
// });




















// $(window).on("mousemove", function(e){
//     //Create a new paragraph

//     var $p = $("<p>");

//     //that shows where the mouse currently is

//     var mouseX = e.clientX;
//     var mouseY = e.clientY;

//     var message = "Mouse X: " + mouseX;
//     message += ". Mouse Y: " + mouseY;

//     console.log(message);

//     //The most recent position needs to be first.

//     $p.text(message);

//     $("body").prepend($p);


// });


// });

});
