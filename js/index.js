//Smooth Scroll//
// https://codepen.io/ifabre/pen/qBZarQ

$(".homeButton").click(function() {
    $('html, body').animate({
        scrollTop: $("#homePage").offset().top      
    },100);
 return false;
});

$(".projectButton").click(function() {
    $('html, body').animate({
        scrollTop: $("#projectPage").offset().top
    },100);
 return false;
});

$(".aboutButton").click(function() {
    $('html, body').animate({
        scrollTop: $("#aboutPage").offset().top
    },100);
 return false;
});

$(".contactButton").click(function() {
    $('html, body').animate({
        scrollTop: $("#contactPage").offset().top
    },100);
 return false;
});

//Scrollspy//
// https://codepen.io/acarlie/pen/LKmORw?editors=0110
$(document).ready(function() {
    var sectionIds = $("a.navButton");

    $(document).scroll(function() {
        sectionIds.each(function() {
            var container = $(this).attr("href");
            var containerOffset = $(container).offset().top;
            var containerHeight = $(container).outerHeight();
            var containerBottom = containerOffset + containerHeight;
            var scrollPosition = $(document).scrollTop();

            if(scrollPosition < containerBottom - 20 && scrollPosition >= containerOffset - 20){
                $(this).addClass('active');
            } else{
                $(this).removeClass('active');
            }
        });
    });
});

//Bar Animation//
$(function() {
    $(".barsRightAnimate").delay(500).animate({
        width: "10%"
    }, 1200);
    $(".barsRightAnimate .cyanR").delay(500).animate({
        backgroundColor: "#ED33B9" //to pink
    },1200);
    $(".barsRightAnimate .yellowR").delay(500).animate({
        backgroundColor: "#FCA347" //to orange
    },1200);
    $(".barsRightAnimate .pinkR").delay(500).animate({
        backgroundColor: "#00C2D1" //to cyan
    },1200);
    $(".barsRightAnimate .orangeR").delay(500).animate({
        backgroundColor: "#F9E900" //to yellow
    },1200);
});

$(function() {
    $(".barsLeftAnimate").delay(500).animate({
        width: "10%"
    }, 1200);
    $(".barsLeftAnimate .orangeL").delay(500).animate({
        backgroundColor: "#F9E900" //to yellow
    },1200);
    $(".barsLeftAnimate .pinkL").delay(500).animate({
        backgroundColor: "#00C2D1" //to cyan
    },1200);
    $(".barsLeftAnimate .yellowL").delay(500).animate({
        backgroundColor: "#FCA347" //to orange
    },1200);
    $(".barsLeftAnimate .cyanL").delay(500).animate({
        backgroundColor: "#ED33B9" //to pink
    },1200);
});
