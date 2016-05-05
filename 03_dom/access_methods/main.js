console.log(document);

var bill = document.getElementById("bill");
console.log(bill);
var randomPara = document.getElementById("randomParagraph");
console.log(randomPara);


var greatMovies = document.getElementsByClassName("movie");

console.log(greatMovies)


for (var i = 0; i < greatMovies.length; i += 1){
    var movieElement = greatMovies[i];
    var currentText = movieElement.innerHTML;
    var uppercaseText = currentText.toUpperCase();

    movieElement.innerHTML = uppercaseText;
}

//     document.querySelector( cssSelector );
//     document.querySelectorAll( cssSelector );


var firstFood = document.querySelector( "ol li");

console.log( firstFood.innerHTML );

var allFoods = document.querySelectorAll( "ol li" );

console.log( allFoods );

var showYahoo = function () {

var searchLink = document.querySelector(".searchEngine");
console.log(searchLink);

searchLink.href = "http://www.yahoo.com";
searchLink.className = "bestSearchEngine";
searchLink.innerHTML = "Search with Yahoo";

searchLink.style.fontSize = "100px";

}

// CHANGING STYLE

var bodyElement = document.querySelector("body");

bodyElement.style.background = "chartreuse";
bodyElement.style.fontFamily = "monospace";
bodyElement.style.textAlign = "center";
bodyElement.style.paddingTop = "100px"

// console.log(bodyElement.style);



var emptyPage = function () {

  var bodyTag = document.querySelector( "body" );
  console.log( bodyTag.innerHTML );

  bodyTag.innerHTML = "<h1>Goodbye, cruel world</h1>";

  bodyTag.innerHTML += "<p>No soup for you</p>";

};




var bringBackTheLasagna = function () {
        // Create the element
        //
        var newHeading = document.createElement("h2");

        // Then create the text to go in the element
        var textForHeading = document.createTextNode("Greek Lasagna");
        // We style the element (if necessary)
        newHeading.style.fontFamily = "Comic Sans";
        newHeading.style.color = "rebeccapurple";

        // We put the text in the element
        newHeading.appendChild( textForHeading );
        // Then put the element on the page
        document.body.appendChild( newHeading );


};


var bringBackTheBill = function () {
//Create element
var bill = document.createElement( "img" );
//Create a random number approximately between 400 and  800
var randomSize = (Math.random()+1 ) * 400;
randomSize = Math.round(randomSize);

//Crete our image URL
var imageURL = "http://www.fillmurray.com/";
imageURL += randomSize;
imageURL += "/";
imageURL += randomSize;

bill.src = randomSize;

//style
bill.style.border = "10px dashed papayawhip";

//Put the element on the page
document.body.appendChild( bill );

};
