document.addEventListener("DOMContentLoaded", function() {
    // Get the input element
    const imageInput = document.getElementById("imageInput");
  
    // Add event listener for image upload
    imageInput.addEventListener("change", handleImageUpload);
  });
  
  function handleImageUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
  
    const reader = new FileReader();
    reader.onload = function(event) {
      const imageUrl = event.target.result;
  
      // Set the image as the texture for the sky element
      const imageSky = document.getElementById("imageSky");
      imageSky.setAttribute("src", imageUrl);
    };
  
    reader.readAsDataURL(file);
  }
  