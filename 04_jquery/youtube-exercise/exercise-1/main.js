// Step by Step:

// Create an array of every link on the page using document.querySelectorAll(cssSelector)
// Iterate through the array. In each iteration of the loop:
// Find the current href using element.getAttribute(name), and store into a variable
// Generate a thumbnail URL using youtube.generateThumbnailUrl(videoUrl)
// Create an IMG element using document.createElement(tagName)
// Set the "src" of the IMG element using element.setAttribute(name, value)
// Append the IMG to the link using element.appendChild(element)

var $links = $("a");

$links.each(function( i ) {
//     debugger;
    var href = $(this).attr('href');
    var $thumb = youtube.generateThumbnailUrl(href);
    var $img = $('<img src="' + $thumb + '" />');
    $(this).append( $img);
});

//dfadsfj;dlkjfal;ksdjf;lkdsjf;laskdj
