$(document).ready(function() {


  // function to hide all divs
  function hideAll() {
    $('#allthatweneeded').hide();
    $('#everysecondcounts').hide();
    $('#shouldvegonetobed').hide();
    $('#americannights').hide();
  }

  // run that function right away
  hideAll();


  $('#theText').slideToggle();

  // when any animal is clicked, make the suitable div appear
  $('.albumIcon').click(function() {

    $("audio").each(function() {
        this.pause();
        this.currentTime = 0;
    });

    // but first, hide all the divs to ensure that
    // only one will be open, ever
    hideAll();

    // here is a switch statement - this was in Codecademy
    // "Control Flow" lesson 7

    // we can get the ID of the thing that was clicked -
    switch ($(this).attr("id")) {
      case "allthatweneededpic":
        $('#allthatweneeded').show();
        break;
      case "everysecondcountspic":
        $('#everysecondcounts').show();
        break;
      case "shoudlvegonetobedpic":
        $('#shouldvegonetobed').show();
        break;
      case "americannightspic":
        $('#americannights').show();
        break;
    }
  }); // end of function for clicking

  $('#bandpic').click(function() {
    $('#theText').slideToggle();
  });

});
