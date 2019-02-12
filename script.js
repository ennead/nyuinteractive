var w = window.innerWidth;
var sectionduration = w/4;
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
      $("#diagramFront").attr('src', 'assets/diagrams/entrance.png').stop(true,true).hide().delay(200).fadeIn("slow");
      backDiagramURL = 'assets/diagrams/entrance.png';

    } else {
      $("#slideCounter").text("01");
      $("#title").text("Overview");
      $("#diagramBack").attr('src', backDiagramURL);
      $("#diagramFront").attr('src', 'assets/diagrams/fullHighlight.png').stop(true,true).hide().fadeIn("slow");
      backDiagramURL = 'assets/diagrams/fullHighlight.png';

    }
  }

  function updateBox2 (e) {
    if (e.type == "enter") {
      $("#slideCounter").text("03");
      $("#title").text("Flexible Prep and Recovery");
      $("#diagramBack").attr('src', backDiagramURL);
      $("#diagramFront").attr('src', 'assets/diagrams/blueHighlights.png').stop(true,true).hide().delay(200).fadeIn("slow");
      backDiagramURL = 'assets/diagrams/blueHighlights.png';
    }
  }

  function updateBox3 (e) {
    if (e.type == "enter") {
      $("#slideCounter").text("04");
      $("#title").text("OR Circulation and Views");
      $("#diagramBack").attr('src', backDiagramURL);
      $("#diagramFront").attr('src', 'assets/diagrams/orangeHighlight.png').stop(true,true).hide().delay(200).fadeIn("slow");
      backDiagramURL = 'assets/diagrams/orangeHighlight.png';
    }
  }

  // build scenes
  new ScrollMagic.Scene({triggerElement: "#trigger", duration: sectionduration, triggerHook: 0})
    .setPin("#block")
    .on("enter leave", updateBox)
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

  new ScrollMagic.Scene({triggerElement: "#trigger", duration: sectionduration, offset: sectionduration, triggerHook: 0})
    .setPin("#block")
    .on("enter leave", updateBox2)
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

  new ScrollMagic.Scene({triggerElement: "#trigger", duration: sectionduration, offset: (sectionduration*2), triggerHook: 0})
    .setPin("#block")
    .on("enter leave", updateBox3)
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
});
