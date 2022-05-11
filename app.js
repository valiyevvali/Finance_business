// page loading start
window.onload = function () {
    document.getElementById('preloader').style.opacity = '0';

    setTimeout(function(){
        document.getElementById('preloader').style.display= 'none';
    }, 1000);
}

function menu(){
    if(document.body.clientWidth>992){
        document.getElementById('opening-menu').style.display='none'
        $("#hamburger").find('span').html(`<i class="fas fa-bars">`);
        boolean=true
    }
}

setInterval(menu,500)
// slide show code start
var slideIndex = 0;
showSlides();

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (slideIndex > slides.length-1) {slideIndex = 0}
  if (slideIndex < 0) {slideIndex = slides.length-1}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "flex";
}

function auto(){
    slideIndex++;
    showSlides()
}

setInterval(auto,8000)
 var boolean = true
$("#hamburger").click(function(){
    $("#opening-menu").fadeToggle(500);
    if(boolean){
        $("#hamburger").find('span').html(`<i class="fas fa-times"></i>`);
        boolean=false
    }
    else{
        $("#hamburger").find('span').html(`<i class="fas fa-bars">`);
        boolean=true
    }
  });

  let check=true;
  
  window.addEventListener('scroll', function () {
    if (document.documentElement.scrollTop > 500) {
        document.getElementsByTagName('header')[0].classList.add('shrink');
    } else {
        document.getElementsByTagName('header')[0].classList.remove('shrink');
    }
    if(document.documentElement.scrollTop > document.getElementsByClassName('statistics')[0].getBoundingClientRect().top+900){
        let a = 0;
        if(check){
            $('.counter22').each(function(){
                $(this).animate({
                    a:$(this).attr('finish'),
                },{
                    duration:5000,
                    easing:'swing',
                    step:(a=>{
                      $(this).text(Math.floor(a));
                    })
                })
           });
        
        }
        check=false
      
    }
})

 var counters=true;
$(document).ready(function(){
    $(".people").owlCarousel({
        loop:true,
        responsiveClass:true,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
        },
        992:{
            items:2,
        }
    }
    });

    $(".logo-center").owlCarousel({
        loop:true,
        items:4,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        530:{
            items:2,
        },
        992:{
            items:4,
        }
    }
    })

    //  $('.counter').counterUp({
    //     delay: 20,
    //     time: 1000
    // });
  });