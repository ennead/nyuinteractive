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

  $('#bImage').css("height", h);

  // show pin state

  function updateBox0 () {

    $("#slideCounter").text("01");
    $("#title").text("Campus Transformation");
    // $("#diagramBack").attr('src', backDiagramURL);
    // $("#diagramFront").attr('src', 'assets/diagrams/index/original/01.png').stop(true,true).hide().delay(200).fadeIn("slow");
    $("#sectionBody").text("Over the course of a decade, Ennead worked with NYU Langone Health to transform their midtown Manhattan campus and create a world-class integrated academic medical center. Beginning with a comprehensive master plan in 2008, Ennead created a road map for expanding the campus into the surrounding neighborhood, rationalizing the program adjacencies, replacing obsolete buildings and infrastructure, and developing 1.3 million square feet for new research, patient care, and education.");
    backDiagramURL = 'assets/diagrams/index/original/01.png';
    $("#s2,#s3,#s4,#s5").removeClass("activeStep");
    $("#s1").addClass("activeStep");
    $("#learnMoreLink").attr('href', 'overview.html');
    $('#prevSection').click( function(e) {e.preventDefault(); controller.scrollTo(s1location); return false; } );
    $('#nextSection').click( function(e) {e.preventDefault(); controller.scrollTo(s2location-1); return false; } );
    $('#prevSection').css('opacity', '0.2');
    $('#nextSection').css('opacity', '1');

  }


  function updateBox1 (e) {

    scrollPos = controller.scrollPos();

    if (e.type == "enter") {
      $("#slideCounter").text("02");
      $("#title").text("Designing the Patient-Care Experience");
      // $("#diagramBack").attr('src', backDiagramURL);
      // $("#diagramFront").attr('src', 'assets/diagrams/index/original/01.png').stop(true,true).hide().delay(200).fadeIn("slow");
      $("#sectionBody").text("The Campus Transformation initiative called for the development of a consolidated hospital complex on the north side of the campus, integrating the legacy Tisch Hospital with a new high-tech tower OR and bed tower. The combined facility will hold 600 beds and 50 operating and procedure rooms, the first in New York City to provide all private patient rooms. In designing the new hospital, Ennead worked with NYU Langone leadership to re-imagine all of the processes involved in the delivery of care and to establish new standards for patient and staff experience, safety, efficiency, sustainability, and resilience. ");
      backDiagramURL = 'assets/diagrams/index/original/01.png';
      $("#s1,#s3,#s4,#s5").removeClass("activeStep");
      $("#s2").addClass("activeStep");
      $("#learnMoreLink").attr('href', 'clinicalExperience.html');
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
      $("#title").text("Creating an Integrated Campus");
      // $("#diagramBack").attr('src', backDiagramURL);
      // $("#diagramFront").attr('src', 'assets/diagrams/index/original/01.png').stop(true,true).hide().delay(200).fadeIn("slow");
      $("#sectionBody").text("The seven major buildings on campus are integrated at the ground level, creating a single coherent public realm. As part of the Campus Transformation, Ennead reorganized and redesigned the network of public spaces and outdoor courtyards across the campus, clarifying circulation and wayfinding and developing a series of branded retail and amenity spaces.");
      backDiagramURL = 'assets/diagrams/index/original/01.png';
      $("#s1,#s2,#s4,#s5").removeClass("activeStep");
      $("#s3").addClass("activeStep");
      $("#learnMoreLink").attr('href', 'haci.html');
      $('#prevSection').click( function(e) {e.preventDefault(); controller.scrollTo(s2location-1); return false; } );
      $('#nextSection').click( function(e) {e.preventDefault(); controller.scrollTo(s4location-1); return false; } );
      $('#prevSection').css('opacity', '1');
      $('#nextSection').css('opacity', '1');
    }
  }

  function updateBox3 (e) {
    if (e.type == "enter") {
      $("#slideCounter").text("04");
      $("#title").text("A Home for the School of Medicine");
      // $("#diagramBack").attr('src', backDiagramURL);
      // $("#diagramFront").attr('src', 'assets/diagrams/index/original/01.png').stop(true,true).hide().delay(200).fadeIn("slow");
      $("#sectionBody").text("The Master Plan created for the first time a coherent identity and sense of place for the School of Medicine, taking advantage of new construction within the lower public floors of the new research tower and strategic renovation and adaptive re-use of the other spaces surrounding Alumni Courtyard.");
      backDiagramURL = 'assets/diagrams/index/original/01.png';
      $("#s1,#s2,#s3,#s5").removeClass("activeStep");
      $("#s4").addClass("activeStep");
      $("#learnMoreLink").attr('href', 'som.html');
      $('#prevSection').click( function(e) {e.preventDefault(); controller.scrollTo(s3location-1); return false; } );
      $('#nextSection').click( function(e) {e.preventDefault(); controller.scrollTo(s5location-1); return false; } );
      $('#prevSection').css('opacity', '1');
      $('#nextSection').css('opacity', '1');
    }
  }

  function updateBox4 (e) {
    if (e.type == "enter") {
      $("#slideCounter").text("05");
      $("#title").text("A Comprehensive Resiliency Plan");
      // $("#diagramBack").attr('src', backDiagramURL);
      // $("#diagramFront").attr('src', 'assets/diagrams/index/original/01.png').stop(true,true).hide().delay(200).fadeIn("slow");
      $("#sectionBody").text("Located on a vulnerable stretch of the East River coastline, NYU Langone developed and implemented a resiliency master plan including elevated infrastructure, on-site generation of heat and power, and a perimeter flood barrier with operable flood gates.");
      backDiagramURL = 'assets/diagrams/index/original/01.png';
      $("#s1,#s2,#s3,#s4").removeClass("activeStep");
      $("#s5").addClass("activeStep");
      $("#learnMoreLink").attr('href', 'infrastructure.html');
      $('#prevSection').click( function(e) {e.preventDefault(); controller.scrollTo(s4location-1); return false; } );
      $('#nextSection').click( function(e) {e.preventDefault(); controller.scrollTo(s5location-1); return false; } );
      $('#prevSection').css('opacity', '1');
      $('#nextSection').css('opacity', '1');
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
});


$( window ).resize(function() {
  diagramFrontWidth = $("#diagramFront").width()
  diagramFrontHeight = $("#diagramFront").height();

  h = window.innerHeight;
  $(".spacer").css("height", h);
});
