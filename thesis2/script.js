$( document ).ready(function() {
    // var parentwidth = $(".shadow-wrapper").width();
    // var parentheight = $(".shadow-wrapper").height();

    $(".TOC").hide();
    //
    // setTimeout(function() {
    //     $(".embed-shadow").width(parentwidth);
    //     $(".embed-shadow").height(parentheight)
    // }, 5000);


    // var parentwidth6 = $(".shadow-wrapper6").width();
    // var parentheight6 = $(".shadow-wrapper6").height();
    // setTimeout(function() {
    //     $(".embed-shadow6").width(parentwidth6);
    //     $(".embed-shadow6").height(parentheight6)
    // }, 10000);

    $(".TOC a").click(function(){
      $(".TOC").hide();

    });

    var parentheight = $(".quote-box").height();
    $(".quote-line").height(parentheight);

    var parentheight2 = $(".quote-box2").height();
    $(".quote-line2").height(parentheight2);

    var parentheight3 = $(".quote-box3").height();
    $(".quote-line3").height(parentheight3);

    $(".TOC-button").click(function(){
      $(".TOC").toggle();


    });




  });
