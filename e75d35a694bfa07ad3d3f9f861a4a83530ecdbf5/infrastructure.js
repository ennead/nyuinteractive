var h = window.innerHeight;
var sectionduration = h/3;
var s1location = 0;
var s2location = sectionduration;
var s3location = sectionduration*2;
var s4location = sectionduration*3;
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
    $("#title").text("Materials Management");
    $("#diagramBack").attr('src', backDiagramURL);
    $("#diagramFront").attr('src', 'assets/diagrams/Infrastructure/01.png').stop(true,true).hide().delay(200).fadeIn("slow");
    $("#sectionBody").text("Just as the first floor unifies all the public space and circulation across the campus, the lower floor is a comprehensive service level connecting all buildings. Ennead developed major new materials management facilities, including clean and soiled docks. Automated guided vehicles move supplies, medicine, and meals through a new network of service tunnels.");
    backDiagramURL = 'assets/diagrams/Infrastructure/01.png';
    $("#s2,#s3,#s4").removeClass("activeStep");
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
      $("#title").text("Cogeneration Plant");
      $("#diagramBack").attr('src', backDiagramURL);
      $("#diagramFront").attr('src', 'assets/diagrams/Infrastructure/02.png').stop(true,true).hide().delay(200).fadeIn("slow");
      $("#sectionBody").text("A 7.5 megawatt combined heat and power plan (cogeneration) was developed and integrated into the base of the hospital, facing the FDR Drive. The plant is capable of producing the entire steam load for the campus, allowing NYU to disconnect from the aging and unreliable utility steam service. In the event of a prolonged power outage, the campus can operate in “Island Mode” and maintain all essential patient care and research services.");
      backDiagramURL = 'assets/diagrams/Infrastructure/02.png';
      $("#s1,#s3,#s4").removeClass("activeStep");
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
      $("#title").text("Primary Electric Service");
      $("#diagramBack").attr('src', backDiagramURL);
      $("#diagramFront").attr('src', 'assets/diagrams/Infrastructure/03.png').stop(true,true).hide().delay(200).fadeIn("slow");
      $("#sectionBody").text("Elevated well above the five-hundred-year flood plane, the new centralized electrical service replaces a series of aging and unreliable services scattered across the cellar level of the campus. Operating in conjunction with the cogeneration plant, the new service distributes power via medium-voltage lines to substations in each of the seven buildings on campus.");
      backDiagramURL = 'assets/diagrams/Infrastructure/03.png';
      $("#s1,#s2,#s4").removeClass("activeStep");
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
      $("#title").text("Perimeter Flood Protection");
      $("#diagramBack").attr('src', backDiagramURL);
      $("#diagramFront").attr('src', 'assets/diagrams/Infrastructure/04.png').stop(true,true).hide().delay(200).fadeIn("slow");
      $("#sectionBody").text("The design team worked with NYU Langone to establish new flood protection standards for the campus that anticipate sea-level rise and more frequent and severe flooding. The exterior wall, foundations, and structure of the new buildings were enhanced as part of a perimeter flood barrier system, and all major mechanical and electrical infrastructure was relocated about the new design flood elevation.");
      backDiagramURL = 'assets/diagrams/Infrastructure/04.png';
      $("#s1,#s2,#s3").removeClass("activeStep");
      $("#s4").addClass("activeStep");
      $('#prevSection').click( function(e) {e.preventDefault(); controller.scrollTo(s3location-1); return false; } );
      $('#nextSection').click( function(e) {e.preventDefault(); controller.scrollTo(s4location-1); return false; } );
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
