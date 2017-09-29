$(document).ready(function () {
    $window = $(window);
    $videoSection = $('.section.video');
    $videoIframe = $('.youtube-iframe-main-video');
    
    $window.on('load resize', function () {
        $videoIframe.attr('height', $videoSection.height());
    });
});
