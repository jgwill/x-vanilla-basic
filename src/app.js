// Get the image container
const imageContainer = document.getElementById('image-container');

// Get the modal
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-content');
const close = document.getElementById('close');

// Get image file names from JSON file
fetch('http://yourserver.com/path/to/mywebgalleryimage.json')
  .then(response => response.json())
  .then(data => {
    // For each image path, create an img element and append it to the container
    data.images.forEach((imgName) => {
      const img = document.createElement('img');
      img.src = `img/${imgName}`;
      img.onclick = function() {
        modal.style.display = "block";
        modalContent.src = this.src;
      }
      imageContainer.appendChild(img);
    });
  });

// When the user clicks on <span> (x), close the modal
close.onclick = function() {
  modal.style.display = "none";
}