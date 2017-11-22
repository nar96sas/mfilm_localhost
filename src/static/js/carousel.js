function customSlider(){
    $('.slider-home-banner').owlCarousel({
        navigation: false, // Show next and prev buttons
        loop: true,
        //Autoplay
        autoplay: true,
        autoPlaySpeed: 6000,
        autoPlayTimeout: 5000,
        autoplayHoverPause: true,
  
        items: 1,
  
        callbacks: true,
        dots: true
      });
}

function customPlaylist() {
    $('.slider-pl').owlCarousel({
        nav: true, // is true across all sizes
        margin: 30, // margin 10px till 960 breakpoint
        dots: false,
        items: 6,
        responsiveClass: true, // Optional helper class. Add 'owl-reponsive-' + 'breakpoint' class to main element.

        // Object keys can be Numbers (like in this example) or Strings: '480'
        // Owl has build in sort option
        // Setting from widest screen to smallest still work.
        responsive: {
            0: {
                items: 2,
                margin: 30,
                loop: false // In this configuration 1 is enabled from 0px up to 479px screen size
            },
            480: {
                items: 2, // from 480 to 677
                margin: 30,
                loop: false
            },
            678: {
                items: 4, // from this breakpoint 678 to 959
                margin: 30,
                loop: false
            },
            960: {
                items: 5, // from this breakpoint 960 to 1199
                margin: 30, // and so on...
                loop: false
            },
            1200: {
                items: 6,
                loop: false,
                margin: 30,
            }
        }
    });
}

export { customPlaylist, customSlider }