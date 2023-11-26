// List of image paths
const imgList = [
  "img/Extracting_consistent_recurring_fractal_trading_signals.png",
  "img/jgwill_fractal_0895ca6c-5df6-466d-b12d-a63763a2a85c.png",
  // continue with the rest of your images...
  "img/Utilizing_fractal_geometry_to_identify_entry_and_exit_signals.png"
];

// Get the image container
const imageContainer = document.getElementById('image-container');

// For each image path, create an img element and append it to the container
imgList.forEach((imgPath) => {
  const img = document.createElement('img');
  img.src = imgPath;
  imageContainer.appendChild(img);
});