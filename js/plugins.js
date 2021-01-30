$(document).ready(function() {
    
    'use strict';

  $('input[type="checkbox"]').on('change', function() {
    $('input[name="' + this.name + '"]').not(this).prop('checked', false);
  });
    
    
       $(window).scroll(function() {

    if ($(this).scrollTop()>200)
     {
         $('.social').fadeIn();
        
     }
    else
     {
        $('.social').fadeOut();
     }
 });
    

   });
