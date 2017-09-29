function playVideo()
{
    callPlayer("youtube-iframe-container", function () {
        callPlayer("youtube-iframe-container", "playVideo");
    });

    $('.youtube-iframe-main-video').css('visibility', 'visible');
}

function pauseVideo()
{
    callPlayer("youtube-iframe-container", function () {
        callPlayer("youtube-iframe-container", "pauseVideo");
    });

    $('.youtube-iframe-main-video').css('visibility', 'hidden');
}

var $window = $(window);
var $videoSection = $('.section.video');
var playing = false;

$window.on('scroll', function () {
    if (($window.scrollTop() > ($videoSection.offset().top-100)) && ($window.scrollTop() < $videoSection.offset().top+$videoSection.height()) ) {
        if (! playing) {
            playing = true;
            playVideo();
        }
    } else {
        if ( playing) {
            playing = false;
            pauseVideo();
        }
    }
});