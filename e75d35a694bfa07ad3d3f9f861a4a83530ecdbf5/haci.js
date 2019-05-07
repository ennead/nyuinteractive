var h = window.innerHeight;
var sectionduration = (h/3)*2;
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

  $("#carousel").carousel();

  // show pin state

function updateBox0(){

  closeHotspot();

   $("#slideCounter").text("01");
   $("#title").text("Public Experience");
   $("#diagramBack").attr('src', backDiagramURL);
   $("#diagramFront").attr('src', 'assets/diagrams/HACI/01.png').stop(true,true).hide().fadeIn("slow");
   $("#sectionBody").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.");
   backDiagramURL = 'assets/diagrams/HACI/01.png';
   $("#pl2,#pl3,#pl4").removeClass("activeLink").addClass("progressLink")
   $("#pl1").addClass("activeLink")
   $('#prevSection').click( function(e) {e.preventDefault(); controller.scrollTo(s1location-1); return false; } );
   $('#nextSection').click( function(e) {e.preventDefault(); controller.scrollTo(s2location-1); return false; } );
   $('#prevSection').css('opacity', '0.2');
   $('#nextSection').css('opacity', '1');
}

  function updateBox1 (e) {

    scrollPos = controller.scrollPos();
    closeHotspot();

    if (e.type == "enter") {
      $("#slideCounter").text("02");
      $("#title").text("Integration of Greenspace");
      $("#diagramBack").attr('src', backDiagramURL);
      $("#diagramFront").attr('src', 'assets/diagrams/HACI/02.png').stop(true,true).hide().delay(200).fadeIn("slow");
      $("#sectionBody").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.");
      backDiagramURL = 'assets/diagrams/HACI/02.png';
      $("#pl1,#pl3,#pl4").removeClass("activeLink").addClass("progressLink")
      $("#pl2").addClass("activeLink")
      $('#prevSection').click( function(e) {e.preventDefault(); controller.scrollTo(s1location-1); return false; } );
      $('#nextSection').click( function(e) {e.preventDefault(); controller.scrollTo(s3location-1); return false; } );
      $('#prevSection').css('opacity', '1');
      $('#nextSection').css('opacity', '1');
      $('.box0').css('visibility', 'hidden');
      $('.box1').css('visibility', 'visible');
    }

  else if (scrollPos<1) {
    updateBox0 ();
    closeHotspot();
  }
  }

  function updateBox2 (e) {
    if (e.type == "enter") {
      $("#slideCounter").text("03");
      $("#title").text("Unified Public Circualtion");
      $("#diagramBack").attr('src', backDiagramURL);
      $("#diagramFront").attr('src', 'assets/diagrams/HACI/03.png').stop(true,true).hide().delay(200).fadeIn("slow");
      $("#sectionBody").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.");
      backDiagramURL = 'assets/diagrams/HACI/03.png';
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
      $("#title").text("Visitor Amenities");
      $("#diagramBack").attr('src', backDiagramURL);
      $("#diagramFront").attr('src', 'assets/diagrams/HACI/04.png').stop(true,true).hide().delay(200).fadeIn("slow");
      $("#sectionBody").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.");
      backDiagramURL = 'assets/diagrams/HACI/04.png';
      $("#pl1,#pl2,#pl3").removeClass("activeLink").addClass("progressLink")
      $("#pl4").addClass("activeLink")
      $('#prevSection').click( function(e) {e.preventDefault(); controller.scrollTo(s2location-1); return false; } );
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

  $('#hotspotClose').click(closeHotspot);
  $('#imageCarousel').on('slid.bs.carousel', function (e) {
    updateImageCount()})
  $('.box').click(openHotspot);
});
