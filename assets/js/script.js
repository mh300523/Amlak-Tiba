(function ($) {
    $(document).ready(function() {

          ///////// **mobile size** /////////
        $('.menu-bar').click(function () {
          $(this).toggleClass("nav_btn");
          $('.main-nav').toggleClass('open-nav');
        });
    
        $('.close-nav').click(function () {
          $('.main-nav').removeClass('open-nav');
          $('.overlay_content').removeClass('on');
        });
    
        $('.nav-overlay').click(function () {
          $('.close-nav').trigger('click');
        });


        var thumbSlider = new Swiper('.main-slider .thumbs', {
          slidesPerView: 3, 
          spaceBetween: 10,
          centeredSlides: true,
          loop: true,
          slideToClickedSlide: true,
          autoplay:true,
          speed: 1000,
          on: {
              init: function (swiper) {
                  lazyLoad();
              },
          },
      });
      
      var mainSlider = new Swiper('.main-slider .main', {
          loop: true,
          autoplay:true,
          slidesPerView: 1,
          speed: 1000,
          thumbs: {
              swiper: thumbSlider, 
          },
          on: {
              init: function (swiper) {
                  lazyLoad();
              },
          },
      });


      ///////// ** Projects Slider** /////////
      var projects = new Swiper('.projects-row .swiper-container', {
        loop: true,
        autoplay: {
                delay: 3000,
            },
        speed: 1000,
        centeredSlides: true,
        pagination: {
            el: '.projects-row .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.projects-row .swiper-button-next',
            prevEl: '.projects-row .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1199: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
        },
        on: {
          init: function (swiper) {
            lazyLoad();
          },
        },
      });

            ///////// ** Projects Slider** /////////
            var projects = new Swiper('.blogs-row .swiper-container', {
              loop: true,
              autoplay: {
                      delay: 3000,
                  },
              speed: 1000,
              centeredSlides: true,
              pagination: {
                  el: '.blogs-row .swiper-pagination',
                  clickable: true,
              },
              navigation: {
                  nextEl: '.blogs-row .swiper-button-next',
                  prevEl: '.blogs-row .swiper-button-prev',
              },
              breakpoints: {
                  0: {
                      slidesPerView: 1,
                      spaceBetween: 10,
                  },
                  767: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                  },
                  992: {
                      slidesPerView: 2.5,
                      spaceBetween: 20,
                  },
                  1199: {
                      slidesPerView: 2.5,
                      spaceBetween: 20,
                  },
              },
              on: {
                init: function (swiper) {
                  lazyLoad();
                },
              },
            });


            ///////// **single Project gallery Slider** /////////
            var projectThumbs = new Swiper('.project-thumbs .swiper-container', {
              slidesPerView: 5, 
              spaceBetween: 20,
              loop: true,
              speed: 1000,
              autoplay:true,

              breakpoints: {
                0: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                },
                767: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                },
            },
              on: {
                  init: function (swiper) {
                      lazyLoad();
                  },
              },
          });

          var projectMain = new Swiper('.project-main .swiper-container', {
              loop: true,
              slidesPerView: 1,
              speed: 1000,
              autoplay:true,

              navigation: {
                  nextEl: '.project-main .swiper-button-next',
                  prevEl: '.project-main .swiper-button-prev',
              },

              thumbs: {
                  swiper: projectThumbs, 
              },
              on: {
                  init: function (swiper) {
                      lazyLoad();
                  },
              },
          });
            ///////// **single Project gallery Slider** /////////


            //////////** fixed arrow to top**//////////
            // Function to update the progress circle
            function updateProgressCircle() {
              var scrollTop = $(window).scrollTop();
              var docHeight = $(document).height() - $(window).height();
              var scrollPercent = (scrollTop / docHeight) * 100;
              $(".progress-circle").css("background", 
                  `conic-gradient(var(--primary-color) ${scrollPercent}%, transparent ${scrollPercent}% 100%)`
              );

              if (scrollTop >= 500) {
                  $(".arrow-up").fadeIn(300);
              } else {
                  $(".arrow-up").fadeOut(300);
              }
          }

          // Update progress circle on scroll
          $(window).scroll(function () {
              updateProgressCircle();
          });


          // Initial check
          updateProgressCircle();


        lazyLoad()
    });

        /**********lazy load ***********/
        function lazyLoad() {
            const images = document.querySelectorAll(".lazy-img");
        
            const optionsLazyLoad = {
              //  rootMargin: '-50px',
              // threshold: 1
            };
        
            const imageObserver = new IntersectionObserver(function (enteries) {
              enteries.forEach(function (entery) {
                if (!entery.isIntersecting) {
                  return;
                } else {
                  preloadImage(entery.target);
                  imageObserver.unobserve(entery.target);
                }
              });
            }, optionsLazyLoad);
          
            images.forEach(function (image) {
              imageObserver.observe(image);
            });
          }
          
          function preloadImage(img) {
            img.src = img.getAttribute("data-src");
            img.onload = function () {
              img.parentElement.classList.remove("loading-img");
              img.parentElement.classList.add("loaded-img");
              // img.parentElement.parentElement.classList.add("lazy-head-img");
            };
          }
})(jQuery)