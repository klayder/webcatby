@@include("../../bower_components/jquery/dist/jquery.min.js");
@@include("../../node_modules/nicescroll/dist/jquery.nicescroll.min.js");
@@include("../../bower_components/jquery-nice-select/js/jquery.nice-select.min.js");




$(document).ready( function(){
  console.log("Hi! JQuery work!");
  $("body").niceScroll();
  $(".mainContent__textReviwWrap article").niceScroll();
  $('select').niceSelect();

  $(".mainContent__popupBtn").click((evt)=>{
  	
  	evt.preventDefault();
  	$(".modal__screen").addClass("popup__form--show");
  	$(document).keydown((evt)=>{
  		if(evt.which == 27){
  			$(".modal__screen").removeClass("popup__form--show");
  		}
  	});
  	$(".modal__screen").click((evt)=>{
  		$(".modal__screen").removeClass("popup__form--show");
  	});
  });


  
});