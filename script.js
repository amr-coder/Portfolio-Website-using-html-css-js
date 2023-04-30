 $(document).ready(function(){
    $(window).scroll(function(){
       if(this.scrollY > 20){
          $('.navbar').addClass("sticky");
       }else{
          $('.navbar').removeClass("sticky");
        }
     });
   //   toggle menu/nav script
      $('.menu-btn').click(function(){
          $('.navbar .menu').toggleClass("active");
          $('.menu-btn i').toggleClass("active"); 
      });
      // owl carousel js
      $('.carousel').owlCarousel({
         margin: 20,
         loop: true,
         autoplayTimeOut: 2000,
         autoplayHoverPause: true,
         breakpoint:{
              0:{
                  item: 1,
                  nav: false
              },
               520:{
                     item: 2,
                     nav: false
                 },
                950:{
                    item: 3,
                     nav: false
                 }
         }

      });
});