var h = window.innerHeight;
var sectionduration = (h/3)*2;
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
  $("hotspotContainer").width(diagramFrontWidth);
  $("hotspotContainer").height(diagramFrontHeight);
  $("#carousel").carousel();

  $(".spacer").css("height", h);

  // show pin state

function updateBox0(){

  closeHotspot();

   $("#slideCounter").text("01");
   $("#title").text("Ground Floor");
   $("#diagramBack").attr('src', backDiagramURL);
   $("#diagramFront").attr('src', 'assets/diagrams/Public Space/kimmelTischGround.png').stop(true,true).hide().fadeIn("slow");
   $("#sectionBody").text("The patient-care concourse connects the lobbies of the two inpatient towers. A coffee bar, retail pharmacy, giftshop, and cafeteria are all located along the concourse.");
   backDiagramURL = 'assets/diagrams/Public Space/kimmelTischGround.png';
   $("#s2").removeClass("activeStep");
   $("#s1").addClass("activeStep");
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
      $("#s1").removeClass("activeStep");
      $("#s2").addClass("activeStep");
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
  $('#hotspotWindow').removeClass("windowHidden");
  $('#hotspotWindow').addClass("windowVisible");
  hotspotActive= true;
  $("#imageCarousel").carousel(0);
  updateImageCount()
}

function closeHotspot() {
  $('#hotspotWindow').css('visibility', 'hidden');
  $('#hotspotWindow').removeClass("windowVisible");
  $('#hotspotWindow').addClass("windowHidden");
  hotspotActive= false;
  updateImageCount()
}

function hpcontent1() {
  $("#hotspotTitle").text("Kimmel Atrium");
  $("#hotspotBody").text("The atrium is the main front door to the hospital and provides clear access to the surgical reception and waiting areas, which are located on the open balconies above.");
  $("#carousel01").attr('src', 'assets/photos/kimmelAtrium01.png');
  $("#carousel02").attr('src', 'assets/photos/kimmelAtrium02.png');
  $("#carousel03").attr('src', 'assets/photos/kimmelAtrium03.png');
  $("#carouselNav").css("visibility", "visible");
}

function hpcontent2() {
  $("#hotspotTitle").text("Tisch Cafe");
  $("#hotspotBody").text("The new cafeteria, overlooking First Avenue, focuses on fresh, healthy food.  Ennead designed five retail food venues across the campus, working with Danny Meyer’s Union Square Events consulting group.");
  $("#carousel01").attr('src', 'assets/photos/tischCafe01.png');
  $("#carousel02").attr('src', 'assets/photos/tischCafe02.png');
  $("#carousel03").attr('src', 'assets/photos/tischCafe03.png');
  $("#carouselNav").css("visibility", "visible");
}

function hpcontent3() {
  $("#hotspotTitle").text("Pharmacy");
  $("#hotspotBody").text("The retail pharmacy is designed to provide prescription medication, consultation and vaccinations, as well as over-the-counter convenience products. ");
  $("#carousel01").attr('src', 'assets/photos/pharmacy01.png');
  $("#carousel02").attr('src', 'assets/photos/pharmacy02.png');
  $("#carousel03").attr('src', 'assets/photos/pharmacy03.png');
  $("#carouselNav").css("visibility", "visible");
}

function hpcontent4() {
  $("#hotspotTitle").text("Courtyard");
  $("#hotspotBody").text("The concourse leads to the main courtyard at the heart of the campus. Re-designed by Ennead, the central green space is a critical space of respite for staff, students, and patients.");
  $("#carousel01").attr('src', 'assets/photos/tischCourtyard01.png');

  $("#carouselNav").css("visibility", "hidden");
}

function hpcontent5() {
  $("#hotspotTitle").text("Children's Hospital Lobby");
  $("#hotspotBody").text("A separate children’s lobby and dedicated vertical circulation create a separate and unique experience for children and their families.");
  $("#carousel01").attr('src', 'assets/photos/hassenfeldLobby01.png');

  $("#carouselNav").css("visibility", "hidden");

}

function hpcontent6() {
  $("#hotspotTitle").text("Gift Shop");
  $("#hotspotBody").text("Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum.");
  $("#carousel01").attr('src', 'assets/photos/giftShop01.png');

  $("#carouselNav").css("visibility", "hidden");
}

function hpcontent7() {
  $("#hotspotTitle").text("Tisch Lobby");
  $("#hotspotBody").text("The lobby of Tisch hospital was redesigned and expanded, and four new glass-enclosed elevators were added to the outside of the building to correct a historic deficiency in the building.");
  $("#carousel01").attr('src', 'assets/photos/tischLobby01.png');

  $("#carouselNav").css("visibility", "hidden");

}

function hpcontent8() {
  $("#hotspotTitle").text("Meditation Room");
  $("#hotspotBody").text("Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum.");
  $("#carousel01").attr('src', 'assets/photos/meditationRoom01.png');

  $("#carouselNav").css("visibility", "hidden");
}

function hpcontent9() {
  $("#hotspotTitle").text("NE Terrace");
  $("#hotspotBody").text("Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum.");
  $("#carousel01").attr('src', 'assets/photos/nePatio01.png');

  $("#carouselNav").css("visibility", "hidden");
}

