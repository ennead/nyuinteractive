var h = window.innerHeight;
var sectionduration = h/3;
var s1location = 0;
var s2location = sectionduration;
var s3location = sectionduration*2;
var s4location = sectionduration*3;
var s5location = sectionduration*4;
var s6location = sectionduration*5;
var backDiagramURL;
var hotspotActive = false;

var totalItems = $('.carousel-item').length;
var currentIndex = $('div.active').index()+1;


$(function () { // wait for document ready
  // init controller
  var controller = new ScrollMagic.Controller();
  var scrollPos = controller.scrollPos();

  $(".scrollingText").stop(true,true).hide().slideDown("slow");

  $(".spacer").css("height", h);

  // show pin state

  function updateBox0 () {

    $("#slideCounter").text("01");
    $("#title").text("Floor Organization");
    $('#videoFront').css('visibility', 'visible');
    $("#diagramBack").attr('src', '');
    $("#diagramFront").attr('src', '').stop(true,true).hide().delay(200).fadeIn("slow");
    $("#sectionBody").text("The structure of the bed tower follows the path of four train tunnels, which run beneath the site, informing the building’s geometry. The 34-bed floor is divided into two sub-units, to reduce the scale of the experience for both staff and families.");
    backDiagramURL = 'assets/diagrams/Patient Floor/01.png';
    $("#learnMore").removeClass("learnMoreActive").addClass("learnMoreHidden");
    $("#s2,#s3,#s4,#s5,#s6").removeClass("activeStep");
    $("#s1").addClass("activeStep");
    $('#prevSection').click( function(e) {e.preventDefault(); controller.scrollTo(s1location-1); return false; } );
    $('#nextSection').click( function(e) {e.preventDefault(); controller.scrollTo(s2location-1); return false; } );
    $('#prevSection').css('opacity', '0.2');
    $('#nextSection').css('opacity', '1');

  }


  function updateBox1 (e) {

    scrollPos = controller.scrollPos();

    if (e.type == "enter") {
      $("#slideCounter").text("02");
      $("#title").text("Arrival and Wayfinding");
      $('#videoFront').css('visibility', 'hidden');
      $("#diagramBack").attr('src', backDiagramURL);
      $("#diagramFront").attr('src', 'assets/diagrams/Patient Floor/02.png').stop(true,true).hide().delay(200).fadeIn("slow");
      $("#sectionBody").text("All visitors arrive at the center of the floor and are greeted at a reception area. Each corridor ends in a unique view to the outside, bringing daylight into the interior of the floor and helping family members and visitors stay oriented within the unit. ");
      backDiagramURL = 'assets/diagrams/Patient Floor/02.png';
      $("#s1,#s3,#s4,#s5,#s6").removeClass("activeStep");
      $("#s2").addClass("activeStep");
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
      $("#title").text("Offstage Servicing");
      $('#videoFront').css('visibility', 'hidden');
      $("#diagramBack").attr('src', backDiagramURL);
      $("#diagramFront").attr('src', 'assets/diagrams/Patient Floor/03.png').stop(true,true).hide().delay(200).fadeIn("slow");
      $("#sectionBody").text("A true off-stage corridor bisects the floor. All clean, soiled, equipment and medication rooms can be accessed and stocked overnight from this service core without disturbing patients and families at the perimeter.");
      backDiagramURL = 'assets/diagrams/Patient Floor/03.png';
      $("#s1,#s2,#s4,#s5,#s6").removeClass("activeStep");
      $("#s3").addClass("activeStep");
      $('#prevSection').click( function(e) {e.preventDefault(); controller.scrollTo(s2location-1); return false; } );
      $('#nextSection').click( function(e) {e.preventDefault(); controller.scrollTo(s4location-1); return false; } );
      $('#prevSection').css('opacity', '1');
      $('#nextSection').css('opacity', '1');
    }
  }

  function updateBox3 (e) {
    if (e.type == "enter") {
      $("#slideCounter").text("04");
      $("#title").text("Clinical Integration Center");
      $('#videoFront').css('visibility', 'hidden');
      $("#diagramBack").attr('src', backDiagramURL);
      $("#diagramFront").attr('src', 'assets/diagrams/Patient Floor/04.png').stop(true,true).hide().delay(200).fadeIn("slow");
      $("#sectionBody").text("Work space and collaboration areas for the care team are clustered at the corners of the floor, providing access to daylight for staff and creating small “care neighborhoods” in each of the four quadrants. Staff have ready access to both the patient rooms at the perimeter and the support spaces within the core.");
      backDiagramURL = 'assets/diagrams/Patient Floor/04.png';
      $("#s1,#s2,#s3,#s5,#s6").removeClass("activeStep");
      $("#s4").addClass("activeStep");
      $('#prevSection').click( function(e) {e.preventDefault(); controller.scrollTo(s3location-1); return false; } );
      $('#nextSection').click( function(e) {e.preventDefault(); controller.scrollTo(s5location-1); return false; } );
      $('#prevSection').css('opacity', '1');
      $('#nextSection').css('opacity', '1');
    }
  }

  function updateBox4 (e) {
    if (e.type == "enter") {
      $("#slideCounter").text("05");
      $("#title").text("Same-Handed Patient Rooms");
      $('#videoFront').css('visibility', 'hidden');
      $("#diagramBack").attr('src', backDiagramURL);
      $("#diagramFront").attr('src', 'assets/diagrams/Patient Floor/05.png').stop(true,true).hide().delay(200).fadeIn("slow");
      $("#sectionBody").text("Each floor houses thirty-four acuity-adaptable, same-handed patient rooms. Inboard toilets increase privacy and reduce noise from the corridors, while maximizing family space, light, and views within the room. ");
      backDiagramURL = 'assets/diagrams/Patient Floor/05.png';
      $("#s1,#s2,#s3,#s4,#s6").removeClass("activeStep");
      $("#s5").addClass("activeStep");
      $('#prevSection').click( function(e) {e.preventDefault(); controller.scrollTo(s4location-1); return false; } );
      $('#nextSection').click( function(e) {e.preventDefault(); controller.scrollTo(s6location-1); return false; } );
      $('#prevSection').css('opacity', '1');
      $('#nextSection').css('opacity', '1');
    }
  }

  function updateBox5 (e) {
    if (e.type == "enter") {
      $("#slideCounter").text("06");
      $("#title").text("Patient Room");
      $('#videoFront').css('visibility', 'hidden');
      $("#diagramBack").attr('src', backDiagramURL);
      $("#diagramFront").attr('src', 'assets/diagrams/Patient Floor/06.png').stop(true,true).hide().delay(200).fadeIn("slow");
      $("#sectionBody").text("All patient rooms are designed to accommodate ICU-level care. The room is organized to create clear, dedicated spaces clinicians and family, to maximize light and views, and to ensure the shortest and safest path from bed to toilet.");
      backDiagramURL = 'assets/diagrams/Patient Floor/06.png';
      $("#s1,#s2,#s3,#s4,#s5").removeClass("activeStep");
      $("#s6").addClass("activeStep");
      $('#prevSection').click( function(e) {e.preventDefault(); controller.scrollTo(s5location-1); return false; } );
      $('#nextSection').click( function(e) {e.preventDefault(); controller.scrollTo(s6location-1); return false; } );
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
$('#pl5').click( function(e) {e.preventDefault(); controller.scrollTo(s5location-1); return false; } );
$('#pl6').click( function(e) {e.preventDefault(); controller.scrollTo(s6location-1); return false; } );


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

new ScrollMagic.Scene({duration: sectionduration, offset: (sectionduration*3), triggerHook: 0})
    .setPin("#block")
    .on("enter leave", updateBox4)
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

new ScrollMagic.Scene({duration: sectionduration, offset: (sectionduration*4), triggerHook: 0})
    .setPin("#block")
    .on("enter leave", updateBox5)
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
});


$( window ).resize(function() {
  diagramFrontWidth = $("#diagramFront").width()
  diagramFrontHeight = $("#diagramFront").height();

  h = window.innerHeight;
  $(".spacer").css("height", h);
});
