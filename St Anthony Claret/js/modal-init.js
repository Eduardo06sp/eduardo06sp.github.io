(function () {
    var $content = $('#about-options').detach();
    
    $('#about').on('click', function() {
        modal.open({content: $content, width: 500, height: 400});
    });
}());