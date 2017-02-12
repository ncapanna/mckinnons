
$(document).ready( function() {

  // Owl Carousel
  // Basic setup responsive carousel with prev and next
  $('.slider').owlCarousel({
      loop:true,
      margin:20,
      nav:false,
      autoplay:true,
      items: 1,
  })
  $('.awards').owlCarousel({
      loop:true,
      margin:20,
      nav:true,
      autoplay:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:5
          },
          1000:{
              items:5
          }
        }
  })


});
// end of document ready
