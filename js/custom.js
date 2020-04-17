$(function(){
   
        // nav
    
    $(window).scroll(function(){

var scrolling = $(this).scrollTop();
if(scrolling > 300){
    $(".navbar").addClass("another-bg");
}
else{
    
    $(".navbar").removeClass("another-bg");
}    
}); 

         // animation smooth scroll

    var html_body = $('html, body');
    $('.navbar a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 1500);
                return false;
            }
        }
    });

    //Edu-slider
    
    $('.edu-slider').slick({ 
            
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    button:false,
    arrows:false,
    dots:true,
    fade:true,
    speed:1500,
    
});
    
    
    
    //progress-js
    
$(function () { 
  $('[data-toggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('show');
});  

$( window ).scroll(function() {   
 if($( window ).scrollTop() > 10)
 {   
  $(".progress-bar").each(function(){
    each_bar_width = $(this).attr('aria-valuenow');
    $(this).width(each_bar_width + '%');
  });
       
   }  
 });
    
    //preloader js
    
$(window).on('load', function(){
    $(".preloader").delay(2500).fadeOut(1500);
});
    
    //wow-js
    
     new WOW().init();
    
     //port-slider
    
    $('.port-slider').slick({
            
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    button:false,
    arrows:false,      
    vertical:true,
    
});
    
    
    //clients-slider
    
    $('.clients-text-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    vertical:true,
    autoplaySpeed: 3000,
    button:true,
    arrows:false,
    speed:1500,
    dots:true,
});
    
    //Counter
    
    $('.counter').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 8000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
  
  

});
    
    //story-slider

$('.story-slider').slick({
   infinite: true,
   slidesToShow: 3,
   slidesToScroll: 1,    
    button:false,
    autoplay:true,
    speed: 2500,
    arrows:false,
    centerMode:true,
    centerPadding:true,
    autoplaySpeed:1000,
});
    
    
    
    

    
    /* ---- particles.js config ---- */

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 100,
      "density": {
        "enable": true,
        "value_area":1000
      }
    },
    "color": {
      "value": ["#ffffff", "#fff", "#fff", "#ffffff"]
    },
    
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#fff"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.6,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 120,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": false
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
    
    
    
    //type js    
$(".typer").typed({
    strings: ["Learner", "Student", "Explainer"],
    typeSpeed: 50,
    contentType: 'html',
    loop:true,
}); 

    
    
$(function () { 
  $('[data-toggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('show');
});  

// $( window ).scroll(function() {   
 // if($( window ).scrollTop() > 10){  // scroll down abit and get the action   
  $(".progress-bar").each(function(){
    each_bar_width = $(this).attr('aria-valuenow');
    $(this).width(each_bar_width + '%');
  });
       
 //  }  
// });


    
    // Google analytics
(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
      (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
      m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
  })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

  ga('create', 'UA-54264896-1', 'auto');
  ga('send', 'pageview');
    
});





