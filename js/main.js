// import 'bootstrap';
// import 'slick-carousel';
// import 'vendor/countdown-master/jquery.countdown.min.js';

const $win = $(window);
const $doc = $(document);

// Show language navigation on click

$(".nav-lang > a").on("click", function (event) {
  event.preventDefault();

  $(this).closest(".nav-lang").find("ul").slideToggle();
});

// Init Text slider

$("#js-slider-1 .slider__slides").slick({
  slidesToShow: 1,
  prevArrow: $("#js-slider-1 .slider__prev"),
  nextArrow: $("#js-slider-1 .slider__next"),
});

// Init Second Text slider

$("#js-slider-2 .slider__slides").slick({
  slidesToShow: 1,
  prevArrow: $("#js-slider-2 .slider__prev"),
  nextArrow: $("#js-slider-2 .slider__next"),
});

// Init Third Slider (Vertical)

$("#js-slider-3 .slider__slides").slick({
  slidesToShow: 1,
  prevArrow: $("#js-slider-3 .slider__prev"),
  nextArrow: $("#js-slider-3 .slider__next"),
  vertical: true,
});

// Init Slider Testimonials

$(".slider-testimonials .slider__slides").slick({
  slidesToShow: 1,
  centerPadding: "160px",
  initialSlide: 1,
  infinite: false,
  prevArrow: $(".slider-testimonials .slider__prev"),
  nextArrow: $(".slider-testimonials .slider__next"),
});

/**
 * Countdown timer
 */
function countdownTimer() {
  let now = new Date($.now());

  let dateFormatted =
    now.getFullYear() +
    "/" +
    parseInt(now.getMonth() + 1) +
    "/" +
    now.getDate() +
    " " +
    parseInt(now.getHours() - 1) +
    ":" +
    0 +
    ":" +
    0;

  $(".list-timer").countdown(
    {
      date: dateFormatted,
    },
    function () {
      countdownTimer();
    }
  );
}

countdownTimer();

//Check for dropdown
$(".nav li").each(function () {
  var $this = $(this);
  var hasDropdown = $this.find("> ul").length;

  if (hasDropdown) {
    $this.addClass("has-dropdown");
  }
});

//Responsive navigation
$(".nav-menu").on("click", function (event) {
  event.preventDefault();

  $(".nav").toggleClass("is-visible");
  $(this).toggleClass("opened");
});

if ($win.width() < 768) {
  $(".nav").append($(".header__inner > .btn"));
}

//Responsive dropdown
$(".nav").on("click", ".has-dropdown a", function () {
  if ($win.width() < 768) {
    $(this)
      .siblings("ul")
      .stop()
      .slideToggle()
      .parent()
      .toggleClass("is-expanded");

    event.preventDefault();
  }
});
