@@include("../../bower_components/jquery/dist/jquery.min.js");
@@include("../../node_modules/nicescroll/dist/jquery.nicescroll.min.js");


$(document).ready( function(){
  console.log("Hi! JQuery work!");
  $("body").niceScroll();
  $(".mainContent__textReviwWrap article").niceScroll();
  
  
});