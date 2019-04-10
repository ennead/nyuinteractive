var h = window.innerHeight;
var sectionduration = h/2;
var s1location = 0;
var s2location = sectionduration;
var s3location = sectionduration*2;
var s4location = sectionduration*3;
var s5location = sectionduration*4;
var backDiagramURL;
var learnMoreLink;

$(function () { // wait for document ready
  // init controller
  var controller = new ScrollMagic.Controller();
  var scrollPos = controller.scrollPos();

  $(".scrollingText").stop(true,true).hide().slideDown("slow");

  // show pin state

  function updateBox0 () {
    $("#slideCounter").text("01");
    $("#title").text("Overview");
    $("#diagramBack").attr('src', backDiagramURL);
    $("#diagramFront").attr('src', 'assets/diagrams/Section/fullsection.png').stop(true,true).hide().fadeIn("slow");
    $("#sectionBody").text("The Helen L. and Martin H. Kimmel Pavilion is an 830,000-sf new inpatient tower, focused on the highest acuity patients and the most technological advanced care.  The new tower is integrated with the mid-century Tisch Hospital building--the combined facility is designed to function as a single inpatient environment of 550 all-private patient rooms.");
    backDiagramURL = 'assets/diagrams/Section/fullsection.png';
    $("#learnMore").removeClass("learnMoreActive").addClass("learnMoreHidden");
    $("#pl2,#pl3,#pl4,#pl5").removeClass("activeLink").addClass("progressLink");
    $("#pl1").addClass("activeLink");
    $('#prevSection').click( function(e) {e.preventDefault(); controller.scrollTo(s1location); return false; } );
    $('#nextSection').click( function(e) {e.preventDefault(); controller.scrollTo(s2location); return false; } );
    $('#prevSection').css('opacity', '0.2');
    $('#nextSection').css('opacity', '1');

  }


  function updateBox1 (e) {

    scrollPos = controller.scrollPos();

    if (e.type == "enter") {
      $("#slideCounter").text("02");
      $("#title").text("Patient Floor");
      $("#diagramBack").attr('src', backDiagramURL);
      $("#diagramFront").attr('src', 'assets/diagrams/Section/patientFloors_section.png').stop(true,true).hide().delay(200).fadeIn("slow");
      $("#sectionBody").text("In designing the nursing units, Ennead worked with NYU Langone to reinvent the processes, technology, and experience of care. The resulting patient room and unit, standardized over the eleven floors, serve as the prototype for inpatient care across the health system.");
      backDiagramURL = 'assets/diagrams/Section/patientFloors_section.png';
      $("#learnMore").removeClass("learnMoreActive").addClass("learnMoreHidden");
      $("#pl1,#pl3,#pl4,#pl5").removeClass("activeLink").addClass("progressLink");
      $("#pl2").addClass("activeLink");
      $('#prevSection').click( function(e) {e.preventDefault(); controller.scrollTo(s1location); return false; } );
      $('#nextSection').click( function(e) {e.preventDefault(); controller.scrollTo(s3location); return false; } );
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
      $("#title").text("Public Space and Amenities");
      $("#diagramBack").attr('src', backDiagramURL);
      $("#diagramFront").attr('src', 'assets/diagrams/Section/public_section.png').stop(true,true).hide().fadeIn("slow");
      $("#sectionBody").text("The entry and atrium of the Kimmel Pavilion is connected to the lobby of Tisch hospital by a broad public concourse, lined with patient and staff services and retail amenities. Additional public amenities are found on the seventh floor, including a major roof terrace and garden overlooking the East River.");
      backDiagramURL = 'assets/diagrams/Section/public_section.png';
      learnMoreLink = "publicSpace.html";
      $("#learnMore").attr('href', learnMoreLink);
      $("#learnMore").removeClass("learnMoreHidden").addClass("learnMoreActive");
      $("#pl1,#pl2,#pl4,#pl5").removeClass("activeLink").addClass("progressLink");
      $("#pl3").addClass("activeLink");
      $('#prevSection').click( function(e) {e.preventDefault(); controller.scrollTo(s2location); return false; } );
      $('#nextSection').click( function(e) {e.preventDefault(); controller.scrollTo(s4location); return false; } );
      $('#prevSection').css('opacity', '1');
      $('#nextSection').css('opacity', '1');
    }
  }

  function updateBox3 (e) {
    if (e.type == "enter") {
      $("#slideCounter").text("04");
      $("#title").text("OR Platform");
      $("#diagramBack").attr('src', backDiagramURL);
      $("#diagramFront").attr('src', 'assets/diagrams/Section/or_section.png').stop(true,true).hide().delay(200).fadeIn("slow");
      $("#sectionBody").text("The diagnostic and treatment areas of the hospital are integrated and shared between the two bed towers. The Kimmel Pavilion surgical reception areas now serve as the front door for all procedure-based care on the campus.");
      backDiagramURL = 'assets/diagrams/Section/or_section.png';
      $("#learnMore").removeClass("learnMoreHidden").addClass("learnMoreActive");
      $("#pl1,#pl2,#pl3,#pl5").removeClass("activeLink").addClass("progressLink");
      $("#pl4").addClass("activeLink");
      $('#prevSection').click( function(e) {e.preventDefault(); controller.scrollTo(s3location-1); return false; } );
      $('#nextSection').click( function(e) {e.preventDefault(); controller.scrollTo(s5location); return false; } );
      $('#prevSection').css('opacity', '1');
      $('#nextSection').css('opacity', '1');
    }
  }

  function updateBox4 (e) {
    if (e.type == "enter") {
      $("#slideCounter").text("05");
      $("#title").text("Hassenfeld Children's Hospital");
      $("#diagramBack").attr('src', backDiagramURL);
      $("#diagramFront").attr('src', 'assets/diagrams/Section/hch_section.png').stop(true,true).hide().delay(200).fadeIn("slow");
      $("#sectionBody").text("Woven through the building is a series of spaces dedicated to children and their families. Dedicated vertical circulation connects the various pediatric spaces and creates a separate and unique experience for children.");
      backDiagramURL = 'assets/diagrams/Section/hch_section.png';
      $("#learnMore").removeClass("learnMoreActive").addClass("learnMoreHidden");
      $("#pl1,#pl2,#pl3,#pl4").removeClass("activeLink").addClass("progressLink");
      $("#pl5").addClass("activeLink");
      $('#prevSection').click( function(e) {e.preventDefault(); controller.scrollTo(s4location); return false; } );
      $('#nextSection').click( function(e) {e.preventDefault(); controller.scrollTo(s5location); return false; } );
      $('#prevSection').css('opacity', '1');
      $('#nextSection').css('opacity', '0.2');
    }
  }

  $('#prevSection').click( function(e) {e.preventDefault(); controller.scrollTo(s1location); return false; } );
  $('#nextSection').click( function(e) {e.preventDefault(); controller.scrollTo(s2location); return false; } );

  $('#pl1').click( function(e) {e.preventDefault(); controller.scrollTo(s1location); return false; } );
  $('#pl2').click( function(e) {e.preventDefault(); controller.scrollTo(s2location); return false; } );
  $('#pl3').click( function(e) {e.preventDefault(); controller.scrollTo(s3location-1); return false; } );
  $('#pl4').click( function(e) {e.preventDefault(); controller.scrollTo(s4location); return false; } );
  $('#pl5').click( function(e) {e.preventDefault(); controller.scrollTo(s5location); return false; } );

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
