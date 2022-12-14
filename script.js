$(document).ready(function () {
    let selectedNum = " ";
  
    $(".numBtn").click(function () {
      $(".numBtn").removeClass("btnClick");
      $(this).addClass("btnClick");
      selectedNum = $(this).text();
    });
  
    $(".btn").click(function () {
      $(".container").css("display","none");
      $(".container-thnks").css("display","flex");
      $(".result").html(selectedNum);
    });
  });
  