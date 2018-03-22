$(document).ready(function() {
  console.log("jquery is working");

  //scroll to section process page
  function scrollToAnchor(aid){
      var aTag = $("div[name='"+ aid +"']");
      $('html,body').animate({scrollTop: aTag.offset().top},5000);
  }

  $(".scrollTop").click(function() {
     scrollToAnchor('top');
  });

});
