// console.log("hi");

var myButton = document.getElementById("myTestButton");

//someElement.addEventListener(typeOfEvent, whatToDo);

//someElement.addEventListener(Event, CallBack Function);

myButton.addEventListener("click", function () {
    console.log("The button was clicked");
});


var myHeading = document.querySelector("h1");

var myCallBack = function () {
  console.log("The heading was clicked");
};
myHeading.addEventListener("click", myCallBack);
myHeading.removeEventListener("click", myCallBack);

var bill = document.querySelector("img");

var anotherCallback = function (event ) {
  console.log(event);
  var newParagraph = document.createElement("p");
  var paragraphText = document.createTextNode("Missed Call: Bill Murray at " + (event.timeStamp).toFixed(2) );

  newParagraph.appendChild( paragraphText );
  document.body.appendChild( newParagraph );
};

bill.addEventListener("click",anotherCallback);


var thisShouldHappenRegularly = function () {
  console.log("This just happened. But that is the wrong this");
};

// window.setInterval( whatToDo, delay );

// window.setInterval( thisShouldHappenRegularly , 100 );


var thisShouldBeDelayed = function () {
  console.log("This should happen a little while after the page is loaded" );
}

// window.setTimeout(whatToDo, delay);
window.setTimeout( thisShouldBeDelayed, 1000 );
