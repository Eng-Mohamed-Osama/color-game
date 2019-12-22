$(document).ready(function(){
    var doo = $(".input1").val();
    $("button").click(function(){
      $("p").css("background-color",$(".input1").val());
      $(".input2").val($("p").css("background-color"));
      
    });
  });