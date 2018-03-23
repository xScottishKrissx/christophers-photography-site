$(document).ready(function() {
  console.log("jquery is working");




  //scroll to section process page
  function scrollToAnchor(aid) {
    var aTag = $("div[name='" + aid + "']");
    $('html,body').animate({
      scrollTop: aTag.offset().top
    }, 300);
  }

  $(".scroll-to-top-btn").click(function() {
    scrollToAnchor('top');
  });


  //Click to View Caption
  //$(".click-caption").click(function(){
  //$(".click-caption").css("top","0%");
  //$(".click-caption").addClass("show");

  //});
  $(".click-caption").click(function() {
    $(this).toggleClass("show")
  });

  $(".expand-caption").on("click", function() {
    //$("col-12 col-md-4 .box-3").addClass("col-1")
    $(this).parent().toggleClass("expand-image");
  });

  $(window).on("scroll", function() {
    //$("col-12 col-md-4 .box-3").addClass("col-1")
    if ($(window).scrollTop() < 1000) {
      $(".scroll-to-top-btn").css("visibility", "hidden");

    } else if ($(window).scrollTop() > 1000) {
      $(".scroll-to-top-btn").css("visibility", "visible");
    };
  });

  //$(".hide-caption").click(function(){
  //  $(".click-caption").css("top","90%");
  //});

  $(function() {
      $(".wrapper").swipe({
        //Generic swipe handler for all directions
        swipeRight: function(event, direction, distance, duration, fingerCount, fingerData) {
          console.log("You Swiped in " + direction);
          $(".navBar").css("left", "0");
        }
      });

      $(".wrapper").swipe({
          //Generic swipe handler for all directions      swipeLeft:function(event, direction, distance, duration, fingerCount, fingerData) {

          console.log("You Swiped in " + direction);
          $(".navBar").css("left", "-100%");
        }
      });

    //Set some options later
    $("#test").swipe({
      fingers: 2
    });
  });

});
