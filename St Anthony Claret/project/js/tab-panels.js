$('.tab-list').each(function() {
    var $this = $(this);
    var $tab = $this.find('li.active-tab');
    var $link = $tab.find('a');
    var $panel = $($link.attr('href'));
    
    $this.on('click', '.tab-control', function(e) {
        e.preventDefault();
        var $link = $(this);
        var id = this.hash;
        
        if (id && !$link.is('.active-tab')) {
            $panel.removeClass('active-tab');
            $tab.removeClass('active-tab');
            
            $panel = $(id).addClass('active-tab');
            $tab = $link.parent().addClass('active-tab');
        }
    });
});