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
  
let modalOverlay=$(".modalOverlay");

$(".mainContent_priceFormBtn").click((evt)=>{
		evt.preventDefault();
		console.log("click");
		modalOverlay.addClass("modalOverlay--show");
});


modalOverlay.click(hideOverlay);

$(window).keyup((evt)=>{
		if(evt.keyCode===27){
			if(modalOverlay.hasClass("modalOverlay--show")){
				console.log("ok");
				hideOverlay();
			}
		}
});


function hideOverlay(){
	modalOverlay.removeClass("modalOverlay--show");
}


});