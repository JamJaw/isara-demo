$(function(){

  $(".thirteenth23:not(:first-of-type)").css("display", "none");
  $(".thirteenth21:first-of-type").addClass("open");
 
  $(".thirteenth21").click(function () {
    $(".open").not(this).removeClass("open").next().slideUp(300);
    $(this).toggleClass("open").next().slideToggle(300);
  });

  
  $("#nineteenth3").click(function(){
    $("#nineteenth4").slideToggle(300);
    $("#ue3").toggle();
    $("#shita3").toggle();
  })
  $("#nineteenth31").click(function(){
    $("#nineteenth41").slideToggle(300);
    $("#ue31").toggle();
    $("#shita31").toggle();
  })
  $("#nineteenth32").click(function(){
    $("#nineteenth42").slideToggle(300);
    $("#ue32").toggle();
    $("#shita32").toggle();
  })
  $("#nineteenth33").click(function(){
    $("#nineteenth43").slideToggle(300);
    $("#ue33").toggle();
    $("#shita33").toggle();
  })
  $("#nineteenth34").click(function(){
    $("#nineteenth44").slideToggle(300);
    $("#ue34").toggle();
    $("#shita34").toggle();
  })
  $("#nineteenth35").click(function(){
    $("#nineteenth45").slideToggle(300);
    $("#ue35").toggle();
    $("#shita35").toggle();
  })
  $("#nineteenth36").click(function(){
    $("#nineteenth46").slideToggle(300);
    $("#ue36").toggle();
    $("#shita36").toggle();
  })
  $("#nineteenth37").click(function(){
    $("#nineteenth47").slideToggle(300);
    $("#ue37").toggle();
    $("#shita37").toggle();
  })
  
});


