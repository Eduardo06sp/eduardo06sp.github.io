$('.accordion-panel:first').show();
$('.accordion').on('click', '.accordion-control', function(e) {
    e.preventDefault();
    $(this)
        .next('.accordion-panel')
        .not(':animated')
        .slideToggle();
});
