$(window).scroll(function() {
    if ($(this).scrollTop() > 100){  
        $(".postmenu").addClass("sticky");
        $(".icon-close").addClass("icon-close-scroll");
    }
    else{
        $(".postmenu").removeClass("sticky");
        $(".icon-close").removeClass("icon-close-scroll");
    }
});