$(function () {
  $("#change-color").on("click", function () {
    $("#target").css("color", "#e91e63");
  });
  $("#change-text").on("click", function () {
    $("#target").text("You won million dollors!!! ");
  });
  $("#fade-out").on("click", function () {
    $("#target").fadeOut(6000);
  });
  $("#fade-in").on("click", function () {
    $("#target").fadeIn(200);
  });
});
