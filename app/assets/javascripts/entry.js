$(document).ready(function(){
	$("a#enter img").fadeIn(1500);
	$("a#enter img").click(function(event){
		event.preventDefault();
		$("a#enter img").fadeOut(1000, function(){
			document.location.href = '/pages/home';
			    })
		    })
	    })
		//$(this).fadeOut(1000);
     