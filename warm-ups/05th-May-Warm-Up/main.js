// DNA is represented by an alphabet of the following symbols: 'A', 'C', 'G', and 'T'.
//
// Each symbol represents a nucleotide, which is a fancy name for the particular molecules that happen to make up a large part of DNA.
//
// Shortest intro to biochemistry EVAR:
//
// * twigs are to birds nests as
// * nucleotides are to DNA and RNA as
// * amino acids are to proteins as
// * sugar is to starch as
// * oh crap lipids
//
// I'm not going to talk about lipids because they're crazy complex.
//
// So back to nucleotides.
//
// There are 5 types of nucleotides. 4 of these occur in DNA: `A`, `C`, `G`, and `T`. 4 occur in RNA: `A`, `C`, `G`, `U`.
//
// There are no other nucleotides.
//
// Make sure that you validate it has nucleotides!
//
// Find how many of each nucleotides are in a string that you pass in to a function


var dna = {

    dnaValues: [ "A", "C", "G", "T" ],
    rnaValues: [ "A", "C", "G", "U" ],

    findNucleo: function(seque) {

        var re = /[t]/gmi;
        var str = seque.toUpperCase();
        var m;
      
        return console.log(str.length);


//         if ((m = re.exec(str)) !== null) {
//             if (m.index === re.lastIndex) {
//                 re.lastIndex++;
//             }
//             // View your result using the m-variable.
//             // eg m[0] etc.
//         }

    },


};

dna.findNucleo("ctggtctgca");
dna.findNucleo("gcgcagccgc");
