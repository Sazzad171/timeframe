// nav hidden search
$(document).ready(function(){
  $("#showHideSearch").click(function(){
    $("#hiddenSeacrh").toggle();
  });
});

// remove instagram tag
  setTimeout(function(){ 
    document.getElementsByClassName("eapps-link")[0].style.display = "none";
  }, 4000);

  // navbar dropdown
  $('li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(500);
  }, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(500);
  });