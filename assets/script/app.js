console.log('loading...')


var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
    return new bootstrap.Dropdown(dropdownToggleEl)
})
$('.wided').slick({
    dots: false,
    infinite: true,
    speed: 300,
    nextArrow: $('.prev-arrow'),
    prevArrow: $('.next-arrow'),
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 380,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
$('.sale').slick({
    dots: false,
    infinite: true,
    speed: 300,
    nextArrow: $('.prev-trigger'),
    prevArrow: $('.next-trigger'),
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
$('.accessories').slick({
    dots: false,
    infinite: true,
    speed: 300,
    nextArrow: $('.prev-triger'),
    prevArrow: $('.next-triger'),
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
$('.brands').slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                dots: false,
                slidesToShow: 3,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                dots: false,
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ]
});
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    $('#back-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});

$('.hamburger-icon').click(function (e) {
    e.preventDefault();
    $('.fluid-menu').toggleClass('active')
    $('.burger').toggleClass('active')
});
$('.mobile-hamburger-icon').click(function (e) {
    e.preventDefault();
    $('.menu-burger').toggleClass('active')
    $('.overlay').toggleClass('active')
    $('body').toggleClass('overflow-hidden')
    $('.mobile-menu').toggleClass('active')
})

$('.overlay').click(function (e) {
    e.preventDefault();
    $('.menu-burger').remove('active')
    $('.overlay').remove('active')
    $('body').remove('overflow-hidden')
    $('.mobile-menu').remove('active')
})

$('.game-tab').hover(function() {
    console.log('hai');
    $('.gamer-content ').toggleClass('active');
    $('.game-tab').toggleClass('active');
})
$('.mobile-tab').hover(function () {
    console.log('hai');
    $('.mobile-content ').toggleClass('active');
    $('.mobile-tab').toggleClass('active');
})
$('.desktop-tab').hover(function() {
    $('.desktop-content ').toggleClass('active');
    $('.desktop-tab').toggleClass('active');
})

// var tabBtn = document.querySelectorAll('.tab');
// var tabMenu = document.querySelectorAll('.menu-content');

// function remover(activedBtn) {
//     tabMenu.forEach(singleMenu => {
//         if (singleMenu.dataset.menuContent === activedBtn.dataset.linkItem) {
//             singleMenu.classList.remove('active');
//             activedBtn.classList.remove('active');
//         } else {
//             singleMenu.classList.toggle('active');
//             activedBtn.classList.toggle('active');
//         }
//     })
// }
// tabBtn.forEach(eachBtn => {
//     eachBtn.addEventListener('mouseenter', function (e) {
//         e.preventDefault();
//         remover(eachBtn);
//     })
// })
