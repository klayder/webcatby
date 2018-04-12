@@include("../../bower_components/jquery/dist/jquery.min.js");
@@include("slick.js";)


$(document).ready( function(){
  console.log("Hi! JQuery work!");
  $('.mainContent__slider').slick({
  	infinite: true,
  	dots: true,
  	speed: 600,
  	adaptiveHeight: true,
  	autoplay: true,
  	autoplaySpeed: 3500
    
  });
});