(function ($) {
    'use strict';

    if ($("#header").length > 0) {
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 100) {
                $("#header").css("position", "fixed");
                $("#header").css("z-index", "9999");
                $("#header").css("background", "#fff");
                $("#header").css("top", "0");
                $("#header").css("padding-top", "10px");
                $(".india").css("display", "none");
            } else {
                $("#header").css("position", "relative");
                $("#header").css("z-index", "unset");
                $("#header").css("background", "unset");
                $("#header").css("top", "unset");
                $("#header").css("padding-top", "0px");
                $(".india").css("display", "block");
            }
        });
    }
})(jQuery);



var elem = document.getElementById("myvideo");
if (elem.requestFullscreen) {
    elem.requestFullscreen();
} else if (elem.mozRequestFullScreen) {
    elem.mozRequestFullScreen();
} else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
} else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
}

;