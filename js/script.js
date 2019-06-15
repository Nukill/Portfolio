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
var line = document.querySelector('.navLine');
var logo = document.querySelector('.fa-th-large');
var navLink = document.querySelectorAll('.nav-link');

function hasScrolled(){
    var scrollTop = window.scrollY;
    if (scrollTop > 10){
        line.classList.add('navLine-move');
        logo.classList.add('logo-small');
        navLink.forEach((el)=>{
            el.classList.add('nav-link-small');
        })
    }
    else{
        line.classList.remove('navLine-move');
        logo.classList.remove('logo-small');
        navLink.forEach((el)=>{
            el.classList.remove('nav-link-small');
        })
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