var age = {
    ageCalc: function (milsec){
          var earth = (milsec * 0.0000000317);
          var mercury = (milsec * 0.0000000317)* 0.2408467 ;
          var venus = (milsec * 0.0000000317)* 0.61519726 ;
          var mars = (milsec * 0.0000000317)* 1.8808158 ;
          var jupiter = (milsec * 0.0000000317)*11.862615 ;
          var saturn = (milsec * 0.0000000317)* 29.447498 ;
          var uranus = (milsec * 0.0000000317)* 84.016846 ;
          var neptune = (milsec * 0.0000000317)* 164.79132 ;
          return console.log("Earth year: " + earth + " Mercury " + mercury + " Venus " + venus + " Mars " + mars + " Jupiter " + jupiter);
    }
};


age.ageCalc(1031000000);
