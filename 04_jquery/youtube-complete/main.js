// # Exercise: jQuery Events & Animation

// In this exercise, you'll add code to the youtube exercise so that you can actually watch the videos on the page.

// - Start with your code from the youtube video exercise
// - In the body of your HTML, create a ` <div> ` to hold the video player, either below or to the side of the list, and give it an id.
// - In the script tag that you were working in before, create a thumbnailify() function that takes a single argument.
// - Move the code that is currently inside your each loop into that thumbnailify() function.
// - Change the contents of your function so that it uses a single argument, which is a jQuery object that represents an ` <a> `, rather than an array of elements.
// - Move the each loop so that it occurs after you define thumbnailify()
// - Call thumbnailify() from inside your each loop.
// - Make sure your player first works like it did before.
// - Now, in the thumbnailify() function, add a click listener to the link
// - In the click listener callback, you will be using the "create and store, manipulate, inject" pattern to display an embedded video in the DIV you created.
// - To find out what the code for an embedded Youtube video looks like, go to Youtube.com and find any embed code for a video.
// - You can use youtube.generateEmbedUrl() from the youtube.js library to generate an embed URL.
// - Use string concatenation, .html(), or other jQuery method of your choice to assemble and insert the embedded video element.
// - Check your work! Try all your video links. Is there anything you need to change?
// - As a bonus, try to make the video watcher <div> fade in using jQuery.
// - Make sure that you use your browser developer tools to make debugging easier while working on this. Check for errors, and use console.log() to figure out how far your code makes it, and what the values of your variables are along the way.

// **HINT**: Use the [Youtube docs](http://www.teaching-materials.org/jquery2/youtube_doc.html) to see how this stuff works

var $links = $("a");

var thumbnailify = function($link){

    var href = $link.attr('href');
    var $thumb = youtube.generateThumbnailUrl(href);
    var $a = $('<a href="' + $thumb + '" />');
    $link.append($a);

    $link.on("click", function(event){

        event.preventDefault();

        var $iframe = $("<iframe></iframe>");
        $iframe.attr("width", 420);
        $iframe.attr("height", 315);
        $iframe.attr("frameborder", 0);
        $iframe.attr("allowfullscreen", true);

         var embedURL = youtube.generateEmbedUrl( href );
         $iframe.attr("src", embedURL);


         $iframe.hide();
         $("#video").html($iframe);
         $iframe.fadeIn(300);

    });


};

$links.each(function(){
    var $currentLink = $(this);
    thumbnailify($currentLink);
});

// Exercise from the day before.
// var $newLinks = $("a");

// $newLinks.each(function( i ) {

//     var href = $(this).attr('href');
//     var $thumb = youtube.generateThumbnailUrl(href);
//     var $img = $('<img src="' + $thumb + '" />');
//     $(this).append( $img);
// });
