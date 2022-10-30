/* -------------------------------------------------------------------------- */
/*                              Web Worker Setup                              */
/* -------------------------------------------------------------------------- */

const iconWebWorker = new Worker('/assets/js/icon-animation-worker.js')

/* --------------------- Load images and then start loop -------------------- */

var images = [];

function addImage(imgSrc) {
  var newImg = new Image();
  images.push({ img: newImg, src: imgSrc });
  return newImg;
}

// Load each image and then start the animation loop.
function loadImages() {
  if (images.length > 0) {

    // Load the first image in the array.
    images[0].img.onload = loadImages;
    images[0].img.src = images[0].src;

    // Delete the first element of the array.
    images.shift();

  } else {
    // Begin the animation loop.
    iconWebWorker.postMessage("start");
  }
}

// Create image objects.
var rocketsImage = addImage("/assets/images/animation-sprites/rockets.png");
var planetsImage = addImage("/assets/images/animation-sprites/planets.png");
var starsImage = addImage("/assets/images/animation-sprites/stars.png");

loadImages();

/* ----------------- Handle canvas update on receive message ---------------- */

var canvas = document.createElement("CANVAS");
var ctx = canvas.getContext("2d");
canvas.width = 16;
canvas.height = 16;

iconWebWorker.onmessage = function (e) {
  // Clear the canvas.
  ctx.fillStyle = "#000"; // black
  ctx.fillRect(0, 0, 16, 16);

  var clipX = 0;
  var clipY = 0;

  // Draw stars
  clipX = e.data.starsSection;
  ctx.drawImage(starsImage, clipX, clipY, 16, 16, 0, 0, 16, 16);

  // Draw planets.
  for (const planet of e.data.planets) {
    // Planets start from 16px in texture image so type starts at 1.
    clipX = planet.type * 16;
    ctx.drawImage(planetsImage, clipX, clipY, 16, 16, planet.x, 0, 16, 16);
  }

  // Draw rocket.
  clipX = e.data.rocketSpriteStage * 16;
  ctx.drawImage(rocketsImage, clipX, clipY, 16, 16, e.data.rocketX, e.data.rocketY, 16, 16);

  var favicons = document.getElementsByClassName("animate-icon-href");
  for (let favicon of favicons) {
    var newIcon = favicon.cloneNode(true);
    newIcon.setAttribute("href", canvas.toDataURL());
    favicon.parentNode.replaceChild(newIcon, favicon);
  }
}

/* ------------------------- END ICON ANIMATION CODE ------------------------ */