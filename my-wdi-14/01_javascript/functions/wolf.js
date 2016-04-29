// I want something that can multiply any three numbers
// I want to create a result by multiplying those three numbers
// Then I want to print it out to the console

//debugger;

var multiplyThreeNumbers = function (numOne, numTwo, numThree) {
       var result = numOne * numTwo * numThree;
       console.log("The multiplication of these numbers " + " "+numOne+" "+numTwo+" "+numThree+" "+" is "+result);
       debugger;
};

multiplyThreeNumbers(2,4,5);


var someGlobalVariables = "Woohoo! Prestige World Wide";

var createANewBubble = function () {
  var someLocalVariable = "something Local";
};
