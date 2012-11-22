$(document).ready(function(){
	use_navbar();
    });


function use_navbar(){
    var $photographs = $(".contains .holder .navigation .nav li#photographs");
    $photographs.click(function(e){
            e.preventDefault();
            $(".drop").toggle();
        });
    $photographs.hover(function(){
            $(".drop").show();
        },
        function(){
            $(".drop").hide();
            //    $(".dropdown").delay().fadeOut();                                                                                         
        });
    $(".drop").hover(function(){
            $(this).show();
        },
        function(){
            $(this).hide();
        });
}
