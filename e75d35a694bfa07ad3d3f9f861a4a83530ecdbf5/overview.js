var h = window.innerHeight;
var sectionduration = h/3;
var s1location = 0;
var s2location = sectionduration;
var s3location = sectionduration*2;
var s4location = sectionduration*3;
var s5location = sectionduration*4;
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
    $("#title").text("NYU Langone Manhattan Campuses");
    $("#diagramBack").attr('src', backDiagramURL);
    $("#diagramFront").attr('src', 'assets/diagrams/Overview/01.jpg').stop(true,true).hide().delay(200).fadeIn("slow");
    $("#sectionBody").text("NYU Langone Medical Center occupies a ten-acre superblock on the east edge of Manhattan, a site that was consolidated and deeded to NYU by New York City in 1949. The campus developed incrementally over four decades, following a modernist “tower-in-the-park” master plan. More recently, NYU Langone developed a stand-alone orthopedic hospital about a mile to the south.");
    backDiagramURL = 'assets/diagrams/Overview/01.jpg';
    $("#learnMore").removeClass("learnMoreActive").addClass("learnMoreHidden");
    $("#s2,#s3,#s4,#s5").removeClass("activeStep");
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
      $("#title").text("First Avenue Biomedical Corridor");
      $("#diagramBack").attr('src', backDiagramURL);
      $("#diagramFront").attr('src', 'assets/diagrams/Overview/02.jpg').stop(true,true).hide().delay(200).fadeIn("slow");
      $("#sectionBody").text("NYU Langone grew out of a historic relationship with Bellevue Hospital, located just to the south along First Avenue. NYU physicians continue to provide the care at Bellevue, and students do much of their training there. These two medical centers, along with the VA Hospital, the NYU College of Nursing and Dentistry, and Alexandria Center for Life Science, make up a dense institutional precinct dedicated to healthcare and biomedical research and education.");
      backDiagramURL = 'assets/diagrams/Overview/02.jpg';
      $("#s1,#s3,#s4,#s5").removeClass("activeStep");
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
      $("#title").text("Extending into the Neighborhood");
      $("#diagramBack").attr('src', backDiagramURL);
      $("#diagramFront").attr('src', 'assets/diagrams/Overview/03.jpg').stop(true,true).hide().delay(200).fadeIn("slow");
      $("#sectionBody").text("To accommodate the projected growth of nearly 2.5 million square feet, the master plan identified a target area for growth and expansion beyond the historic superblock. Administrative programs and ambulatory care would be clustered along the busy 34th Street axis, which connects the main campus to the Lexington Avenue subway, while student housing and research would remain within the institutional core along both sides of First Avenue.");
      backDiagramURL = 'assets/diagrams/Overview/03.jpg';
      $("#s1,#s2,#s4,#s5").removeClass("activeStep");
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
      $("#title").text("Planning for Growth");
      $("#diagramBack").attr('src', backDiagramURL);
      $("#diagramFront").attr('src', 'assets/diagrams/Overview/04.jpg').stop(true,true).hide().delay(200).fadeIn("slow");
      $("#sectionBody").text("With more and more patient care taking place in an ambulatory setting, many programs which were originally located on the main campus or embedded within the hospital, could be relocated to new facilities that were more accessible by transit and more convenient to where people live and work. This shift in turn opened up opportunities to expand and modernize the core inpatient, research, and education programs that benefit from close integration within the academic campus environment.");
      backDiagramURL = 'assets/diagrams/Overview/04.jpg';
      $("#s1,#s2,#s3,#s5").removeClass("activeStep");
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
      $("#title").text("Becoming a Regional Healthcare System");
      $("#diagramBack").attr('src', backDiagramURL);
      $("#diagramFront").attr('src', 'assets/diagrams/Overview/06.jpg').stop(true,true).hide().delay(200).fadeIn("slow");
      $("#sectionBody").text("As the transformation of the main campus neared completion, NYU Langone began to evolve from a Manhattan-based academic medical center to a regional healthcare system with multiple hospital sites, each with a corresponding ambulatory network. Ennead is now engaged in a similar master planning process for the new Brooklyn and Long Island campuses.");
      backDiagramURL = 'assets/diagrams/Overview/06.jpg';
      $("#s1,#s2,#s3,#s4").removeClass("activeStep");
      $("#s5").addClass("activeStep");
      $('#prevSection').click( function(e) {e.preventDefault(); controller.scrollTo(s4location-1); return false; } );
      $('#nextSection').click( function(e) {e.preventDefault(); controller.scrollTo(s5location-1); return false; } );
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
});


$( window ).resize(function() {
  diagramFrontWidth = $("#diagramFront").width()
  diagramFrontHeight = $("#diagramFront").height();

  h = window.innerHeight;
  $(".spacer").css("height", h);
});
