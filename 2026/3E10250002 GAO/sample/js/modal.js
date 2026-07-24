// modal.js
$(document).ready(function() {
    $('#info-button').on('click', function() {
        $('[data-remodal-id=modal-info]').remodal().open();
    });
});