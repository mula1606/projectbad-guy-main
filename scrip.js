// Get all thumbnail images and the modal elements
const thumbnails = document.querySelectorAll(".thumbnail-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");
const closeBtn = document.getElementById("close");

// Add event listener for each thumbnail
thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    // When a thumbnail is clicked, open the lightbox
    lightbox.style.display = "flex";

    // Set the clicked image as the lightbox image
    lightboxImg.src = thumbnail.src;

    // Set the caption of the clicked image (optional)
    lightboxCaption.textContent = thumbnail.alt;
  });
});

// Add event listener to the close button
closeBtn.addEventListener("click", () => {
  // Close the lightbox when the close button is clicked
  lightbox.style.display = "none";
});

// Close the lightbox if the user clicks anywhere outside the image
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});
