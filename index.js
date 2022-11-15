/* global, sessionStorage */

////////////////////////////////////////////////////////////////////////////////
//////////////////////////// SETUP /////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// Constant constiables
const FRAME_RATE = 60;
const FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;

// Game Item Objects


// one-time setup
const interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
document.addEventListener('eventType', handleEvent);                // change 'eventType' to the type of event you want to handle

////////////////////////////////////////////////////////////////////////////////
///////////////////////// CORE LOGIC ///////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/* 
On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
by calling this function and executing the code inside.
*/
function newFrame() {
  

}

/* 
Called in response to events.
*/
function handleEvent(event) {

}

////////////////////////////////////////////////////////////////////////////////
////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


function endGame() {
  // stop the interval timer
  clearInterval(interval);

  // turn off event handlers
  document.removeEventListener('', handleEvent); // change 'eventType' to the type of event you want to handle
}

