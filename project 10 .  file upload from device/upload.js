// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {

  // Get all upload buttons
  let uploadButtons = document.querySelectorAll('.upload-btn');

  // Loop through each button and attach a click event
  uploadButtons.forEach(function(button) {
      button.addEventListener('click', function() {
          // Trigger the corresponding file input click
          let fileInput = button.nextElementSibling;
          fileInput.click();
          
      });

      // Handle file input change
      button.nextElementSibling.addEventListener('change', function(event) {
          let file = event.target.files[0];
          if (file) {
            let reader = new FileReader();
            let imgElement = button.previousElementSibling.previousElementSibling.previousElementSibling;

              reader.onload = function(e) {
                  imgElement.src = e.target.result;
              };

              reader.readAsDataURL(file);
          }
      });
  });

});
