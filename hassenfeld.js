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
    $("#title").text("Lobby and Arrival");
    $("#diagramBack").attr('src', backDiagramURL);
    $("#diagramFront").attr('src', 'assets/diagrams/Hassenfeld/01.png').stop(true,true).hide().fadeIn("slow");
    $("#sectionBody").text("A 38-foot tall sculpture of a Dalmatian balancing a real taxi on its nose marks the entrance to the Children’s Hospital.");
    backDiagramURL = 'assets/diagrams/Hassenfeld/01.png';
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
      $("#title").text("Children's Center");
      $("#diagramBack").attr('src', backDiagramURL);
      $("#diagramFront").attr('src', 'assets/diagrams/Hassenfeld/02.png').stop(true,true).hide().delay(200).fadeIn("slow");
      $("#sectionBody").text("The Children’s Center supports child-life activities, including classrooms, a play space, and a broadcast room, where performances and events can be recorded and broadcast to the patient rooms upstairs.");
      backDiagramURL = 'assets/diagrams/Hassenfeld/02.png';
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
      $("#title").text("Children's Terrace");
      $("#diagramBack").attr('src', backDiagramURL);
      $("#diagramFront").attr('src', 'assets/diagrams/Hassenfeld/03.png').stop(true,true).hide().fadeIn("slow");
      $("#sectionBody").text("Outdoor play space is a precious resource for children with long hospital stays.");
      backDiagramURL = 'assets/diagrams/Hassenfeld/03.png';
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
      $("#title").text("Pediatric Surgery Center");
      $("#diagramBack").attr('src', backDiagramURL);
      $("#diagramFront").attr('src', 'assets/diagrams/Hassenfeld/04.png').stop(true,true).hide().delay(200).fadeIn("slow");
      $("#sectionBody").text("The pediatric procedure areas are designed to meet the particular needs of children and their families while still allowing for flexibility and high utilization of operating and procedure rooms. The reception and waiting area is dedicated to the Children’s hospital, and young patients are prepared for surgery and recover in fully enclosed rooms with sliding doors. Beyond the red line, ORs and procedure rooms serve both children and adults.");
      backDiagramURL = 'assets/diagrams/Hassenfeld/04.png';
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
      $("#title").text("Pediatric Inpatient Unit");
      $("#diagramBack").attr('src', backDiagramURL);
      $("#diagramFront").attr('src', 'assets/diagrams/Hassenfeld/05.png').stop(true,true).hide().delay(200).fadeIn("slow");
      $("#sectionBody").text("Each private patient room is equipped with a digital footwall. The patient can post photos to the wall, leave notes for the care team, Skype with friends and family, order meals, and play games.");
      backDiagramURL = 'assets/diagrams/Hassenfeld/05.png';
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
