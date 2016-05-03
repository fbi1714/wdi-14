var bookSeries = {
    name: "In Search of Lost Time",
    author: "Marcel Proust",
    books: [
    "Swann's Way",
    "In the Shadow of Young Girls in Flower",
    "The Guermantes Way",
    "Sodom and Gomorrah",
    "The Prisoner",
    "The Fugitive",
    "Time Regained"
    ],
    showRating: function() {
        console.log("5 out of 5");
    }

};

// var explorer = {
//     firstName: "Jacques",
//     lastName: "Cousteau",
//     displayFullName: function() {

//         var message = this.firstName + " " + this.lastName;
//         console.log(message);
//     }
// };


var students = [
{
    name: "John"
},
{
    name: "Miranda"
},
{
    name: "Billy"
}
];

for (var k in students) {
    console.log(students[k].name);
}
;

var explorer ={
    firstName: "Jacques",
    lastName: "Cousteau",
    displayFullName: function() {
        var fullName = this.firstName + " " + this.lastName;
        return fullName;
    },
    talkTo: function(name) {
        var greeting = this.firstName + " says hi to " + name;
        return greeting;
     }
};

explorer.displayFullName();
