var Serge = {
  respondTo : function (string){

     var re = /\?/g;
     var str = re.exec(string);

     if (str !== null) {
       console.log("Sure.");
     } else if (string === undefined | string === null){
       console.log("Fine. Be that way!");
     } else if ( string === string.toUpperCase() && string !== (undefined | null)){
         console.log("Woah, chill out");
       } else {
         console.log("Whatever");
       }

  }
}

Serge.respondTo("Are you ok?");
Serge.respondTo("BRAZIL");
Serge.respondTo();
Serge.respondTo("lala");
