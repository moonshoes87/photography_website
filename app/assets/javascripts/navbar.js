$(document).ready(function(){
	use_navbar();
    });


function use_navbar(){
    var $photographs = $(".holder .navigation .nav li:eq(2)");
    $photographs.click(function(e){
	    e.preventDefault();
	    $(".dropdown").toggle();
	});
    $photographs.hover(function(){
	    $(".dropdown").show();
	},
	function(){
	    $(".dropdown").hide();
	    //    $(".dropdown").delay().fadeOut();                                                                                         
	});
    $(".dropdown").hover(function(){
	    $(this).show();
	},
	function(){
	    $(this).hide();
	});
}
   
