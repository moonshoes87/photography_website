$(document).ready(function(){
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

}

function enter_navbar(){
    //make it show, and slideUp()
}