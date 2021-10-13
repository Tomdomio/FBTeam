$(window).on("load", function () {
  setTimeout(function () {
    $("body").removeClass("preloading");
    $(".loader").fadeOut("slow");
    $(".bg-load").fadeOut("slow");
    $(".open_Modal").on("click");
  }, 1000);
});
$("#__avatar").click(function () {
  $(".layer").addClass("show");
});
$(document).mouseup(function (e) {
  var container = $(".layer");
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    container.removeClass("show");
  }
});
