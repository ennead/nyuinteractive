var h = window.innerHeight;
var sectionduration = h/2;
var s1location = 0;
var s2location = sectionduration;
var backDiagramURL;
var hotspotActive = false;

var totalItems = $('.carousel-item').length;
var currentIndex = $('div.active').index()+1;


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
  $("#carousel").carousel();

  // show pin state

function updateBox0(){

  closeHotspot();

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
   $('.box0').css('visibility', 'visible');
   $('.box1').css('visibility', 'hidden');
}

  function updateBox1 (e) {

    scrollPos = controller.scrollPos();
    closeHotspot();

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
      $('.box0').css('visibility', 'hidden');
      $('.box1').css('visibility', 'visible');
    }

  else if (scrollPos<1) {
    updateBox0 ();
    closeHotspot();
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

function openHotspot() {
  $('#hotspotWindow').css("visibility", "visible");
  hotspotActive= true;
  $("#imageCarousel").carousel(0);
  updateImageCount()
}

function closeHotspot() {
  $('#hotspotWindow').css('visibility', 'hidden');
  hotspotActive= false;
  updateImageCount()
}

function hpcontent1() {
  $("#hotspotTitle").text("Kimmel Atrium");
  $("#hotspotBody").text("The atrium is the main front door to the hospital and provides clear access to the surgical reception and waiting areas, which are located on the open balconies above.");
}

function hpcontent2() {
  $("#hotspotTitle").text("Tisch Dining Hall");
  $("#hotspotBody").text("The atrium is the main front door to the hospital and provides clear access to the surgical reception and waiting areas, which are located on the open balconies above.");
}

function hpcontent3() {
  $("#hotspotTitle").text("Pharmacy");
  $("#hotspotBody").text("Something about the pharmacy, make it long enough. Something about the pharmacy, make it long enough. Something about the pharmacy, make it long enough.");
}

function hpcontent4() {
  $("#hotspotTitle").text("Courtyard");
  $("#hotspotBody").text("The atrium is the main front door to the hospital and provides clear access to the surgical reception and waiting areas, which are located on the open balconies above.");
}

function updateImageCount() {
  var totalItems = $('.carousel-item').length;
  var currentIndex = $('div.active').index()+1;

  $("#imageIndex").text("0"+currentIndex);
  $("#imageCount").text("0"+totalItems);
  console.log(currentIndex);
}

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

$( document ).ready(function() {
  $('.box').click(openHotspot);
  $('#hotspot01').click(hpcontent1);
  $('#hotspot02').click(hpcontent2);
  $('#hotspot03').click(hpcontent3);
  $('#hotspot04').click(hpcontent4);

  $('#hotspotClose').click(closeHotspot);
  $('#imageCarousel').on('slid.bs.carousel', function (e) {
    updateImageCount()})
});
