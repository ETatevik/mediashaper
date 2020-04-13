console.clear();
jQuery(function ($) {
    $(document).ready(function () {
        // ------------------------------------
        {
            try {
                var $dashOffset = $("path").css("stroke-dashoffset");

                $(window).scroll(function () {
                    var $percentageComplete = (($(window).scrollTop() / ($("html").height() - $(window).height())) * 100);
                    var $newUnit = parseInt($dashOffset, 10);
                    var $offsetUnit = $percentageComplete * ($newUnit / 100);
                    $("path").css("stroke-dashoffset", $newUnit - $offsetUnit);
                    $("polygon").css("stroke-dashoffset", $newUnit - $offsetUnit);
                });
                console.log($('.service_icon_block').offset().top) 
            } catch(e) {
                console.log(e);
            }
        }

        // projects_filter change button
        {
            var $filterBtns = $('.home_projects_filter_body > .module-border-wrap');
            $filterBtns.on('click', function(event) {
                event.preventDefault();
                $('.home_projects_filter_body > .module-border-wrap').removeClass('active');
                $(this).addClass('active');
            });
        }

        // MENU
        {
            $('.et-menu-modal').slideUp(0);
            $('.btn-nav-open').on('click', function(event) {
                event.preventDefault();
                if(!$(this).hasClass('active')){
                    $('header').addClass('dark-header');
                    $(this).addClass('active');
                    $('.et-menu-modal').slideDown(500);
                    $('body').css('overflow', 'hidden');
                }else{
                    $('header').removeClass('dark-header');
                    $(this).removeClass('active');
                    $('.et-menu-modal').slideUp(500);
                    $('body').removeAttr('style')
                }
                
            });
        }
    });
});