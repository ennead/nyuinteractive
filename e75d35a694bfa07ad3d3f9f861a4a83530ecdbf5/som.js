var h = window.innerHeight;
var sectionduration = h/3;
var s1location = 0;
var s2location = sectionduration;
var s3location = sectionduration*2;
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
    $("#title").text("Public Space");
    $("#diagramBack").attr('src', backDiagramURL);
    $("#diagramFront").attr('src', 'assets/diagrams/SOM/01.png').stop(true,true).hide().delay(200).fadeIn("slow");
    $("#sectionBody").text("The new research tower serves as the front door for the School of Medicine, and its double-height lobby is designed as an academic commons, with informal meeting spaces, conference space, and café. Across Alumni Courtyard is the new Medical Library and student study space, including group study rooms and project-based learning labs.");
    backDiagramURL = 'assets/diagrams/SOM/01.png';
    $("#s2,#s3").removeClass("activeStep");
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
      $("#title").text("Circulation");
      $("#diagramBack").attr('src', backDiagramURL);
      $("#diagramFront").attr('src', 'assets/diagrams/SOM/02.png').stop(true,true).hide().delay(200).fadeIn("slow");
      $("#sectionBody").text("With the addition of a new bridge connecting a pair of research towers, a continuous loop of circulation was created, wrapping around Alumni Courtyard on two levels. This clear circulation loop provides new clarity and coherence to the set of spaces that make up the School of Medicine.");
      backDiagramURL = 'assets/diagrams/SOM/02.png';
      $("#s1,#s3").removeClass("activeStep");
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
      $("#title").text("Academic Resources");
      $("#diagramBack").attr('src', backDiagramURL);
      $("#diagramFront").attr('src', 'assets/diagrams/SOM/03.png').stop(true,true).hide().delay(200).fadeIn("slow");
      $("#sectionBody").text("A variety of formal and informal meeting and instructional space is organized on two levels, surrounding Alumni Courtyard. In addition to teaching and conference space, the academic amenities include a cafeteria, the faculty dining room, the medical library and student study space, and the office of the Dean of Students.");
      backDiagramURL = 'assets/diagrams/SOM/03.png';
      $("#s1,#s2").removeClass("activeStep");
      $("#s3").addClass("activeStep");
      $('#prevSection').click( function(e) {e.preventDefault(); controller.scrollTo(s2location-1); return false; } );
      $('#nextSection').click( function(e) {e.preventDefault(); controller.scrollTo(s3location-1); return false; } );
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


$( window ).resize(function() {
  diagramFrontWidth = $("#diagramFront").width()
  diagramFrontHeight = $("#diagramFront").height();

  h = window.innerHeight;
  $(".spacer").css("height", h);
});
