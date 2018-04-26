@@include("../../bower_components/jquery/dist/jquery.min.js");
@@include("../../node_modules/nicescroll/dist/jquery.nicescroll.min.js");
@@include("../../bower_components/jquery-nice-select/js/jquery.nice-select.min.js");
@@include("../../bower_components/slick-carousel/slick/slick.js");
@@include("../../bower_components/jquery.maskedinput/dist/jquery.maskedinput.min.js");





$(document).ready( function(){
 
  $("body").niceScroll();
  $(".mainContent__textReviwWrap article").niceScroll();
  $('select').niceSelect();

  $(".mainContent__popupBtn").click((evt)=>{
  	
  	evt.preventDefault();
  	$(".modal__screen").addClass("popup__form--show");
  	$(".popup__form").addClass("popup__form--show");
  	
  	$(document).keydown((evt)=>{
  		if(evt.which == 27){
  			$(".modal__screen").removeClass("popup__form--show");
  			$(".popup__form").removeClass("popup__form--show");
  		}
  	});
  	$(".modal__screen").click((evt)=>{
  		$(".modal__screen").removeClass("popup__form--show");
  		$(".popup__form").removeClass("popup__form--show");
  	});
  });

  let questions=$(".mainContent__timeToChooseQuestion"),
      questionsCont=questions.length,
      qurrentQuestion=1,
      selectorQuestion=".mainContent__timeToChooseQuestion:nth-child("+qurrentQuestion+")",
      //selectorAnsferField=".mainContent__questionFormInput:nth-child("+qurrentQuestion+")",
      question=$(selectorQuestion);
     // ansferField=$(selectorAnsferField),
      ansfers=$(".mainContent__glleryItem"),
      inputsForQuestions=$(".mainContent__questionFormInput");
      
      



      ansfers.click((evt)=>{
          evt.preventDefault();
          let clickedElem=$(evt.target),
              ansfer;
          
          if(clickedElem.hasClass("mainContent__galleryBtn")){
              ansfer=clickedElem.text();
          } else{
            ansfer=$(clickedElem.find(".mainContent__galleryBtn")).text();
          }
           console.log(ansfer);
           $(inputsForQuestions.get(qurrentQuestion-1)).val(ansfer);
           question.removeClass("mainContent__timeToChooseQuestion--active");
           qurrentQuestion++;
           
           selectorQuestion=".mainContent__timeToChooseQuestion:nth-child("+qurrentQuestion+")";
           question=$(selectorQuestion);
           question.addClass("mainContent__timeToChooseQuestion--active");
           if(qurrentQuestion>4){
              qurrentQuestion=1;
              ansfers.off();
           }
           
           
      });




	// mask tel
var telInp = $('input[name="clientNumber"]');
			
	telInp.each(function(){
		$(this).mask("+375 (99) 999-99-99");

			$(this).click(function(){
			if($(this).val() == '+375 (__) ___-__-__'){
				$(this).setCursorPosition(6);
			}
			});
	});	
		
// set cursore position
	$.fn.setCursorPosition = function(pos) {
		if ($(this).get(0).setSelectionRange) {
			$(this).get(0).setSelectionRange(pos, pos);
		} else if ($(this).get(0).createTextRange) {
			var range = $(this).get(0).createTextRange();

			range.collapse(true);
			range.moveEnd('character', pos);
			range.moveStart('character', pos);
			range.select();
		}
	};


  
});