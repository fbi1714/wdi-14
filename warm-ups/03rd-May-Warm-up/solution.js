// Warm up solution by Kane, 03rd May 2016.

var Scrabble = {

    scoreCalc: function (word){
       var totalScore = 0;
       word = word.toUpperCase();

       for(var i = 0; i < word.length ; i++){
           var thisLetter = word[i];
           var thisSum = this.letterScores[thisLetter] || 0;
           totalScore += thisSum;
       }


        return console.log(word + " has a value of " + totalScore);
    },

    letterScores: {
    "A": 1,
    "E": 1,
    "I": 1,
    "O": 1,
    "U": 1,
    "L": 1,
    "N": 1,
    "R": 1,
    "S": 1,
    "T": 1,
    "D": 2,
    "G": 2,
    "B": 3,
    "C": 3,
    "M": 3,
    "P": 3,
    "F": 4,
    "H": 4,
    "V": 4,
    "W": 4,
    "Y": 4,
    "K": 5,
    "J": 8,
    "X": 8,
    "Q": 10,
    "Z": 10
  }

}

Scrabble.scoreCalc(prompt());
