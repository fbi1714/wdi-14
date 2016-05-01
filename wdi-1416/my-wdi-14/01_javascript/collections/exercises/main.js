var choices = ["Sydney", "Italian", "Green", "Summer", "Sunny"];

var conditions = function (element , index){


    if (element === "movie"){
        console.log("My " + index + " Satantango");
    } else {
        console.log("My #" + ((index+1)) + " choice, " + element);
    }
};


choices.forEach(conditions);
