$(document).ready(function(){
	use_navbar();
    });


function use_navbar(){
    var $photographs = $("li#photographs");
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
