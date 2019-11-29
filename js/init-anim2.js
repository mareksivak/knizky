var MAX= 7;
DELAY = 200;


var anim_finished = false;
var ended = 0;



function animate_block_in(element) {
    element.css("opacity", "1");
    element.addClass("animated400 fadeInLeft");
    element.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',  function()
    {
       element.removeClass('animated400 fadeInLeft');
        ended++; 
        if (ended >= MAX) {
            anim_finished = true;console.log("animations finished");
        }
    });

}
  

//$(document).ready(function() {
function intro_anim() {
    var step_delay = 100;
    
    // zistit, kolko blokov sa ma animovat. je to tu, lebo boli syncing issues
    MAX = 0;
    var display = $( window ).height();
    if (display == 0) display = 1200;
    var block_sum = 0;
    console.log(display);
    
    $.each($('.block'), function() {
        var height = $(this).outerHeight();console.log(height);
        if (block_sum < display) {
            MAX++;
            block_sum += height;
        }
        else 
        {
            console.log("cont" + MAX);return false;
        }
    });
    //----
    
    var arr = $(".block").slice(0,MAX); 
    $(arr).each(function() {$(this).css("opacity", "0");});
    console.log("max" + MAX);
    for (var i =0 ; i < MAX; i++) {
        var el = $(arr).eq(i);
        setTimeout(animate_block_in.bind(null, $(el)), i*step_delay + DELAY);
      
    }
}
//});

  