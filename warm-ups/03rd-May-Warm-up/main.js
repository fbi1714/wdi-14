var letterGame = {

    letterValue: function(food){

        var s = food;
        var count = 0;


        for (var i = 0; i < s.length; i++) {

            var curChar = s.charAt(i);
            var vowels = /[aeioulnrst]/i;
            var dg = /[dg]/i;
            var bcmp = /[bcmp]/i;
            var fhvwy = /[fhvwy]/i;
            var k = /[k]/i;
            var jx = /[jx]/i;
            var qz = /[qz]/i;

            if(vowels.exec(curChar) !== null){
                count++;
            } else if (dg.exec(curChar) !== null){
                count += 2;
            } else if (bcmp.exec(curChar) !== null){
                count +=3;
            } else if (fhvwy.exec(curChar) !== null){
                count +=4;
            } else if (k.exec(curChar) !== null){
                count +=5;
            } else if (jx.exec(curChar) !== null){
                count +=8;
            } else if (qz.exec(curChar) !== null){
                count +=10;
            } else {
                return console.log("This word is not valid.");
            }

        }
        return console.log( '\"' + food.toUpperCase() + '\"' + " has a value of " + count);;
    }
}

letterGame.letterValue(prompt());
