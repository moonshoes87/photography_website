// this hides everything but the first.  then it fades out the current, fades in the next, and appends the current to the end
// so that it cycles around to it.  gt: selects for greater than.  
// setInterval is a (non jquery?) function that takes two parameters: the set of actions to repeat, and the timing with which to repeat them


$(document).ready(function(){
	$("#slideshow > div:gt(0)").hide();
	setInterval(function() {
		$('#slideshow > div:first')
		    .fadeOut(1000)
		    .next()
		    .fadeIn(1000)
		    .end()
		    .appendTo('#slideshow');
	    }, 3000);
    })