// https://codepen.io/ifabre/pen/qBZarQ


// //

// $(".homeButton").click(function() {
//     $('html, body').animate({
//         scrollTop: $("#homePage").offset().top      
//     },100);
//  return false;
// });

// $(".projectButton").click(function() {
//     $('html, body').animate({
//         scrollTop: $("#projectPage").offset().top
//     },100);
//  return false;
// });

// $(".aboutButton").click(function() {
//     $('html, body').animate({
//         scrollTop: $("#aboutPage").offset().top
//     },100);
//  return false;
// });

// $(".contactButton").click(function() {
//     $('html, body').animate({
//         scrollTop: $("#contactPage").offset().top
//     },100);
//  return false;
// });

// //
$(".homeButton").addClass("active");

  $('#homePage').waypoint(function() {
    $(".topNav h3").children().removeClass("active");
    $(".homeButton").addClass("active");
  }, { offset: -1 });

$('#projectPage').waypoint(function() {

    $(".topNav h3").children().removeClass("active");
    $(".projectButton").addClass("active");
    
  }, { offset: 0 });
  
  $('#aboutPage').waypoint(function() {
    $(".topNav h3").children().removeClass("active");
    $(".aboutButton").addClass("active");
  }, { offset: 0 });
  
  $('#contactPage').waypoint(function() {
    $(".topNav h3").children().removeClass("active");
    $(".contactButton").addClass("active");
  }, { offset: 0 });

  ////

