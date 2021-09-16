$('.slide-nav').on('click', function (e) {
    e.preventDefault();
    // get current slide
    var current = $('.flex--active').data('slide'),
        // get button data-slide
        next = $(this).data('slide');

    $('.slide-nav').removeClass('active');
    $(this).addClass('active');

    if (current === next) {
        return false;
    } else {
        $('.slider__warpper').find('.flex__container[data-slide=' + next + ']').addClass('flex--preStart');
        $('.flex--active').addClass('animate--end');
        setTimeout(function () {
            $('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
            $('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
        }, 800);
    }
});


// navbar javascript

let openMenu = document.getElementsByClassName('fa-bars')[0]
let closeMenu = document.getElementsByClassName('fa-times')[0]
let navlinks = document.getElementsByClassName('nav-links')[0]

openMenu.addEventListener('click', ()=>{
    navlinks.style.left = ("0")
});

closeMenu.addEventListener('click', ()=>{
    navlinks.style.left = ("100%")
});


// slider automation

var count = 1;

setInterval(function(){
    document.getElementById('click' + count).click();
    count++;
    if(count > 3){
        count = 1;
    }
}, 5000);



let map;

  function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
          center: { lat: 51.509865, lng: -0.118092 },
          zoom: 12,
          mapId: 'a674b08729108013'
      });
      //24.899592, 67.024611
      const image =
          "mappng2.png";
      const beachMarker = new google.maps.Marker({
          position: { lat: 24.899592, lng: 67.024611 },
          map,
          icon: image,
      });
  }


  jQuery(document).ready(function($){
  
    window.onload = function (){
      $(".bts-popup").delay(1000).addClass('is-visible');
      }
    
      //open popup
      $('.bts-popup-trigger').on('click', function(event){
          event.preventDefault();
          $('.bts-popup').addClass('is-visible');
      });
      
      //close popup
      $('.bts-popup').on('click', function(event){
          if( $(event.target).is('.bts-popup-close') || $(event.target).is('.bts-popup') ) {
              event.preventDefault();
              $(this).removeClass('is-visible');
          }
      });
      //close popup when clicking the esc keyboard button
      $(document).keyup(function(event){
          if(event.which=='27'){
              $('.bts-popup').removeClass('is-visible');
          }
      });
  });