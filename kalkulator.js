$(document).ready(function() {
    // Animasi header
    $("#header").on("scroll", function() {
      var scrollY = $(window).scrollTop();
      $(this).css("background-color", "rgba(0, 0, 0, 0.5 - (scrollY / 500))");
    });
  
    // Animasi tombol menu
    $("nav a").on("click", function() {
      $(this).addClass("active").siblings().removeClass("active");
    });
  });