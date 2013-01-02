// maybe cycle through images by appending them, like with the css code snippets slideshow 

var photos_shown = [];

$(document).ready(function(){
    var last_five = $("li.nail").length - 6;
        landscapes_vs_portraits();
	$("li.nail:gt(4)").hide();
	$("li.nail").click(function(){
		var html = $(this).html();
		$("#display").html(html).addClass("image");
	    // this removes the screen
	        $("#display").css('background', 'none');
	    });
	$("#click-forward").on("click", function(){
	    $("li.nail").css("margin-left", 0)
	    $("ul#thumbnails > li").css("margin-left", 0);
	    $("ul#thumbnails").append($("li.nail:lt(5)"));
	    $("li.nail:lt(5)").show();
	    $("li.nail:gt(4)").hide();
	    landscapes_vs_portraits();
	    // ADD THIS NEXT.  Maybe use the slide function to 
	});
    $("#click-back").click(function(){
	$("li.nail").css("margin-left", 0);
	console.log("var: " + last_five);
	$("ul#thumbnails").prepend($("li.nail:gt(" + last_five + ")"));
	$("li.nail:lt(5)").show();
	$("li.nail:gt(4)").hide();
	landscapes_vs_portraits();
    });
    
      function landscapes_vs_portraits(){
	console.log("landscapes_vs_portraits was called");
	    //make this get called so that the landscape and portrait variables get reset each time the clicking happens
	    var landscapes = 0;
	    var portraits = 0;
	    var photo_array = $("li.nail img");
            photos_shown = photo_array.slice(0,5);
	    function figure(){
	    for (i=0; i < 5; i++){
		if ($(photos_shown[i]).hasClass("portrait")){
		    portraits += 1;
		}
		else {
		    landscapes += 1;
		}
	    }
	}
	    figure();
	    console.log("Portraits:" + portraits + " and Landscapes: " + landscapes);
	    var landscapes_width = landscapes * 100;
	    var portraits_width = portraits * 70;
	    var total_padding = 18;
	    var how_many_photos = landscapes + portraits;
	    var total_width = landscapes_width + portraits_width + total_padding;
	    var necessary_margin = (600 - total_width) / 2;
	    console.log("Landscapes width: " + landscapes_width + ". Portraits width: " + portraits_width);
	    console.log("total width: " + total_width);
	    console.log("necessary margin: " + necessary_margin)
	    $("#thumbnails li:first-child").css("margin-left", necessary_margin + "px");
            landscapes = 0;
	    portraits = 0;
	};
    });
/*

var how_many_photos = landscapes + portraits;

var total_padding = 4 * how_many_photos - 4;
*/

    // the ul is 600 px wide.  the landscapes are 100px wide.  padding for li is 2px (all sides)


//  use addClass("hidden") and "shown"
// var portraits = $(".portrait li").length()  (?? maybe .count or something)
// var landscapes = $("li").length - portraits
