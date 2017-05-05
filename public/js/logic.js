$(document).ready(function(){
    console.log('test');
});

$(document).ready(function () {
    'use strict';

    /* HOVER */
    var color;

    $("#dartboard #areas g").children().hover(
    	function(){
            color = $(this).css('fill');

            switch (color) {
                case 'rgb(237, 55, 55)':
                    $(this).css("fill","rgb(171,40,40)");
                    break;
                case 'rgb(79, 153, 98)':
                    $(this).css("fill","rgb(53,102,65)");
                    break;
                default:
                    break;
            }

            $("#dartboard #areas g").children().not($(this)).css('opacity', '0.4');
    	},
    	function(){
            switch (color) {
                case 'rgb(237, 55, 55)':
                    $(this).css("fill","rgb(237,55,55)");
                    break;
                case 'rgb(79, 153, 98)':
                    $(this).css("fill","rgb(79, 153, 98)");
                    break;
                default:
                    break;
            }

            $("#dartboard #areas g").children().not($(this)).css('opacity', '1');
    	}
    );

    /* CLICK */
    $("#dartboard #areas g").children().click(function(){
        alert($(this).attr("id"));
    });
});
