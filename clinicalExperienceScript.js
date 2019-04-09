var h = window.innerHeight;
var sectionduration = h/2;
var s1location = 0;
var s2location = sectionduration;
var s3location = sectionduration*2;
var s4location = sectionduration*3;
var s5location = sectionduration*4;
var backDiagramURL;

$(function () { // wait for document ready
  // init controller
  var controller = new ScrollMagic.Controller();

  $(".scrollingText").stop(true,true).hide().slideDown("slow");

  // show pin state
  function updateBox (e) {
    if (e.type == "enter") {
      $("#slideCounter").text("02");
      $("#title").text("Patient Floor");
      $("#diagramBack").attr('src', backDiagramURL);
      $("#diagramFront").attr('src', 'assets/diagrams/Section/patientFloors_section.png').stop(true,true).hide().delay(200).fadeIn("slow");
      $("#sectionBody").text("The patient room is designed to maximize the patient’s comfort and safety, to facilitate the process of healing, and to integrate family members as part of the care team.");
      backDiagramURL = 'assets/diagrams/Section/patientFloors_section.png';
      $("#learnMore").removeClass("learnMoreActive").addClass("learnMoreHidden");
      $("#pl1,#pl3,#pl4,#pl5").removeClass("activeLink").addClass("progressLink");
      $("#pl2").addClass("activeLink");
      $('#prevSection').click( function(e) {e.preventDefault(); controller.scrollTo(s1location); return false; } );
      $('#nextSection').click( function(e) {e.preventDefault(); controller.scrollTo(s3location); return false; } );
      $('#prevSection').css('opacity', '1');
      $('#nextSection').css('opacity', '1');


    }
    else {
      $("#slideCounter").text("01");
      $("#title").text("Overview");
      $("#diagramBack").attr('src', backDiagramURL);
      $("#diagramFront").attr('src', 'assets/diagrams/Section/fullsection.png').stop(true,true).hide().fadeIn("slow");
      $("#sectionBody").text("The first hospital in New York City to provide all private patient rooms, the Kimmel Pavilion establishes a new standard for how a hospital environment can perform, transforming the experience of care for clinicians, staff, patients, and families.");
      backDiagramURL = 'assets/diagrams/Section/fullsection.png';
      $("#learnMore").removeClass("learnMoreActive").addClass("learnMoreHidden");
      $("#pl2,#pl3,#pl4,#pl5").removeClass("activeLink").addClass("progressLink");
      $("#pl1").addClass("activeLink");
      $('#prevSection').click( function(e) {e.preventDefault(); controller.scrollTo(s1location); return false; } );
      $('#nextSection').click( function(e) {e.preventDefault(); controller.scrollTo(s2location); return false; } );
      $('#prevSection').css('opacity', '0.2');
      $('#nextSection').css('opacity', '1');

    }
  }

  function updateBox2 (e) {
    if (e.type == "enter") {
      $("#slideCounter").text("03");
      $("#title").text("Public Space and Amenities");
      $("#diagramBack").attr('src', backDiagramURL);
      $("#diagramFront").attr('src', 'assets/diagrams/Section/public_section.png').stop(true,true).hide().fadeIn("slow");
      $("#sectionBody").text("The public concourses are enlivened with a series of new retail amenities and services for patients, visitors, and staff. A major new cafeteria overlooks First Avenue, and smaller cafés and coffee bars are distributed across campus. The patient care concourse, which links the hospital to physician practice space along First Avenue includes a gift shop, a retail pharmacy, patient financial services, and a meditation room.");
      backDiagramURL = 'assets/diagrams/Section/public_section.png';
      $("#learnMore").removeClass("learnMoreActive").addClass("learnMoreHidden");
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
      $("#sectionBody").text("Continuous day-lit circulation wraps around the OR’s and procedure rooms, with dramatic views along the perimeter and at the end of corridors. A communicating stair with river views allows clinicians to easily shuttle between procedure floors and the support floor where staff lockers and central break rooms are located.");
      backDiagramURL = 'assets/diagrams/Section/or_section.png';
      $("#learnMore").removeClass("learnMoreHidden").addClass("learnMoreActive");
      $("#pl1,#pl2,#pl3,#pl5").removeClass("activeLink").addClass("progressLink");
      $("#pl4").addClass("activeLink");
      $('#prevSection').click( function(e) {e.preventDefault(); controller.scrollTo(s3location); return false; } );
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
      $("#sectionBody").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis eros non blandit malesuada. Donec scelerisque libero sit amet augue volutpat, sed feugiat dui sollicitudin. Praesent porta ipsum a turpis efficitur consectetur. Cras consequat mollis diam sed rhonassa eget sem venenatis neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis eros non blandit malesuada.");
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

  // build scenes
  new ScrollMagic.Scene({triggerElement: "a#section2", duration: sectionduration, triggerHook: 0})
    .setPin("#block")
    .on("enter leave", updateBox)
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

  new ScrollMagic.Scene({triggerElement: "a#section3", duration: sectionduration, offset: sectionduration, triggerHook: 0})
    .setPin("#block")
    .on("enter leave", updateBox2)
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

  new ScrollMagic.Scene({triggerElement: "a#section4", duration: sectionduration, offset: (sectionduration*2), triggerHook: 0})
    .setPin("#block")
    .on("enter leave", updateBox3)
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

  new ScrollMagic.Scene({triggerElement: "a#section5", duration: sectionduration, offset: (sectionduration*3), triggerHook: 0})
      .setPin("#block")
      .on("enter leave", updateBox4)
      .addIndicators() // add indicators (requires plugin)
      .addTo(controller);

});
