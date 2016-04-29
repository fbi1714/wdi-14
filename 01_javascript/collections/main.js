console.log("Hello!");



var weirdInstruments = [
    "Badgermin",
    "The Great Stalacpipe Organ",
    "Stylophone",
    "Ondes Martenot",
    "Sharpischord",
    "Hydraulophone",
    "Pyrophone"
];

weirdInstruments.push("Roli Seaboard");
weirdInstruments.unshift("OP1");
weirdInstruments[0]="Teenage Engineering OP1";

// for (var i = 0; i < weirdInstruments.length; i++){
//     console.log( "Instrument " + (j= i + 1) + " is the " + weirdInstruments[i]);
// };

var log = function (index, element){
    console.log( "Instrument " + (j= element + 1) + " is the " + index );
};
weirdInstruments.forEach(log);
