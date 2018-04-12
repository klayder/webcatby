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
let callBackForm=$(".mainContent__callBackForm");
let submitBtn=$("[type='submit']");
let nameField=$("[name='name']");
let phoneField=$("[name='number']");


submitBtn.click((evt)=>{
		evt.preventDefault();
		if(!phoneField.val()||!nameField.val()){
			submitBtn.removeClass("error");
			setTimeout(function(){
       				submitBtn.addClass("error")},1);
			!nameField.val()?nameField.focus():phoneField.focus();
		}
		

		
});

$(".mainContent_priceFormBtn").click((evt)=>{
		evt.preventDefault();
		console.log("click");
		modalOverlay.addClass("modalOverlay--show");
		callBackForm.addClass("mainContent__callBackForm--show");
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
	callBackForm.removeClass("mainContent__callBackForm--show");
}


});