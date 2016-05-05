//Exercise 1
// Add a script tag to the bottom.
// (In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".
// (In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.
// Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.

var newBody = function (){


    var bodyTag = document.querySelector( "body" );
//     console.log( bodyTag.innerHTML );
    bodyTag.style.fontFamily = "Arial, sans-serif";

};

var newSpan = function(){

    var nickName = document.getElementById("nickname");
    nickName.innerHTML="Fabio";

    var favorites = document.getElementById("favorites");
    favorites.innerHTML="Madeon";

    var hometown = document.getElementById("hometown");
    hometown.innerHTML="Caxias do Sul";


}

var newLi = document.querySelectorAll("ul li");

console.log(newLi);


for (var i = 0; i < newLi.length; i += 1){
    var liElement = newLi[i];
    var newClassName = liElement.className="listItem";
//     var newStyle = newClassName.style.fo

}

// Create a new img element and set its src attribute to a picture of you. Append that element to the page.

var newImg = function () {
        // Create the element
        var newI = document.createElement("img");
        newI.src = "http://www.fillmurray.com/400/400"
        document.body.appendChild( newI );


};

var books = [
  {
    title: 'The Design of EveryDay Things',
    author: 'Don Norman',
    alreadyRead: false
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true
  }
];
