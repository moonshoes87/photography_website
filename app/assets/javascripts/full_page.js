// you will need to make the background stuff not be "I am the header" and all


$(document).ready(function(){
	//hides all the other images
	$("div#bg > img:gt(0)").hide();
	// make navbar invisible  
	$("div#bg img").click(function(){
		start_slideshow();
		enter_navbar();
		$('div#bg img').unbind('click');
	    });

	    // make it so that when the img is clicked on, it instantiates two functions: one that starts a slideshow
	    // the other one that brings in the nav bar.  then, it needs to be unbound to prevent that happening again
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
    //make it show, and slideUp()
}