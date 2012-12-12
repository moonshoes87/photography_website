// maybe cycle through images by appending them, like with the css code snippets slideshow 

$(document).ready(function(){
	$("li.nail").click(function(){
		var html = $(this).html();
		$("#display").html(html).addClass("image");
	    });
	$("#click-forward").on("click", function(){
		$("ul#thumbnails").append($("li.nail:lt(4)"));
	    });
	$("#click-back").click(function(){
		var last_four = $("li.nail").length - 4;
		    $("ul#thumbnails").prepend($("li.nail:gt(" + last_four + ")"));
	    });
    });