$(document).ready(function(){
	$("h3").click(function(){
		alert("Heyo");
	    });
	$("li.nail").click(function(){
		var html = $(this).html();
		$("#display").html(html);
	    });
    });