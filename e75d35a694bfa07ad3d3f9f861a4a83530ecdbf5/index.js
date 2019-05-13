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
    $("#title").text("Overview / Masterplan");
    // $("#diagramBack").attr('src', backDiagramURL);
    // $("#diagramFront").attr('src', 'assets/diagrams/index/original/01.png').stop(true,true).hide().delay(200).fadeIn("slow");
    $("#sectionBody").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.");
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
      $("#sectionBody").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.");
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
      $("#sectionBody").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.");
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
      $("#title").text("School of Medicine");
      // $("#diagramBack").attr('src', backDiagramURL);
      // $("#diagramFront").attr('src', 'assets/diagrams/index/original/01.png').stop(true,true).hide().delay(200).fadeIn("slow");
      $("#sectionBody").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.");
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
      $("#title").text("Incorporating Resilient Infrastructure");
      // $("#diagramBack").attr('src', backDiagramURL);
      // $("#diagramFront").attr('src', 'assets/diagrams/index/original/01.png').stop(true,true).hide().delay(200).fadeIn("slow");
      $("#sectionBody").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.");
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
