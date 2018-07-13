$(window).scroll(function() {
    if ($(this).scrollTop() > 100){  
        $(".postmenu").addClass("sticky");
    }
    else{
        $(".postmenu").removeClass("sticky");
    }
});