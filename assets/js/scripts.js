// nav hidden search
$(document).ready(function(){
  $("#showHideSearch").click(function(){
    $("#hiddenSeacrh").toggle();
  });
});

// remove instagram tag
  setTimeout(function(){ 
    document.getElementsByClassName("eapps-link")[0].style.display = "none";
  }, 2000);