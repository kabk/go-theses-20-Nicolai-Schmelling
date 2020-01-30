$( document ).ready(function() {
    // var parentwidth = $(".shadow-wrapper").width();
    // var parentheight = $(".shadow-wrapper").height();

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

  //   function slideBar( ) {
  //   var arrow = $( this );
  //
  //   var direction = 1 * arrow.parent( ).hasClass( 'arrow-right' );
  //   if ( direction == 0 ) direction = -1;
  //
  //   var bar = arrow.parent( ).parent( )
  //                  .find( '.glossary' );
  //
  //   var length = bar.children( ).length;
  //   var index = bar.data( 'index' );
  //   if ( index == undefined ) index = 0;
  //
  //   index += direction;
  //   if ( index < 0 ) index = length - 1;
  //   else if ( index >= length ) index = 0;
  //
  //   bar.css( 'arrow-right', -1 * ( index * 100) + '%' )
  //      .data( 'index', index );
  // }
  // $( '.arrows .button' ).on( "click", slideBar );




  });
