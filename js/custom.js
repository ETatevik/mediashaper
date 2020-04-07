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


        // home_projects_filter change button
        {
            var $filterBtns = $('.home_projects_filter_body > .module-border-wrap');
            $filterBtns.on('click', function(event) {
                event.preventDefault();
                $('.home_projects_filter_body > .module-border-wrap').removeClass('active');
                $(this).addClass('active');
            });
        }

        // home_projects_video play
        {
            var $projectsVideo = $('.home_projects_video');
            $projectsVideo.each(function(index, el) {
                var iconPlay = $('<img src="img/icon_play.png" class="video_no_play">')
                $(this).after(iconPlay)
            });
            // $projectsVideo.on('click', function(event) {
            //     event.preventDefault();
            //     $(this).next($('img')).hide(0);
            // });
        }
    });
});