$(document).ready(function($){
	"use strict";
  

	// WOW Js Active
	new WOW().init();

	// ---- Active
  // service owl crsl
    $('.owl-crsl').owlCarousel({
    loop:true,
    margin:10,
    navText:['<sapn><i class="fa fa-arrow-left"></i><span>','<sapn><i class="fa fa-arrow-right"></i><span>'],
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})
    // client slider
        $('.client_slider_item').owlCarousel({
    loop:true,
    margin:10,
    navText:['<sapn><i class="fa fa-arrow-left"></i><span>','<sapn><i class="fa fa-arrow-right"></i><span>'],
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


    // mixit up section
  var mixer = mixitup('.project-content');
  // imgage popup
 $('.image-link').magnificPopup({type:'image'});

  
}(jQuery));