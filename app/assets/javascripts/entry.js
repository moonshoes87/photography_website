$(document).ready(function(){
	entry_page_effects();
	show_page_effects();
	$("#enter img").bind({
		mouseenter: function(){
		    //add a stop other effects
		    $(this).stop().animate({opacity: 0.8}, 400);
		},
		    mouseleave: function(){
		    //add in stop
		    $(this).stop().animate({opacity: 1.0}, 700);
			}
	    })
	//	$("#enter img").bind(mouseenter, ($(this).animate({opacity: 0.8}, 2000))
	//	      $(this).animate({opacity: 1.0}, 1000)
	//	      )  bind opacity on with mouseenter, and opacity normal with mouseleave
	    })


    function hover_photo(){
     $("#enter img").animate({opacity: 0.5}, 2000);
    }

function entry_page_effects(){
    $("a#enter img").fadeIn(1000);
    $("a#enter img").click(function(event){
	    event.preventDefault();
	    $("a#enter img").fadeOut(1000, function(){
		    document.location.href = '/pages/home';
		})
		})
	}

function show_page_effects(){
    $("div.image").slideDown(1500, 'swing');
}