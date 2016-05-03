var myListOfThings = [
    "Whiskey",
    "Trump !== 'King'",
    "Boat shoes",
    "No place like ~/",
    "Dolphins",
    "Dead badgers",
    "9:32 hour moives"
];

var showMyFavouriteThings = function(starIndex, endIndex) {

    for (var i = starIndex; i < endIndex + 1; i += 1){
        var thing = myListOfThings[i];
        console.log( "Thing #" + (i+1) + ": " + thing);
    }

    console.log("And that is it!");
    console.log("");
};

showMyFavouriteThings(0,5);

var shoeIndex = myListOfThings.indexOf("Boat shoes");
var badgerIndex = myListOfThings.indexOf("Dead badgers");

showMyFavouriteThings( shoeIndex, badgerIndex);
