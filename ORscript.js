var h = window.innerHeight;
var sectionduration = h/2;
var s1location = 0;
var s2location = sectionduration;
var s3location = sectionduration*2;
var s4location = sectionduration*3;
var backDiagramURL;

$(function () { // wait for document ready
  // init controller
  var controller = new ScrollMagic.Controller();

  $(".scrollingText").stop(true,true).hide().slideDown("slow");

  // show pin state
  function updateBox (e) {
    if (e.type == "enter") {
      $("#slideCounter").text("02");
      $("#title").text("Arrival and Waiting");
      $("#diagramBack").attr('src', backDiagramURL);
      $("#diagramFront").attr('src', 'assets/diagrams/OR Platform/entrance.png').stop(true,true).hide().delay(200).fadeIn("slow");
      $("#sectionBody").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis eros non blandit malesuada. Donec scelerisque libero sit amet augue volutpat, sed feugiat dui sollicitudin. Praesent porta ipsum a turpis efficitur consectetur. Cras consequat mollis diam sed rhonassa eget sem venenatis neque.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis eros non blandit malesuada.");
      backDiagramURL = 'assets/diagrams/OR Platform/entrance.png';
      $("#pl1,#pl3,#pl4").removeClass("activeLink").addClass("progressLink")
      $("#pl2").addClass("activeLink")
      $('#prevSection').click( function(e) {e.preventDefault(); controller.scrollTo(s1location); return false; } );
      $('#nextSection').click( function(e) {e.preventDefault(); controller.scrollTo(s3location); return false; } );
      $('#prevSection').css('opacity', '1');
      $('#nextSection').css('opacity', '1');


    } else {
      $("#slideCounter").text("01");
      $("#title").text("Overview");
      $("#diagramBack").attr('src', backDiagramURL);
      $("#diagramFront").attr('src', 'assets/diagrams/OR Platform/fullHighlight.png').stop(true,true).hide().fadeIn("slow");
      $("#sectionBody").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis eros non blandit malesuada. Donec scelerisque libero sit amet augue volutpat, sed feugiat dui sollicitudin. Praesent porta ipsum a turpis efficitur consectetur. Cras consequat mollis diam sed rhonassa eget sem venenatis neque.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis eros non blandit malesuada.");
      backDiagramURL = 'assets/diagrams/OR Platform/fullHighlight.png';
      $("#pl2,#pl3,#pl4").removeClass("activeLink").addClass("progressLink")
      $("#pl1").addClass("activeLink")
      $('#prevSection').click( function(e) {e.preventDefault(); controller.scrollTo(s1location); return false; } );
      $('#nextSection').click( function(e) {e.preventDefault(); controller.scrollTo(s2location); return false; } );
      $('#prevSection').css('opacity', '0.2');
      $('#nextSection').css('opacity', '1');

    }
  }

  function updateBox2 (e) {
    if (e.type == "enter") {
      $("#slideCounter").text("03");
      $("#title").text("Flexible Prep and Recovery");
      $("#diagramBack").attr('src', backDiagramURL);
      $("#diagramFront").attr('src', 'assets/diagrams/OR Platform/blueHighlights.png').stop(true,true).hide().delay(200).fadeIn("slow");
      $("#sectionBody").text("The stacking and floor layouts of the procedural base promote the separation of public “onstage” areas (waiting/atrium) from clinical “offstage” areas (periop/surgery suite). The surgical suite is organized with full separation and one-way flow of clean equipment and instruments to, and dirty material from, the operating rooms. This reduces opportunities for cross-contamination and infection, and leads to improved patient experiences and outcomes.");
      backDiagramURL = 'assets/diagrams/OR Platform/blueHighlights.png';
      $("#pl1,#pl2,#pl4").removeClass("activeLink").addClass("progressLink")
      $("#pl3").addClass("activeLink")
      $('#prevSection').click( function(e) {e.preventDefault(); controller.scrollTo(s2location); return false; } );
      $('#nextSection').click( function(e) {e.preventDefault(); controller.scrollTo(s4location); return false; } );
      $('#prevSection').css('opacity', '1');
      $('#nextSection').css('opacity', '1');
    }
  }

  function updateBox3 (e) {
    if (e.type == "enter") {
      $("#slideCounter").text("04");
      $("#title").text("OR Circulation and Views");
      $("#diagramBack").attr('src', backDiagramURL);
      $("#diagramFront").attr('src', 'assets/diagrams/OR Platform/orangeHighlight.png').stop(true,true).hide().delay(200).fadeIn("slow");
      $("#sectionBody").text("Continuous day-lit circulation wraps around the OR’s and procedure rooms, with dramatic views along the perimeter and at the end of corridors. A communicating stair with river views allows clinicians to easily shuttle between procedure floors and the support floor where staff lockers and central break rooms are located. The control center defines a node at the center of the floor and is rendered with distinct color, form, and lighting to act as a wayfinding device.");
      backDiagramURL = 'assets/diagrams/OR Platform/orangeHighlight.png';
      $("#pl1,#pl2,#pl3").removeClass("activeLink").addClass("progressLink")
      $("#pl4").addClass("activeLink")
      $('#prevSection').click( function(e) {e.preventDefault(); controller.scrollTo(s3location-10); return false; } );
      $('#nextSection').click( function(e) {e.preventDefault(); controller.scrollTo(s2location); return false; } );
      $('#prevSection').css('opacity', '1');
      $('#nextSection').css('opacity', '0.2');
    }
  }

$('#prevSection').click( function(e) {e.preventDefault(); controller.scrollTo(s1location); return false; } );
$('#nextSection').click( function(e) {e.preventDefault(); controller.scrollTo(s2location); return false; } );

$('#pl1').click( function(e) {e.preventDefault(); controller.scrollTo(s1location); return false; } );
$('#pl2').click( function(e) {e.preventDefault(); controller.scrollTo(s2location); return false; } );
$('#pl3').click( function(e) {e.preventDefault(); controller.scrollTo(s3location); return false; } );
$('#pl4').click( function(e) {e.preventDefault(); controller.scrollTo(s4location); return false; } );


  // build scenes
  new ScrollMagic.Scene({duration: sectionduration, triggerHook: 0})
    .setPin("#block")
    .on("enter leave", updateBox)
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

  new ScrollMagic.Scene({duration: sectionduration, offset: sectionduration, triggerHook: 0})
    .setPin("#block")
    .on("enter leave", updateBox2)
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

  new ScrollMagic.Scene({duration: sectionduration, offset: (sectionduration*2), triggerHook: 0})
    .setPin("#block")
    .on("enter leave", updateBox3)
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

});