function hpcontent9() {
  $("#hotspotTitle").text("NE Terrace");
  $("#hotspotBody").text("The terrace includes a dining area, a more densely planted garden, and a dedicated play space for children.");
  $("#carousel01").attr('src', 'assets/photos/nePatio01.png');

  $("#carouselNav").css("visibility", "hidden");
}

function hpcontent10() {
  $("#hotspotTitle").text("SE Terrace");
  $("#hotspotBody").text("The terrace includes a dining area, a more densely planted garden, and a dedicated play space for children.");
  $("#carousel01").attr('src', 'assets/photos/sePatio01.png');

  $("#carouselNav").css("visibility", "hidden");
}

function hpcontent11() {
  $("#hotspotTitle").text("Kimmel Cafe");
  $("#hotspotBody").text("The seventh-floor café and terrace allows for outdoor dining, overlooking the East River.");
  $("#carousel01").attr('src', 'assets/photos/kimmelCafe01.png');
  $("#carousel02").attr('src', 'assets/photos/kimmelCafe02.png');

  $("#carouselNav").css("visibility", "visible");
}

function hpcontent12() {
  $("#hotspotTitle").text("Conference Center");
  $("#hotspotBody").text("The pre-function and conference spaces is a critical node of academic life embedded within the clinical environment.");
  $("#carousel01").attr('src', 'assets/photos/businessCenter01.png');
  $("#carousel02").attr('src', 'assets/photos/businessCenter02.png');
  $("#carousel03").attr('src', 'assets/photos/conferenceRoom01.png');

  $("#carouselNav").css("visibility", "visible");
}

// function hpcontent13() {
//   $("#hotspotTitle").text("Conference Rooms");
//   $("#hotspotBody").text("Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum.");
//   $("#carousel01").attr('src', 'assets/photos/conferenceRoom01.png');
//
//   $("#carouselNav").css("visibility", "hidden");
// }

function hpcontent14() {
  $("#hotspotTitle").text("Multipurpose Room");
  $("#hotspotBody").text("This flexible space within the Children’s Hospital can be used for academic and departmental programs, child-life activities, performances, and holiday parties.");
  $("#carousel01").attr('src', 'assets/photos/multipurposeRoom01.png');

  $("#carouselNav").css("visibility", "hidden");
}

function hpcontent15() {
  $("#hotspotTitle").text("Hassenfeld Reception");
  $("#hotspotBody").text("Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum.");
  $("#carousel01").attr('src', 'assets/photos/hassenfeldDesk01.png');

  $("#carouselNav").css("visibility", "hidden");
}

function hpcontent16() {
  $("#hotspotTitle").text("Children's Center");
  $("#hotspotBody").text("The Children’s Center supports child-life activities, including classrooms, a play space, and a broadcast room.");
  $("#carousel01").attr('src', 'assets/photos/childrensCenter01.png');

  $("#carouselNav").css("visibility", "hidden");
}

function hpcontent17() {
  $("#hotspotTitle").text("Hassenfeld Terrace");
  $("#hotspotBody").text("The terrace includes a dining area, a more densely planted garden, and a dedicated play space for children.");
  $("#carousel01").attr('src', 'assets/photos/hassenfeldPatio01.png');

  $("#carouselNav").css("visibility", "hidden");
}

function updateImageCount() {
  var totalItems = $('.carousel-item').length;
  var currentIndex = $('div.active').index()+1;

  $("#imageIndex").text("0"+currentIndex);
  $("#imageCount").text("0"+totalItems);
}

$( window ).resize(function() {
  diagramFrontWidth = $("#diagramFront").width()
  diagramFrontHeight = $("#diagramFront").height();
  $("hotspotContainer").width(diagramFrontWidth);
  $("hotspotContainer").height(diagramFrontHeight);
  hpWidth = $("#hotspotContainer").width();
  hpHeight = $("#hotspotContainer").height();

  h = window.innerHeight;
  $(".spacer").css("height", h);
});

$( document ).ready(function() {
  $('.box').click(openHotspot);
  $('#hotspot01').click(hpcontent1);
  $('#hotspot02').click(hpcontent2);
  $('#hotspot03').click(hpcontent3);
  $('#hotspot04').click(hpcontent4);
  $('#hotspot05').click(hpcontent5);
  $('#hotspot06').click(hpcontent6);
  $('#hotspot07').click(hpcontent7);
  $('#hotspot08').click(hpcontent8);

  // 7th floor
  $('#hotspot09').click(hpcontent9);
  $('#hotspot10').click(hpcontent10);
  $('#hotspot11').click(hpcontent11);
  $('#hotspot12').click(hpcontent12);
  // $('#hotspot13').click(hpcontent13);
  $('#hotspot14').click(hpcontent14);
  $('#hotspot15').click(hpcontent15);
  $('#hotspot16').click(hpcontent16);
  $('#hotspot17').click(hpcontent17);

  $('#hotspotClose').click(closeHotspot);
  $('#imageCarousel').on('slid.bs.carousel', function (e) {
    updateImageCount()})
});
