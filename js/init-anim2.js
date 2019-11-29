function splash() {
    $(".splash").addClass("animated400 fadeInLeft");
    $(".splash").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',  function()
    {
       $(".splash").hide();
       console.log("splash anim - finished");
    });
}


