$(document).ready(function(){
	var b_o_w = black_or_white();
	$(".holder").hide();
	$("div#bg > img:gt(0)").hide();
	$("#color_button").click(function(){
		choose_which_slideshow("color");
		$("div#bg img.black_and_white:first").fadeOut(600);
		$("div#bg img.color:first").fadeIn(600);
	    });
	$("#black_and_white_button").click(function(){
		choose_which_slideshow("black_and_white");
		$("div#bg img.color:first").fadeOut(600);
		$("div#bg img.black_and_white:first").fadeIn(600);
	    });
	$("div#bg img").click(function(){
		start_slideshow();
		enter_navbar();
		$('div#bg img').unbind('click');
	    });
    });

var type = "";
var type_not = "";

function black_or_white(){
    //randomly chooses to show the black/white or color entry photo
    // something is wrong with this..... it returns undefined, not 0 or 1
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

function start_slideshow(){
    $("div#bg img:first").fadeOut(3000, function(){
	    $("div#bg img." + type_not).remove();
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

/* function start_slideshow_color(){
   $("div#bg img").fadeOut(3000);
   $(


*/

function enter_navbar(){
    $(".holder").fadeIn(1000, function(){
	    return true;
	});
}
