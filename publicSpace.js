var h = window.innerHeight;
var sectionduration = h/2;
var s1location = 0;
var s2location = sectionduration;
var backDiagramURL;


$(function () { // wait for document ready
  // init controller
  var controller = new ScrollMagic.Controller();
  var scrollPos = controller.scrollPos();

  $(".scrollingText").stop(true,true).hide().slideDown("slow");

  var diagramFrontWidth = $("#diagramFront").width()
  var diagramFrontHeight = $("#diagramFront").height();
  console.log(diagramFrontWidth, diagramFrontHeight);
  $("hotspotContainer").width(diagramFrontWidth);
  $("hotspotContainer").height(diagramFrontHeight);



  // show pin state

function updateBox0(){
   $("#slideCounter").text("01");
   $("#title").text("Ground Floor");
   $("#diagramBack").attr('src', backDiagramURL);
   $("#diagramFront").attr('src', 'assets/diagrams/Public Space/kimmelTischGround.png').stop(true,true).hide().fadeIn("slow");
   $("#sectionBody").text("The patient-care concourse connects the lobbies of the two inpatient towers. A coffee bar, retail pharmacy, giftshop, and cafeteria are all located along the concourse.");
   backDiagramURL = 'assets/diagrams/Public Space/kimmelTischGround.png';
   $("#pl2").removeClass("activeLink").addClass("progressLink")
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
      $("#title").text("Public Amenity Floor");
      $("#diagramBack").attr('src', backDiagramURL);
      $("#diagramFront").attr('src', 'assets/diagrams/Public Space/kimmelFloor7.png').stop(true,true).hide().delay(200).fadeIn("slow");
      $("#sectionBody").text("Between the podium and the bed tower, the seventh floor houses a public café and conference center, the Child-life space and family resource center for the children’s hospital, and a rooftop terrace and garden.");
      backDiagramURL = 'assets/diagrams/Public Space/kimmelFloor7.png';
      $("#pl1").removeClass("activeLink").addClass("progressLink")
      $("#pl2").addClass("activeLink")
      $('#prevSection').click( function(e) {e.preventDefault(); controller.scrollTo(s1location-1); return false; } );
      $('#nextSection').click( function(e) {e.preventDefault(); controller.scrollTo(s3location-1); return false; } );
      $('#prevSection').css('opacity', '1');
      $('#nextSection').css('opacity', '0.2');
    }

  else if (scrollPos<1) {
    updateBox0 ();
  }
  }

$('#prevSection').click( function(e) {e.preventDefault(); controller.scrollTo(s1location-1); return false; } );
$('#nextSection').click( function(e) {e.preventDefault(); controller.scrollTo(s2location-1); return false; } );

$('#pl1').click( function(e) {e.preventDefault(); controller.scrollTo(s1location-1); return false; } );
$('#pl2').click( function(e) {e.preventDefault(); controller.scrollTo(s2location-1); return false; } );


  // build scenes
  new ScrollMagic.Scene({duration: sectionduration, triggerHook: 0})
    .setPin("#block")
    .on("enter leave", updateBox1)
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

});

$( window ).resize(function() {
  diagramFrontWidth = $("#diagramFront").width()
  diagramFrontHeight = $("#diagramFront").height();
  console.log("diagram: ",diagramFrontWidth, diagramFrontHeight);
  $("hotspotContainer").width(diagramFrontWidth);
  $("hotspotContainer").height(diagramFrontHeight);
  hpWidth = $("#hotspotContainer").width();
  hpHeight = $("#hotspotContainer").height();
  console.log("hotspots: ",hpWidth, hpHeight);
});
