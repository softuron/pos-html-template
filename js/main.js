$(document).ready(function(){
            
            // function showbar() {
            //   var x = document.getElementById("navmenu");
            //   if (x.style.left === "-100%") {
            //     x.style.left === "0%";
            //   } else {
            //     x.style.left === "-100%";
            //   }
            // }
            $('#show').click(function(){
               if($('.navmenu').css('left') != '0px'){
                  $('.navmenu').css({'left':'0px'});
               }
               else{
                  $('.navmenu').css({'left':'-100%'});
               }
            });
            $('.cross-bar-icon').click(function(){
               if($('.navmenu').css('left') != '-100%'){
                  $('.navmenu').css({'left':'-100%'});
               }
               else{
                  $('.navmenu').css({'left':'0px'});
               }
            });
            //owl start
            $(".owl-carousel").owlCarousel({
                loop:true,
                margin:20,
                responsiveClass:true,
                center:true,
                responsive:{
                    0:{
                        items:1,
                    },
                    600:{
                        items:3,
                    },
                    1000:{
                        items:5,
                        nav:true,
                    }
                }
            });
    //Price slide
            $('.price-owl').owlCarousel({
                margin:20,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:2
                    },
                    900:{
                        items:3
                    },
                    1500:{
                        items:5
                    }
                }
            });
    //Clients slide
            $('.clients-owl').owlCarousel({
                loop:true,
                margin:20,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:3
                    },
                    600:{
                        items:4
                    },
                    1000:{
                        items:7
                    }
                }
            });
    //Clients slide
            $('.owl-smrt').owlCarousel({
                loop:true,
                margin:20,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:2
                    },
                    300:{
                        items:3
                    },
                    600:{
                        items:4
                    },
                    1000:{
                        items:6
                    }
                }
            });
    //sticky nav
        window.onscroll = function() {myFunction()};
            var navbar = document.getElementById("navbar");
            var sticky = navbar.offsetTop;
            function myFunction() {
                if(window.pageYOffset >= sticky) {
                    navbar.classList.add("sticky")
                }else{
                    navbar.classList.remove("sticky");
                }
            }
            //faq
            $(".faq ul li").on('click', function() {
                $(this).next("p").slideToggle('slow');
              });
              
              $(document).ready(function() {
                $(".faq ul li").children("p").hide();
              })

              ///tab menu
              $('body').scrollspy({target: '#sidebar', offset: 80});

              $(window).scroll(function (evt) {
                  var sidebar_offset = $('#mysidebar').offset().top;
                  var sidebar_height = $('#mysidebar').height();      //564
                  var total_height = sidebar_offset + sidebar_height;
                  var footer_offset = $('#myfooter').offset().top;
                  var document_offset = $(window).scrollTop();
          
                  var padding_top_to_footer = 90;
                  var margin_top = 40;
                  //calculate when the sidebar position + height touches footer
                  //then remove the affix class, make it absolute and set the position accordingly
                  //if it returns, then we put back the affix class
          
                  //console.log(total_height + ' ' + footer_offset + ' ' + document_offset);
                  //footer height 351
                  if (document_offset + sidebar_height + padding_top_to_footer < footer_offset) {
                      $('#mysidebar').addClass('affix').removeAttr('style');
                      $('#mysidebar').css({
                          width: '228px'
                      });
                  } else {
                      $('#mysidebar').removeClass('affix');
                      $('#mysidebar').css({
                          position: 'absolute',
                          top: (footer_offset - sidebar_height) - padding_top_to_footer - margin_top + 'px'
                      });
                  }
              });
          
              var clicked = false;
              $('#mysidebar li a').click(
                      function () {
                          $('#mycontent > div > h2').css('padding-top', 0);
                          $($(this).attr('href') + ' > h2').css('padding-top', '50px');
                          //to make padding on top when you view to that
                          clicked = true;
                      }
              );
          
              $('body').on('activate.bs.scrollspy', function () {
                  //console.log('scrolling...');
                  if (!clicked)
                      $('#mycontent > div > h2').css('padding-top', 0);
                  clicked = false;
          
          
          
              });
            
});