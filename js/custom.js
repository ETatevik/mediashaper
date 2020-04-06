console.clear();
jQuery(function ($) {
    $(document).ready(function () {

        var $dashOffset = $("path").css("stroke-dashoffset");

        $(window).scroll(function () {
            var $percentageComplete = (($(window).scrollTop() / ($("html").height() - $(window).height())) * 100);
            var $newUnit = parseInt($dashOffset, 10);
            var $offsetUnit = $percentageComplete * ($newUnit / 100);
            $("path").css("stroke-dashoffset", $newUnit - $offsetUnit);
            $("polygon").css("stroke-dashoffset", $newUnit - $offsetUnit);
        });
        console.log($('.service_icon_block').offset().top)

        $(window).scroll(function (event) {
            var scroll = $(window).scrollTop();
            console.log(scroll)
        });
    });
});