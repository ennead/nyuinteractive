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
  var scrollPos = controller.scrollPos();

  $(".scrollingText").stop(true,true).hide().slideDown("slow");

  // show pin state

function updateBox0(){
   $("#slideCounter").text("01");
   $("#title").text("A highly flexible and efficient platform.");
   $("#diagramBack").attr('src', backDiagramURL);
   $("#diagramFront").attr('src', 'assets/diagrams/OR Platform/fullHighlight.png').stop(true,true).hide().fadeIn("slow");
   $("#sectionBody").text("The new tower houses 32 operating and procedure suites located on three floors. All staff support spaces and sterile processing are centralized off the floor, to maximize the efficiency of the planning.");
   backDiagramURL = 'assets/diagrams/OR Platform/fullHighlight.png';
   $("#pl2,#pl3,#pl4").removeClass("activeLink").addClass("progressLink")
   $("#pl1").addClass("activeLink")
   $('#prevSection').click( function(e) {e.preventDefault(); controller.scrollTo(s1location-1); return false; } );
   $('#nextSection').click( function(e) {e.preventDefault(); controller.scrollTo(s2location-1); return false; } );
   $('#prevSection').css('opacity', '0.2');
   $('#nextSection').css('opacity', '1');
}

  function updateBox1 (e) {

    scrollPos = controller.scrollPos();

    if (e.type == "enter") {
      $("#slideCounter").text("02");
      $("#title").text("Arrival and Reception");
      $("#diagramBack").attr('src', backDiagramURL);
      $("#diagramFront").attr('src', 'assets/diagrams/OR Platform/entrance.png').stop(true,true).hide().delay(200).fadeIn("slow");
      $("#sectionBody").text("The surgical reception and waiting areas are located on a series of balconies, open to the atrium and the lobby below. Patients and families arriving for a procedure can see where they are going and, once in the waiting room, where they have been.");
      backDiagramURL = 'assets/diagrams/OR Platform/entrance.png';
      $("#pl1,#pl3,#pl4").removeClass("activeLink").addClass("progressLink")
      $("#pl2").addClass("activeLink")
      $('#prevSection').click( function(e) {e.preventDefault(); controller.scrollTo(s1location-1); return false; } );
      $('#nextSection').click( function(e) {e.preventDefault(); controller.scrollTo(s3location-1); return false; } );
      $('#prevSection').css('opacity', '1');
      $('#nextSection').css('opacity', '1');
    }

  else if (scrollPos<1) {
    updateBox0 ();
  }

  }

  function updateBox2 (e) {
    if (e.type == "enter") {
      $("#slideCounter").text("03");
      $("#title").text("Prep and Recovery");
      $("#diagramBack").attr('src', backDiagramURL);
      $("#diagramFront").attr('src', 'assets/diagrams/OR Platform/blueHighlights.png').stop(true,true).hide().delay(200).fadeIn("slow");
      $("#sectionBody").text("To maximize utilization, all periop bays can be used interchangeably for patient prep and recovery. At the end of the day, as the census declines, the unit can contract to a smaller footprint.");
      backDiagramURL = 'assets/diagrams/OR Platform/blueHighlights.png';
      $("#pl1,#pl2,#pl4").removeClass("activeLink").addClass("progressLink")
      $("#pl3").addClass("activeLink")
      $('#prevSection').click( function(e) {e.preventDefault(); controller.scrollTo(s2location-1); return false; } );
      $('#nextSection').click( function(e) {e.preventDefault(); controller.scrollTo(s4location-1); return false; } );
      $('#prevSection').css('opacity', '1');
      $('#nextSection').css('opacity', '1');
    }
  }

  function updateBox3 (e) {
    if (e.type == "enter") {
      $("#slideCounter").text("04");
      $("#title").text("OR and Procedure Rooms");
      $("#diagramBack").attr('src', backDiagramURL);
      $("#diagramFront").attr('src', 'assets/diagrams/OR Platform/orangeHighlight.png').stop(true,true).hide().delay(200).fadeIn("slow");
      $("#sectionBody").text("To maximize long-term flexibility, all image-guided labs are designed as hybrid ORs and located behind the red line, organized around a common clean core. Even the restricted corridors surrounding the ORs have access to daylight and views. Physicians and staff can step outside the ORs and make use of touch-down and respite space overlooking the East River.");
      backDiagramURL = 'assets/diagrams/OR Platform/orangeHighlight.png';
      $("#pl1,#pl2,#pl3").removeClass("activeLink").addClass("progressLink")
      $("#pl4").addClass("activeLink")
      $('#prevSection').click( function(e) {e.preventDefault(); controller.scrollTo(s3location-10); return false; } );
      $('#nextSection').click( function(e) {e.preventDefault(); controller.scrollTo(s2location-1); return false; } );
      $('#prevSection').css('opacity', '1');
      $('#nextSection').css('opacity', '0.2');
    }
  }

$('#prevSection').click( function(e) {e.preventDefault(); controller.scrollTo(s1location-1); return false; } );
$('#nextSection').click( function(e) {e.preventDefault(); controller.scrollTo(s2location-1); return false; } );

$('#pl1').click( function(e) {e.preventDefault(); controller.scrollTo(s1location-1); return false; } );
$('#pl2').click( function(e) {e.preventDefault(); controller.scrollTo(s2location-1); return false; } );
$('#pl3').click( function(e) {e.preventDefault(); controller.scrollTo(s3location-1); return false; } );
$('#pl4').click( function(e) {e.preventDefault(); controller.scrollTo(s4location-1); return false; } );


  // build scenes
  new ScrollMagic.Scene({duration: sectionduration, triggerHook: 0})
    .setPin("#block")
    .on("enter leave", updateBox1)
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
