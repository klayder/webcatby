@@include("../../bower_components/jquery/dist/jquery.min.js");
@@include("../../node_modules/nicescroll/dist/jquery.nicescroll.min.js");
@@include("../../bower_components/jquery-nice-select/js/jquery.nice-select.min.js");
@@include("../../bower_components/slick-carousel/slick/slick.js");





$(document).ready( function(){
 
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

  let questions=$(".mainContent__timeToChooseQuestion"),
      questionsCont=questions.length,
      qurrentQuestion=1,
      selectorQuestion=".mainContent__timeToChooseQuestion:nth-child("+qurrentQuestion+")",
      //selectorAnsferField=".mainContent__questionFormInput:nth-child("+qurrentQuestion+")",
      question=$(selectorQuestion);
     // ansferField=$(selectorAnsferField),
      ansfers=$(".mainContent__glleryItem"),
      inputsForQuestions=$(".mainContent__questionFormInput");
      console.log( inputsForQuestions.eq(0).classList);
      



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







  
});