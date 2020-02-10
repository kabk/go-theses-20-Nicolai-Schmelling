$( document ).ready(function() {


    $(".TOC a").click(function(){
      $(".TOC-background").hide();

    });

    var parentheight = $(".quote-box").height();
    $(".quote-line").height(parentheight);

    var parentheight2 = $(".quote-box2").height();
    $(".quote-line2").height(parentheight2);

    var parentheight3 = $(".quote-box3").height();
    $(".quote-line3").height(parentheight3);

    $(".TOC-button").click(function(){
      $(".TOC-background").toggle();


    });






  });
