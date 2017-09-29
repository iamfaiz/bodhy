$('#video-modal').on('show.bs.modal', function (e) {
    callPlayer("youtube-video-identifier", function () {
        // This function runs once the player is ready ("onYouTubePlayerReady")
        callPlayer("youtube-video-identifier", "playVideo");
    });
});

$('#video-modal').on('hidden.bs.modal', function (e) {
    callPlayer("youtube-video-identifier", function () {
        // This function runs once the player is ready ("onYouTubePlayerReady")
        callPlayer("youtube-video-identifier", "pauseVideo");
    });
});
