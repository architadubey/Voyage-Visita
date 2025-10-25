// Array of images for slideshow
const images = [
  "mountain.jpg",
  "Rajasthan (2).jpg",
  "D.jpg",
  "Goa.jpg",
  "kkerela.jpg"
];

let index = 0;
const hero = document.getElementById("hero");

// Function to change background
function changeBackground() {
  hero.style.backgroundImage = `url('${images[index]}')`;
  index = (index + 1) % images.length; // loop back
}

// Initial load
changeBackground();

// Change image every 5 seconds
setInterval(changeBackground, 5000);

