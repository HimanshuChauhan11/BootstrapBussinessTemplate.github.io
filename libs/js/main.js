(function ($) {
"use strict";
// Back to top button
$(window).scroll(function () {
if ($(this).scrollTop() > 100) {
$(".back-to-top").fadeIn("slow");
} else {
$(".back-to-top").fadeOut("slow");
}
});
$(".back-to-top").click(function () {
$("html, body").animate(
{
scrollTop: 0,
},
1500,
"easeInOutExpo"
);
return false;
});
// jQuery counterUp (used in Whu Us section)
$('[data-toggle="counter-up"]').counterUp({
delay: 10,
time: 1000,
});
// Testimonials carousel (uses the Owl Carousel library)
$(".testimonials-carousel").owlCarousel({
autoplay: true,
dots: true,
loop: true,
items: 1,
});
// Porfolio isotope and filter
$(window).on("load", function () {
var portfolioIsotope = $(".portfolio-container").isotope({
itemSelector: ".portfolio-item",
});
$("#portfolio-flters li").on("click", function () {
$("#portfolio-flters li").removeClass("filter-active");
$(this).addClass("filter-active");
portfolioIsotope.isotope({
filter: $(this).data("filter"),
});
aos_init();
});
});
// Portfolio details carousel
$(".portfolio-details-carousel").owlCarousel({
autoplay: true,
dots: true,
loop: true,
items: 1,
});
// Initiate venobox (lightbox feature used in portofilo)
$(document).ready(function () {
$(".venobox").venobox();
});
// Init AOS
function aos_init() {
AOS.init({
duration: 1000,
once: true,
});
}
$(window).on("load", function () {
aos_init();
});
})(jQuery);