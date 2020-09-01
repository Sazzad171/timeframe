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

  // form validation with js
  (function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();