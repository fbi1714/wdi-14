var fixStart = function (word) {
   var firsChar = word.charAt(0);
   var copy = firstChar;

   for (var i = 1; i < word.length; i++){

     if (word.charAt(i)) === firstChar)
      copy += "*"
      else {
        copy += word.charAt(i);
      }
   }
  return copy;
}
console.log(fixStart("babble"));


// function fixStart(strl) {
//     var copy = strl.charAt(0);
//     var firstChar = strl.charAt(0);
//     for (var i = 0; i < strl.length; i++) {
//        if (strl.charAt(i) === firstChar)
//           copy += '*';
//     }
//       else {
//         copy += strl.charAt(i);
//         return copy;
//       }
// }
