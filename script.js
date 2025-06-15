// Open modal when image is clicked
const images = document.querySelectorAll(".image-gallery img");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");

images.forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});

// Close modal on clicking the close span or anywhere outside the image
function closeModal() {
  modal.style.display = "none";
}
