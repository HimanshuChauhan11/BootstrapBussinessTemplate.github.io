$(".slide-one-item-alt").owlCarousel({
center: false,
items: 1,
dots: false,
loop: true,
margin: 0,
smartSpeed: 1000,
autoplay: true,
pauseOnHover: true,
onDragged: function (event) {
console.log("event : ", event.relatedTarget["_drag"]["direction"]);
if (event.relatedTarget["_drag"]["direction"] == "left") {
$(".slide-one-item-alt-text").trigger("next.owl.carousel");
} else {
$(".slide-one-item-alt-text").trigger("prev.owl.carousel");
}
},
});
$(".slide-one-item-alt-text").owlCarousel({
center: false,
items: 1,
dots: false,
loop: true,
margin: 0,
smartSpeed: 1000,
autoplay: true,
pauseOnHover: true,
onDragged: function (event) {
console.log("event : ", event.relatedTarget["_drag"]["direction"]);
if (event.relatedTarget["_drag"]["direction"] == "left") {
$(".slide-one-item-alt").trigger("next.owl.carousel");
} else {
$(".slide-one-item-alt").trigger("prev.owl.carousel");
}
},
});
$(".custom-next").click(function (e) {
e.preventDefault();
$(".slide-one-item-alt").trigger("next.owl.carousel");
$(".slide-one-item-alt-text").trigger("next.owl.carousel");
});
$(".custom-prev").click(function (e) {
e.preventDefault();
$(".slide-one-item-alt").trigger("prev.owl.carousel");
$(".slide-one-item-alt-text").trigger("prev.owl.carousel");
});
$(document).ready(function () {
$("#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4").click(function () {
$(this).toggleClass("ham-open");
});
});
$(document).ready(function () {
$(".navbar-toggler,.overlay").on("click", function () {
$(".mobile-menu,.overlay").toggleClass("open-nav");
});
});
$(document).ready(function () {
$(window).scroll(function () {
if ($(window).scrollTop() < 60) {
$(".header-inner").removeClass("navbar-scroll");
} else {
$(".header-inner").addClass("navbar-scroll");
}
});
});