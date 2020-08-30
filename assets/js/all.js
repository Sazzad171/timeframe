// nav hidden search
$(document).ready(function(){
  $("#showHideSearch").click(function(){
    $("#hiddenSeacrh").toggle();
    $("#search-overlay").css('display', 'block');
  });
});
function hideSearchBar() {
  document.getElementById("search-overlay").style.display = "none";
  document.getElementById("hiddenSeacrh").style.display = "none";
}

// remove instagram tag
  setTimeout(function(){ 
    document.getElementsByClassName("eapps-link")[0].style.display = "none";
  }, 4000);

  // navbar dropdown
  $('li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(100);
  }, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(100);
  });