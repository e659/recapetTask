const navLinks = document.querySelectorAll(".nav-link");
// navlinks
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function (e) {
    //  console.log( e.target.innerHTML);
    navLinks.forEach((f) => f.classList.remove("active"));
    e.target.classList.toggle("active");
  });
}
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    nav: true,
    items: 4,
    responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:4
      }
  }
  });
});
