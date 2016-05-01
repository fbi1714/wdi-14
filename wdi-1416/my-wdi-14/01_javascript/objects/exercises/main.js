var favRecipe = {
    title: "Brazilian Traditional Black Beans and Rice Recipe",
    serves: "2 plp",
    ingredients: [
    "rice",
    "black beans",
    "fry eggs",
    "salad"
    ],
  
};

console.log("Title: " + favRecipe.title);
console.log("Servings: " + favRecipe.serves);
console.log("Ingredients:");

for (var k in favRecipe.ingredients ) {
    var value = favRecipe.ingredients[k];
    console.log("\t" + value);
};

console.log("");


var readingList = [
{
    title: "The Hobbit",
    author: "J.R.R Tolkiem",
    alreadyRead: true
},
{
    title: "Lord of the Rings",
    author: "J.R.R Tolkiem",
    alreadyRead: false
}
];

for (var k in readingList){
    var book = readingList[k];
    var readMessage;

    if(book.alreadyRead){
        readMessage = "You already read ";
    } else {
        readMessage = "You still need to read ";
    }
    var message = readMessage + book.title + " by " + book.author;
    console.log(message);

}



var puff = {
    title: "Puff the Magic Dragon",
    duration: 30,
    stars: [
        "Puff",
        "Jackie",
        "Living Sneezes"
    ]
};

var zombieLand ={
    title: "ZombieLand",
    duration: 88,
    stars: [
      "Jesse Eisenberg",
      "Emma Stone",
      "Woody Harrelson"

    ]
}

var displayMovie = function (movie){
    var movieMessage = movie.title;
    movieMessage+= " lasts for " + movie.duration + " minutes. ";
    movieMessage+= "Starts: ";
    movieMessage+= movie.stars.join(", ") + ".";
    console.log(movieMessage);
};

displayMovie(puff);
displayMovie(zombieLand);
