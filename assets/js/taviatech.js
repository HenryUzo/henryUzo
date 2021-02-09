(function ($) {
    $(function () {

        $(".navbar-toggler").on("click", function () {
            $(".navbar").toggleClass("menubar");

        })
    })
})(jQuery)

// $(function () {

//     var observer = new IntersectionObserver(function (entries) {
//         if (entries[0].intersectionRatio === 0) {
//             $("nav.primary-menu")
//                 // .css("background", "1010105e")
//                 .removeClass("d-none");
//             $("nav.secondary-menu").addClass("bg-translucent");

//         }
//         else if (entries[0].intersectionRatio >= 0.05) {
//             $("nav.secondary-menu").removeClass("bg-translucent");
//             $("nav.primary-menu")
//                 .addClass("d-none")
//                 // .css("background", "1010105e");;
//         } else {
//             console.log(entries[0].intersectionRatio)
//         }

//     }, { threshold: [0, 0.05, 0.15, 0.25, 0.5, 0.75, 1] });

//     observer.observe(document.querySelector("nav.secondary-menu"));
// });

$(window).scroll(function () {
    // 100 = The point you would like to fade the nav in.

    if ($(window).scrollTop() > 100) {

        $('.bg').addClass('show');

    } else {

        $('.bg').removeClass('show');

    }
});


  /******************************
        Scroll down
     ******************************/
$(function() {

$('.scroll').on('click', function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $
        ($(this).attr('href')).offset().top}, 500, 'linear');
});
});


    /******************************
        BOTTOM SCROLL TOP BUTTON
     ******************************/
  
    // declare variable
    var scrollTop = $(".scrollTop");
  
    $(window).scroll(function() {
      // declare variable
      var topPos = $(this).scrollTop();
  
      // if user scrolls down - show scroll to top button
      if (topPos > 100) {
        $(scrollTop).css("opacity", "1");
  
      } else {
        $(scrollTop).css("opacity", "0");
      }
  
    }); // scroll END
  
    //Click event to scroll to top
    $(scrollTop).click(function() {
      $('html, body').animate({
        scrollTop: 0
      }, 800);
      return false;
  
    })



    AOS.init();

    alert('james');
