// TODO: Turn into a game where player can move rocket up/down/left/right.
//  - World background is one image that gets clipped on each move.
//  - Player has a speed, which corresponds to the timeout interval.
//  - WASD control direction, FR control speed up/down, X to exit, SPACE to perform action.
//  - Easter egg to unlock game? Or just link in the footer?
//  - Game idea: planets are in a circle around rocket, title is a timer, fastest to move to and perform action on a planet is high-score.
//  - Game idea: text based RPG where rocket has to go to certain planets whilst the title tells a story in checkpoints at each action.
//  - Game idea: each planet corresponds to a game, have multiple and the 'space area' is a hub to select which favicon game to play.
//    - Snake, Maze, Pac-Man, Dino, Flappy Birds
//    - Would have to make code more generic and robust.

// IDEA: make generic so sprites are passed in as data objects and scroll etc.
// the worker messages back every so often with the position and coming up sprites etc.
// then custom game logic can be written in the index.js.  The index can map game data to coming up
// sprites like hit location etc.

self.onmessage = function () {
  start();
}

// Game state function.
// IDEA: Add a launch animation.
// IDEA: Add a landing animation.
var currentAnimationStage = flyingAnimation;

// Animation loop.
function start() {
  // Start the first animation state.
  flyingAnimationStart(); // (currently hardcoded to the flying animation)

  // Start the animation loop.
  self.setInterval(function () {
    currentAnimationStage();
    animationRender();
  }, 90);
}

/* -------------------------------------------------------------------------- */

// Globals.
var rocketSpriteStage = 1; // (1-6)
var rocketJiggleStage = 0; // (0-5)

// Animation.
var rocketX = 8; // (distance from right of icon)
var rocketY = 8; // (distance from bottom of icon)

var planets = []; // Stores x pos and type of planets.

var starsSection = 0;

/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/* ------------------------- FLYING ANIMATION STAGE ------------------------- */

// Set the global variables to the initial state for this animation stage.
function flyingAnimationStart() {
  rocketY = 0;
  rocketX = 0;
  planets.length = 0; // Empty planets array.
  starsSection = 0; // Start the star background at px=0.
}

// Do all calculations for the next frame of the animation.
function flyingAnimation() {

  if (planets.length > 0) {
    if (planets[planets.length - 1].x < 16) {
      // Distance from the right edge of the icon from 20-30 pixels.
      var distance = Math.floor(Math.random() * 20) + 30;

      // Random planet type from 1-7. (Types start at 1).
      var type = Math.floor(Math.random() * 7) + 1;

      // Make the planet.
      planets.push({ x: 16 + distance, type: type });
    }
  } else {
    // Make a new planet if there are none. (Types start at 1).
    planets.push({ x: 16, type: 1 });
  }

  // Update planet position.
  for (var i = 0; i < planets.length; i++) {

    if (rocketJiggleStage / 2 == 0) {
      planets[i].x--;

      // Move star background at same speed of planets.
      starsSection++;
      if (starsSection == 256 - 16) {
        starsSection = 0;
      }
    }
    if (planets[i].x < -16) {
      // Remove the planet if it has left the screen.
      planets.splice(i, 1);
    }
  }

  // RocketJiggle:
  //  - Stage 0: Left
  //  - Stage 1: Right
  //  - Stage 2: Left
  //  - Stage 3: Down
  //  - Stage 4: Right
  //  - Stage 5: Up

  // Decide if to jiggle.
  if (Math.floor(Math.random() * 2) == 0) {

    switch (rocketJiggleStage) {
      case 0:
      case 2:
        rocketX--;
        break;
      case 1:
      case 4:
        rocketX++;
        break;
      case 5:
        rocketY++;
        break;
      case 3:
        rocketY--;
        break;
    }

    rocketJiggleStage++;
    if (rocketJiggleStage == 6) {
      rocketJiggleStage = 0;
    }
  }

  rocketSpriteStage++;
  if (rocketSpriteStage == 7) {
    rocketSpriteStage = 1;
  }
}

/* ----------------------- END FLYING ANIMATION STAGE ----------------------- */
/* -------------------------------------------------------------------------- */

function animationRender() {
  // Send the calculated variables to be rendered to the DOM.
  self.postMessage({
    starsSection,
    planets,
    rocketSpriteStage,
    rocketX,
    rocketY,
  });
}