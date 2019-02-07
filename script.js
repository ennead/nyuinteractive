var sectionduration = 300;

$(function () { // wait for document ready
  // init controller
  var controller = new ScrollMagic.Controller();

  $(".scrollingText").stop(true,true).hide().slideDown("slow");

  // show pin state
  function updateBox (e) {
    if (e.type == "enter") {
      $("#slideCounter").text("01");
      $("#title").text("Overview");
      $("#diagram").attr('src', 'assets/diagrams/fullHighlight.png').hide().fadeIn("slow").fadeIn("slow");
    } else {
      $("#title").text("Overview");
    }
  }

  function updateBox1 (e) {
    if (e.type == "enter") {
      $("#slideCounter").text("02");
      $("#title").text("Arrival and Waiting");

        $("#diagram").fadeOut("slow", function() {
           $("#diagram").attr('src','assets/diagrams/entrance.png');
       })
       .fadeIn("slow");

      // $("#diagram").attr('src', 'assets/diagrams/entrance.png').stop(true,true).hide().fadeIn("slow");
    }
  }

  function updateBox2 (e) {
    if (e.type == "enter") {
      $("#slideCounter").text("03");
      $("#title").text("Flexible Prep and Recovery");
      $("#diagram").attr('src', 'assets/diagrams/blueHighlights.png').stop(true,true).hide().fadeIn("slow");
    }
  }

  function updateBox3 (e) {
    if (e.type == "enter") {
      $("#slideCounter").text("04");
      $("#title").text("OR Circulation and Views");
      $("#diagram").attr('src', 'assets/diagrams/orangeHighlight.png').stop(true,true).hide().fadeIn("slow");
    }
  }

  // build scenes
  new ScrollMagic.Scene({triggerElement: "#trigger", duration: sectionduration, triggerHook: 0})
    .setPin("#block")
    .on("enter leave", updateBox)
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

  new ScrollMagic.Scene({triggerElement: "#trigger", duration: sectionduration, offset: sectionduration, triggerHook: 0})
    .setPin("#block")
    .on("enter leave", updateBox1)
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

  new ScrollMagic.Scene({triggerElement: "#trigger", duration: sectionduration, offset: sectionduration*2, triggerHook: 0})
    .setPin("#block")
    .on("enter leave", updateBox2)
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

  new ScrollMagic.Scene({triggerElement: "#trigger", duration: sectionduration, offset: sectionduration*3, triggerHook: 0})
    .setPin("#block")
    .on("enter leave", updateBox3)
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
});
