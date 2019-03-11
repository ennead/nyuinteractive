var h = window.innerHeight;
var sectionduration = h/2;
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
      backDiagramURL = 'assets/diagrams/OR Platform/entrance.png';

    } else {
      $("#slideCounter").text("01");
      $("#title").text("Overview");
      $("#diagramBack").attr('src', backDiagramURL);
      $("#diagramFront").attr('src', 'assets/diagrams/OR Platform/fullHighlight.png').stop(true,true).hide().fadeIn("slow");
      backDiagramURL = 'assets/diagrams/OR Platform/fullHighlight.png';

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
    }
  }

  // build scenes
  new ScrollMagic.Scene({triggerElement: "a#section2", duration: sectionduration, triggerHook: 0})
    .setPin("#block")
    .on("enter leave", updateBox)
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

  new ScrollMagic.Scene({triggerElement: "a#section3", duration: sectionduration, offset: sectionduration, triggerHook: 0})
    .setPin("#block")
    .on("enter leave", updateBox2)
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

  new ScrollMagic.Scene({triggerElement: "a#section4", duration: sectionduration, offset: (sectionduration*2), triggerHook: 0})
    .setPin("#block")
    .on("enter leave", updateBox3)
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

});
