// var $aTag = $("a");
//
// //New paragraph
// var $p = $("<p>");
// //Put some text in it
// $p.text("Here is some random stuff");
// $p.css({
//   "color": "gainsboro",
//   "text-decoration": "underline",
//   "text-transform": "uppercase",
//   "font-size": "60px"
// });
// $("body").append( $p );
//$("body").prepend( $p ); //Only accpets this once per element.

var $allParagraphs = $("p");

for (var i = 0; i < $allParagraphs.length; i++) {
    var currentParagraph = $allParagraphs[i];
    var $currentParagraph = $(currentParagraph);
    $currentParagraph.html ( "Paragraph " + i );
};

for (var i = 0; i < $allParagraphs.length; i++) {
  var $currentParagraph = $allParagraphs.eq(i);
  var currentHTML = $currentParagraph.html();
  $currentParagraph.html( currentHTML += " woooo ");
};

//I want to change some styles
//color: gainsboro
//text-decoration: underline
//text-transform: uppercase
//I want to actually put it on the page
//I want to actually put it on the page

$allParagraphs.each(function (i ) {

   $(this).html("This is awesome now " + i );

});
