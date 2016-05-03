//Serge
//
//Serge.respondTo("Input");
//
//Serge.question => Sure
//
//Serge LOUD => Chill out
//
//Serge Silent => Be that way then
//Serge anything => Whatever
//
//small functions

Serge = {
  respondTo: function(userInput){
    if (Serge.isQuestion(userInput)){
        console.log("Sure.");
    } else if (Serge.isSilent(userInput)) {
        console.log("Be that way then?");
    }else if (Serge.isLoud) {
        console.log("");
    }else if (Serge.isLoud(userInput)) {
      console.log("Whoa, chill out.");
    }else {
      console.log("Whatever");
    }
  },

  isQuestion: function (userInput) {
      return (userInput.trim().endsWith("?") === true);
  },

  isLoud: function (userInput) {
    return (userInput === userInput.toUpperCase());
  },

  isSilent: function (userInput) {
      return (userInput.trim() === "");
  }

}

Serge.respondTo("Question?");
Serge.respondTo("LOUD");
Serge.respondTo("");
Serge.respondTo("Anything");
