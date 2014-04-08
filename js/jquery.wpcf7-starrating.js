/*
 ### Contact Form 7 Star Rating v1.1 - 2014 ###
 * Home: http://www.themelogger.com/
 *
 * Licensed under http://en.wikipedia.org/wiki/MIT_License
 ###
*/

;
(function($) {
    $(document).ready(function() {
        $('.starrating').each( function() {
            var opt = {} ;
            var el = $(this) ;
            
            if($(this).attr('data-cancel')=='1') {
                opt.required = true ;
            }    
            
            opt.callback = function(num) {
                el.find('.starrating_number').html(num);
            }
            $(this).find('input').rating(opt);
            $(this).find('input').rating('select',$(this).attr('data-def'));
        });
    });
})(jQuery);
        