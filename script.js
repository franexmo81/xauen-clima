
$(document).on('ready', function() {

  /* --------------------------------------------------------- */
  /* SLICK CAROUSEL */
  /* --------------------------------------------------------- */
  $('.slideshow').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 2
      }
    }]
  });

  /* --------------------------------------------------------- */
  /* NAVIGATION */
  /* --------------------------------------------------------- */

  // Set navigation bar hidden when page is first loaded
  $("#main-nav, #others-nav").addClass("hidden");

  // On large screens, sets navigation bar visible for not index.html pages
  $("#others-nav").addClass("shown-top");

  // On small screens, shows side navigation bar when clicking on menu button
  $("#nav-menu-button").click(function() {
    $("#main-nav, #others-nav").addClass('shown-side');
  });
  // And hides when clicking on anywhere except navigation bar whitespace
  $("#nav-close-button,#main-nav li,header,section,footer").click(function() {
    $("#main-nav, #others-nav").removeClass('shown-side');
  });


  // On large screens, shows the navigation bar below the hero image
  $(".we-offer").waypoint(function(direction) {
    if (direction == "down") {
      $("#main-nav").addClass('shown-top');

    } else {
      $("#main-nav").removeClass('shown-top');
    }
  }, {
    offset: '50em;'
  });



  });


/* --------------------------------------------------------- */
/* COPY CONTACT EMAIL TO CLIPBOARD */
/* --------------------------------------------------------- */

// Copy contact email to clipboard
var clipboard = new ClipboardJS('.copyEmail', {
    text: function() {
        return 'xauenclima@xauenclima.es';
    }
});

// Unhide success message if success
clipboard.on('success', function(e) {
    console.log(e)
    var copyMessageToShow = document.getElementById("copySuccessMessage");
    copyMessageToShow.classList.remove("copyMessageHidden");
});

// Unhide error message if fails
clipboard.on('error', function(e) {
    console.log(e);
    var copyMessageToShow = document.getElementById("copyErrorMessage");
    copyMessageToShow.classList.remove("copyMessageHidden");
});
