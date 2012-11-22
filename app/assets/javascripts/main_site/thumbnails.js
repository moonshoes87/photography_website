$(document).ready(function(){
	$("li.nail").click(function(){
		var html = $(this).html();
		$("#display").html(html).addClass("image");
	    });
    });