$(document).ready(function(){
	$(".holder").hide();
	$("div#bg > img:gt(0)").hide();
	$("div#bg img").click(function(){
		start_slideshow();
		enter_navbar();
		$('div#bg img').unbind('click');
	    });
    });


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
    $(".holder").fadeIn(500, function(){
	    return true;
	});
}
