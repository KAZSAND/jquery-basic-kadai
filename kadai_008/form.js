$(function () {
  $(".btn").on("click", function () {
    let click = $(this).val();
    if ("click") {
      $(".text-box").prop("disabled", false);
    } else {
      $(".text-box").prop("disabled", true);
    }
  });
});
