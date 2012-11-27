// issues:
// sometimes navbar shows before page loads
// will people be confused, and not how to start the slideshow?  

$(document).ready(function(){
	$(".holder").hide();
	black_or_white();
	$("div#bg > img").hide();
	$("div#bg img." + type + ":first").fadeIn(600);
	$("#color_button").on("click", function(){
		choose_which_slideshow("color");
		$("div#bg img.black_and_white:first").fadeOut(600);
		$("div#bg img.color:first").fadeIn(600);
	    });
	$("#black_and_white_button").on("click", function(){
		choose_which_slideshow("black_and_white");
		$("div#bg img.color:first").fadeOut(600);
		$("div#bg img.black_and_white:first").fadeIn(600);
	    });
	$("div#bg img").click(function(){
		start_slideshow();
		//$("#color_button, #black_and_white_button").hide();
		enter_navbar();
		$('div#bg img').unbind('click');
	    });
    });

var type = "";
var type_not = "";

function black_or_white(){
    var number= Math.floor(Math.random() * 2);
    if(number ===1){
	type = "black_and_white";
	type_not = "color";
    }
    else{
	type = "color";
	type_not = "black_and_white";
    }
}

function choose_which_slideshow(input){
    if(input === "color"){
	type = "color";
	type_not = "black_and_white";
    }
    else if(input === "black_and_white"){
	type = "black_and_white";
	type_not = "color";
    }
    else{
	alert("error");
    }
}

// consider adding in a way to stop any previous slideshowing.  i.e., fetching_flights = null or whatever.  
// or, you can just remove the imgs that are not of the proper type, and make the buttons disappear.  
// right now, it is buggy.  

function start_slideshow(){
    $("div#bg img." + type + ":first").fadeOut(1000, function(){
	    $("div#bg img." + type_not).hide(); // remove()
	});
    setInterval(function(){
	    $("div#bg img." + type + ":first")
		.fadeOut(1000)
		.next()
		.fadeIn(1000)
		.end()
		.appendTo("#bg");
	}, 3000);
}

function enter_navbar(){
    $(".holder").fadeIn(1000, function(){
	    return true;
	});
}
