// Load jQuery on the page.
window.jQuery = $ = require('jquery');

// Load popper.js (a dependency of bootstrap 4).
window.Popper = require('popper.js');

// Load bootstrap's blank plugin file.
require('bootstrap');

// Load bootstrap's modal plugin.
require('bootstrap/js/dist/modal.js');

// Enable the smooth scroll of # based internal links.
require('./smooth-scroll');

// Make the navigation bar responsive.
require('./responsive-navigation');

// A helper function to control YouTube iframe.
window.callPlayer = require('./call-player');

// Handle the play and pause of the video on the page based on the modal's status.
// require('./youtube-video');

// Handle the instagram video effect for the video.
require('./youtube-instagram-effect');

// To make the youtube video responsive.
require('./youtube-responsive');