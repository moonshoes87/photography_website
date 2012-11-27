$(document).ready(function(){
	var b_o_w = black_or_white();
	$(".holder").hide();
	$("div#bg > img:gt(0)").hide();
	$("div#bg img").click(function(){
		start_slideshow();
		enter_navbar();
		$('div#bg img').unbind('click');
	    });
    });


function black_or_white(){
    //randomly chooses to show the black/white or color entry photo
    // something is wrong with this..... it returns undefined, not 0 or 1
    var number= Math.floor(Math.random() * 2);
    if(number ===1){
	return "black_and_white"
    }
    else{
	return "color"
    }
}


var type = "color";
var type_not = "black_and_white"
function start_slideshow(){
    // probably just add $("div#bg img.color"), or $("div#bg img.black_and_white") and proceed thusly
    $("div#bg img").fadeOut(3000)
	// you need to make whats below not occur until what's above is done.  doesn't work as a callback of fadeOut, nor with a delay
	$("div#bg img." + type_not).delay(3000).hide();
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
