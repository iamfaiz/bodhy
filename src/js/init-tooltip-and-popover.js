$(function () {
    var $whatsAppLink = $('.whatsapp-img-link');

    $('[data-toggle="tooltip"]').tooltip();

    $whatsAppLink.on('click', function (e) {
        e.preventDefault();

        $whatsAppLink.tooltip('hide');
    });

    $whatsAppLink.popover({
        trigger: 'click',
        title: 'WhatsApp',
        html: true,
        content: function () {
            return '<p>Add the number to the Contacts on your phone and send us a message via app.</p> <p class="lead text-center">+123456789</p>';
        },
        placement: 'top'
    });
});


