var nucleotide = {

    singleLetterCheck: function( word, nucleotide ) {

    word = word.toUpperCase();
    nucleotide = nucleotide.toUpperCase();
    var returnValue = 0;

    for( var i=0; i < word.length; i++) {

        if( word[i] === nucleotide ) {
            returnValue ++;
        }

    }
    return returnValue;
},

    nucleoTideCheck: function( word ) {
        var nucleoTideCheckList = {
            "A": this.singleLetterCheck( word, "A" ),
            "C": this.singleLetterCheck( word, "C"),
            "G": this.singleLetterCheck( word, "G"),
            "U": this.singleLetterCheck( word, "U"),
            "T": this.singleLetterCheck( word, "T")
        }
        return nucleoTideCheckList;
    }
}

nucleotide.nucleoTideCheck( "ACGTU", "A" );
