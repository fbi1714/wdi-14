var inputNum = 15;
var outputNum = '';

  if ( inputNum % 3 === 0){
    outputNum += "Pling";
   }
   if ( inputNum % 5 === 0){
     outputNum += "Plong";
    }
    if ( inputNum % 7 === 0){
      outputNum += "Plang";
     }
    if (outputNum.length === 0 ){
        outputNum = inputNum;
    }

  console.log(outputNum);
