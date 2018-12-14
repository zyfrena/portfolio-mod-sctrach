$(window).on("load",function(){

  $(".loader").fadeOut(1000);
})




$(document).ready(function() {

$('#slides').superslides({
  animation: 'fade',
  play: 3600,
  pagination: false,
});

var typed = new Typed(".typed",{
  strings: ["Frontend Developer.","Human-Computer-interaction student.","Photographer & Graphic Designer."],
  loop: true,
  typeSpeed: 100,
  smartBackspace: false,
});


$('.owl-carousel').owlCarousel({
  loop:true,
  items: 4,
  responsive:{
      0:{
          items:1
      },
      480:{
          items:2
      },
      768:{
          items:3
      },
      938:{
          items:4
      }
  }
});


    
              

      var skillsTopOffset = $(".skillSection").offset().top;

      $(window).scroll(function(){
        if (window.pageYOffset > skillsTopOffset - $(window).height()+300){
           $('.chart').easyPieChart({
       easing: 'easeInOut',
       barColor: '#fff',
       trackColor: false,
       scaleColor: false,
       lineWidth: 5,
       size: 175,      
       onStep: function(from, to, percent) {
         $(this.el).find('.percent').text(Math.round(percent));
       }            
      });     



        }
      
      });

      const nav = $("#navigation");
      const navTop = nav.offset().top;
      $(window).on("scroll",stickyNavigation)

      function stickyNavigation(){
        var body = $("body");
          if ($(window).scrollTop() >= navTop){

          body.addClass("fixedNav");}
          else{
            body.removeClass("fixedNav");
          }
      }




});

