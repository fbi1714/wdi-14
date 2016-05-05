var nick = document.querySelector(".nick");
// Starting style - make sure you use units when necessary!
nick.style.top  = "0px";
nick.style.left = "0px";
nick.style.right = "0px";

var leftTimer = null;
var rightTimer = null;

var makeNickMove = function () {
      var currentLeftValue = parseFloat( nick.style.left );
      var currentRightValue = parseFloat( nick.style.right );

      if ( currentLeftValue > window.innerWidth - 201){

        var reverse = currentLeftValue;  

        if ( reverse === 0){
          return;
        } else {
          reverse-=2;
        }


      }

        var newLeftValue = currentLeftValue + 2;

        nick.style.left = newLeftValue + "px";


};

leftTimer = window.setInterval ( makeNickMove, 10 );
