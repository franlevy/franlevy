/* NAVICON JS */

$(".nav-btn").on("click", function() {
  
  if (toggle) 
  { 
    $("screen").css("min-width", "500px");
    toggle = 0;
  } 
  else 
  {
    $("screen").css("max-width", "500px");
    toggle = 1;
  }
  ;