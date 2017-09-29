$(document).ready(function () {
    var $window = $(window);
    var $backToTopBtn = $('#back-to-top-button');
    var shown = false;
    
    $window.on('load scroll', function () {
        if (($window.scrollTop() > 500)) {
            if (!shown) {
                shown = true;
                $backToTopBtn.show();
            }
        } else {
            if (shown) {
                shown = false;
                $backToTopBtn.hide();
            }
        }
    });
});
