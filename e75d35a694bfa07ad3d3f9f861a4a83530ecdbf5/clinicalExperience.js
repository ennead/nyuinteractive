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
    $("#title").text("Overview");
    $('#videoFront').css('visibility', 'visible');
    $("#diagramBack").attr('src', backDiagramURL);
    $("#diagramFront").attr('src', '').stop(true,true).hide().delay(200).fadeIn("slow");
    $("#sectionBody").text("The Helen L. and Martin H. Kimmel Pavilion is an 830,000-sf new inpatient tower, focused on the highest acuity patients and the most technological advanced care.  The new tower is integrated with the mid-century Tisch Hospital building--the combined facility is designed to function as a single inpatient environment of 550 all-private patient rooms.");
    backDiagramURL = '';
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
      $("#title").text("Public Space and Amenities");
      $('#videoFront').css('visibility', 'hidden');
      $("#diagramBack").attr('src', backDiagramURL);
      $("#diagramFront").attr('src', 'assets/diagrams/Section/02.png').stop(true,true).hide().delay(200).fadeIn("slow");
      $("#sectionBody").text("The entry and atrium of the Kimmel Pavilion is connected to the lobby of Tisch hospital by a broad public concourse, lined with patient and staff services and retail amenities. Additional public amenities are found on the seventh floor, including a major roof terrace and garden overlooking the East River.");
      backDiagramURL = 'assets/diagrams/Section/02.png';
      $("#learnMore").removeClass("learnMoreHidden").addClass("learnMoreActive");
      $("#learnMoreLink").attr('href', 'publicSpace.html');
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
      $("#title").text("OR Platform");
      $('#videoFront').css('visibility', 'hidden');
      $("#diagramBack").attr('src', backDiagramURL);
      $("#diagramFront").attr('src', 'assets/diagrams/Section/03.png').stop(true,true).hide().delay(200).fadeIn("slow");
      $("#sectionBody").text("The diagnostic and treatment areas of the hospital are integrated and shared between the two bed towers. The Kimmel Pavilion surgical reception areas now serve as the front door for all procedure-based care on the campus.");
      backDiagramURL = 'assets/diagrams/Section/03.png';
      $("#learnMore").removeClass("learnMoreHidden").addClass("learnMoreActive");
      $("#learnMoreLink").attr('href', 'ORPlatform.html');
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
      $("#title").text("Inpatient Units");
      $('#videoFront').css('visibility', 'hidden');
      $("#diagramBack").attr('src', backDiagramURL);
      $("#diagramFront").attr('src', 'assets/diagrams/Section/04.png').stop(true,true).hide().delay(200).fadeIn("slow");
      $("#sectionBody").text("In designing the nursing units, Ennead worked with NYU Langone to reinvent the processes, technology, and experience of care. The resulting patient room and unit, standardized over the eleven floors, serve as the prototype for inpatient care across the health system.");
      backDiagramURL = 'assets/diagrams/Section/04.png';
      $("#learnMore").removeClass("learnMoreHidden").addClass("learnMoreActive");
      $("#learnMoreLink").attr('href', 'inpatientUnits.html');
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
      $("#title").text("Hassenfeld Children's Hospital");
      $('#videoFront').css('visibility', 'hidden');
      $("#diagramBack").attr('src', backDiagramURL);
      $("#diagramFront").attr('src', 'assets/diagrams/Section/05.png').stop(true,true).hide().delay(200).fadeIn("slow");
      $("#sectionBody").text("Woven through the building is a series of spaces dedicated to children and their families. Dedicated vertical circulation connects the various pediatric spaces and creates a separate and unique experience for children.");
      backDiagramURL = 'assets/diagrams/Section/05.png';
      $("#learnMore").removeClass("learnMoreHidden").addClass("learnMoreActive");
      $("#learnMoreLink").attr('href', 'hassenfeld.html');
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
