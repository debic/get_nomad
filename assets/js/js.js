/*EFECTO CAMBAIR TEXTO*/

(function() {

    var quoteOne = $(".quote_one");
    var quoteIndex = -1;

    function showNextQuote() {
        ++quoteIndex;
        quoteOne.eq(quoteIndex % quoteOne.length)
            .fadeIn(800)
            .delay(5000)
            .fadeOut(800, showNextQuote);
    }

    showNextQuote();

})();

(function() {

    var quoteTwo = $(".quote_two");
    var quoteIndex = -1;

    function showNextQuote() {
        ++quoteIndex;
        quoteTwo.eq(quoteIndex % quoteTwo.length)
            .fadeIn(800)
            .delay(5000)
            .fadeOut(800, showNextQuote);
    }

    showNextQuote();

})();

(function() {

    var quoteTwo = $(".quote_three");
    var quoteIndex = -1;

    function showNextQuote() {
        ++quoteIndex;
        quoteTwo.eq(quoteIndex % quoteTwo.length)
            .fadeIn(800)
            .delay(2000)
            .fadeOut(800, showNextQuote);
    }

    showNextQuote();



})();


/*EFECTO SCROLL*/

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


/*EFECTO CARROUSEL*/

$('.logo_slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
  


/*EFECTO NAVBAR*/

    const body = document.querySelector("body");
    const navbar = document.querySelector(".navbar");
    const menuBtn = document.querySelector(".menu-btn");
    const cancelBtn = document.querySelector(".cancel-btn");
    menuBtn.onclick = ()=>{
      navbar.classList.add("show");
      menuBtn.classList.add("hide");
      body.classList.add("disabled");
    }
    cancelBtn.onclick = ()=>{
      body.classList.remove("disabled");
      navbar.classList.remove("show");
      menuBtn.classList.remove("hide");
    }
    window.onscroll = ()=>{
      this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
    }

