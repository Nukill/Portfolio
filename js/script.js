var $logoElement = $('.fa-th-large');
var $logoContainer = $('.logo');
var $isIn = false;
$(document).ready(function(){
    $logoContainer.mouseenter(function(){
        if ($isIn == false){
            $logoElement.slideToggle(120, function(){
                $logoElement.removeClass('fas fa-th-large');
                $logoElement.addClass('fas fa-th');
            })
            $logoElement.slideToggle(80);
            $isIn = true;
        }
    })
    $logoContainer.mouseleave(function(){
        if ($isIn == true){
            $logoElement.slideToggle(120, function(){
                $logoElement.removeClass('fas fa-th').addClass('fas fa-th-large');
            })
            $logoElement.slideToggle(80);
            $isIn = false;
        }
    })
})

var previousScrollTop;
var isScrolling;
var nav = document.querySelector('.nav');
var logo = document.querySelector('.fa-th-large');
var navLinks = document.querySelector('.nav-links');

function hasScrolled(){
    var scrollTop = window.scrollY;
    if (scrollTop > 10){
        logo.classList.add('logo-small');
        nav.style.background = 'black';
        nav.style.height = '7.5%';
        navLinks.classList.add('nav-links-scroll');
    }
    else{
        logo.classList.remove('logo-small');
        nav.style.background = 'none';
        nav.style.height = '15%';
        navLinks.classList.remove('nav-links-scroll');
    }
    previousScrollTop = scrollTop;
}

document.addEventListener('scroll', function(){
    isScrolling = true;
}, false);

setInterval(function(){
    if (isScrolling) {
        hasScrolled();
        isScrolling = false;
    }
}, 100);

var menu = $('.fa-bars');
var menuList = $('.nav-links');

$(menu).click(function(){
    menuList.slideToggle("fast");
})

$('a[href^="#"]').on('click', function(event) {
    var target = $( $(this).attr('href') );
    if( target.length ) {
        event.preventDefault();
        if(window.getComputedStyle(document.querySelector('.mobile-menu')).display != "none"){
            $(menuList).hide();
        }
        $('html, body').animate({
            scrollTop: target.offset().top-100,
        }, 500);
    }
});