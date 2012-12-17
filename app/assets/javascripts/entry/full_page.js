
// issues:
// sometimes navbar shows before page loads.  possible way to deal: call show_navbar() type function on every page, and set the default to display: none (or the invisible version, whatever)
// will people be confused, and not how to start the slideshow?  


$(document).ready(function(){
	$("body").css("background", "black");
	$(".holder").hide();
	black_or_white();
	$("#bg img").addClass("hidden");
	$("#bg img." + type + ":first").fadeIn(600).removeClass("hidden").addClass("shown")
	$("#color_button").on("click", function(){
		choose_which_slideshow("color");
		start_slideshow();
		enter_navbar();
	    });
	$("#black_and_white_button").on("click", function(){
		choose_which_slideshow("black_and_white");
		start_slideshow();
		enter_navbar();
	    });
	$("#button_holder").click(function(){
		start_slideshow();
		enter_navbar();
		$('#button_holder').unbind('click');
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

starting_slideshow = null;

function start_slideshow(){
    if (starting_slideshow === true){
	return "success";
    }
    else {
	do_slideshow();
    }
    function do_slideshow(){
	starting_slideshow = true;
	$("#bg img." + type_not + ":hidden").remove();
	// verified that this works, all the wrong ones get removed here
	$("#color_button, #black_and_white_button").fadeOut(2000);
	$("#bg img.hidden").removeClass("hidden shown").hide();
	// verified that hidden and shown are indeed removed, and display: none is set for all hidden items
	$("#bg img.shown").fadeOut(2800, function(){
		$(this).removeClass("hidden").hide();
		$("#bg img").removeClass("shown");
	    });
	
	$("#bg img:eq(1)").fadeIn(2800, function(){
		$("#bg img." + type_not).remove();
	    });
	window.setInterval(function(){
		$("#bg img:first")
		    .fadeOut(1000)
		    .next()
		    .fadeIn(1000)
		    .end()
		    .appendTo("#bg");
	    }, 2800);
	//	starting_slideshow = null;
    }
}

function enter_navbar(){
    $(".holder").fadeIn(2000, function(){
	    return true;
	});
}
