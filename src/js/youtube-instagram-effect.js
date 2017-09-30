var $window = $(window);
var $videoSection = $('.section.video');
var playing = false;
var $youtubeIframeMainVideo = $('.youtube-iframe-main-video');

function playVideo()
{
    callPlayer("youtube-iframe-container", function () {
        callPlayer("youtube-iframe-container", "playVideo");
    });

    $youtubeIframeMainVideo.css('visibility', 'visible');
    $videoSection.addClass('playing');
}

function pauseVideo()
{
    callPlayer("youtube-iframe-container", function () {
        callPlayer("youtube-iframe-container", "pauseVideo");
    });

    $youtubeIframeMainVideo.css('visibility', 'hidden');
    $videoSection.removeClass('playing');
}


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
