$(window).on("load", function () {
  setTimeout(function () {
    $("body").removeClass("preloading");
    $(".loader").fadeOut("slow");
    $(".bg-load").fadeOut("slow");
    $(".open_Modal").on("click");
  }, 1000);
});
