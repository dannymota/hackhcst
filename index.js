$( document ).ready( function() {  
  
  // Dieter Rams design rules
  var rules = [
    "is innovative",
    "makes a product useful",
    "is aesthetic",
    "makes a product understandable",
    "is unobtrusive",
    "is honest",
    "is long-lasting",
    "is thorough down to the last detail",
    "is environmentally-friendly",
    "is as little design as possible",
  ];
  
  $(".dieter-rules").typed({
    strings: rules,
    typeSpeed: 50,
    backDelay: 3000,
    loop: true
  });
  
  
  //Smooth scrolling
  $( 'a[href*=#]:not([href=#])' ).smoothScroll( {
    offset: - $( "#main-navigation" ).outerHeight()
  });
  
  // Collapse Navigation when clicking link
  $( "ul.navbar-nav a" ).on( "click", function () {
    $(".navbar-toggle:visible").click();
  });
  
  var $navbar = $( ".navbar-default" ),
      $navToggle = $( ".navbar-toggle" ),
      toggleFloatingNavigation = $.throttle( 250, function () {
        var isInTop = window.scrollY <= 20;
        $navbar.toggleClass( "in-top", isInTop );
        if ( !$navToggle.hasClass( "active" ) ) {
            $navbar.toggleClass( "navbar-transparent", isInTop );
        }
      });
  
  // "lift" Navigation on scroll
  $( window ).on( "scroll.lift", toggleFloatingNavigation );
  
  // Animate hamburger icon
  $( ".navbar-toggle" ).on( "click", function () {
    $( this ).toggleClass( "active" );
    $( ".navbar-default" ).toggleClass( "navbar-transparent", !$( this ).hasClass( "active" ) );
  });
  
});