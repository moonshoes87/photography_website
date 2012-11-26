$(document).ready(function(){
	black_or_white();
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
}

function start_slideshow(){
    $("div#bg img").fadeOut(3000);
    setInterval(function(){
	    $("div#bg img:first")
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
