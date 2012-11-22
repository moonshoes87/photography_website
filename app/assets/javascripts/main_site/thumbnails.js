$(document).ready(function(){
	$("li.nail").click(function(){
		var html = $(this).html();
		$("#display").html(html).addClass("image");
	    });
	$("#click-back").click(function(){
		alert("you just clicked");
	    });
    });