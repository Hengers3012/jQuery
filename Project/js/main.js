$(document).ready(function () {
  // Al hacer scroll
  $(window).scroll(function () {
    // Obtén la posición actual del scroll
    var scrollPosition = $(window).scrollTop();

    // Navbar fijo
    if (scrollPosition > 100) {
      // Ajusta el valor según sea necesario
      $(".navbar").addClass("fixed-navbar");
    } else {
      $(".navbar").removeClass("fixed-navbar");
    }

    // Footer fijo
    var documentHeight = $(document).height();
    var windowHeight = $(window).height();

    if (scrollPosition + windowHeight >= documentHeight - 50) {
      // Ajusta el valor según sea necesario
      $(".footer").addClass("fixed-footer");
    } else {
      $(".footer").removeClass("fixed-footer");
    }
  });
});
