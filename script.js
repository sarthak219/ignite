$(document).ready(function() {
  $(window).scroll(function() {
    if($(document).scrollTop() > 20) {
      $('.header').addClass('scroll-nav',500);
    }
    else {
    $('.header').removeClass('scroll-nav');
    }
  });
});
$(document).ready(function() {
$('.menu-toggle').click(function() {
  
  $('.site-nav').toggleClass('site-nav--open',500);
  $(this).toggleClass('open');
  })

});
$(document).ready(function() {
$('.team-btn-gene').click(function() {
  
  $('.genesis-team').toggleClass('genesis-team-expanded',500);
  $('.ion-team').removeClass('ion-team-expanded',500);
 	 $('.fux-team').removeClass('fux-team-expanded',500);
 	  $('.axe-team').removeClass('axe-team-expanded',500);
     })

});
$(document).ready(function() {
$('.team-btn-ion').click(function() {
  
  $('.ion-team').toggleClass('ion-team-expanded',500);
    $('.genesis-team').removeClass('genesis-team-expanded',500);
     $('.fux-team').removeClass('fux-team-expanded',500);
      $('.axe-team').removeClass('axe-team-expanded',500);
  })

});

$(document).ready(function() {
$('.team-btn-axe').click(function() {
  
  $('.axe-team').toggleClass('axe-team-expanded',500);
  $('.ion-team').removeClass('ion-team-expanded',500);
  $('.genesis-team').removeClass('genesis-team-expanded',500);
  $('.fux-team').removeClass('fux-team-expanded',500);
})

});

$(document).ready(function() {
$('.team-btn-fux').click(function() {
  
  $('.fux-team').toggleClass('fux-team-expanded',500);
  $('.ion-team').removeClass('ion-team-expanded',500);
  $('.genesis-team').removeClass('genesis-team-expanded',500);
   $('.axe-team').removeClass('axe-team-expanded',500);
 
 
  })

});

$(document).ready(function(){
 
  $("a").on('click', function(event) {
    
    if (this.hash !== "") {
    
      event.preventDefault();
      
      var hash = this.hash;

            $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
       
        window.location.hash = hash;
      });
    }
  });
});
