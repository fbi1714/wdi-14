fTeller();
ageCalc();
lSupply();
cc();
tempConv();




//The Geometrizer
function cc(){
    console.log("The Geometrizer");
    var rc = 8;
    //C=2πr
    var circum = Math.round((2*Math.PI*rc)*100)/100;
    console.log( "\"The circumference is " + circum + "\".");
    //A=πr2
    var area = Math.round((Math.PI*(rc*rc))*100)/100;
    console.log( "\"The area is " + area + "\".");

}

//The Temperature Converter

function tempConv() {
    console.log("The Temperature Converter");
    var tempc = 36;
    var tempf = Math.round((tempc*1.8+32)*100)/100;
    console.log(tempc + "˚C is " + tempf + "°F");
    tempf = 22;
    tempc = Math.round(((tempf - 32)/1.8)*100)/100;
    console.log(tempf + "°F is " + tempc + "°C");
}

// The Lifetime Supply Calculator

function lSupply() {
    console.log("The Lifetime Supply Calculator");
    var currAge = 34;
    var maxAge= 99;
    var waterPerDay = 2;
    var days = (maxAge-currAge)*365.2425;
    var unit = " litres "
    console.log("You will need "+(days*waterPerDay)+unit+"to last you until the ripe old age of "+maxAge+".");
}

// The Age Calculator

function ageCalc() {
        console.log("The Age Calculator");
        var year = 2016;
        var birth = 1992;
        console.log("They are either "+(year-birth)+" or "+(year-(birth+1)));
}

// The Fortune Teller

function fTeller() {
          console.log("The Fortune Teller");
          var nchilds = 3;
          var partner = "John";
          var geoloc = "Brisbane";
          var jobTitle = "nurse";
          console.log("You will be a "+jobTitle+" in "+geoloc+", and married to "+partner+" with "+nchilds+" kids.");

}
