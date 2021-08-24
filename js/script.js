$(window).scroll(function(){
    var navClass = $('.nav-transparent')
    var scroll = $(window).scrollTop();

    (scroll < 150) ? navClass.removeClass('nav-scrolled') : navClass.addClass('nav-scrolled')
});

$(document).ready(function() {
    var navClass = $('.nav-transparent')
    var navClass2 = $('.nav-sticky')
    var navClass3 = $('.nav-scrolled')
    var hamburger = $('#hamburger')
    
    hamburger.click(function() {
        if (($(this).prop("checked"))){
            navClass.addClass('nav-drop')
            navClass2.addClass('nav-drop')
            navClass3.addClass('nav-drop')
        }
        else if (!($(this).prop("checked"))){
            navClass.removeClass('nav-drop')
            navClass2.removeClass('nav-drop')
            navClass3.removeClass('nav-drop')
        }
    });
});