// global constants
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern;
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var cluePauseTime = 333; //how long to pause in between clues
var numMistakes;

function startGame() {
  //initialize game variables
  progress = 0;
  numMistakes = 0;
  gamePlaying = true;

  //swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");

  generatePattern();
  playClueSequence();
}

function stopGame() {
  //reinit game vars
  gamePlaying = false;

  //swap the Start and Stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  //context.resume()
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;

    // speed up for each turn
    clueHoldTime -= 10;
    cluePauseTime -= 5;
  }
}

function generatePattern() {
  pattern = Array.from({ length: 8 }, () => Math.floor(Math.random() * 5) + 1);
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }
  if (pattern[guessCounter] == btn) {
    // correct guess
    if (guessCounter == progress) {
      // see if we are at the last turn
      if (progress == pattern.length - 1) {
        winGame();
      } else {
        // user did this pattern right, go to next clue
        progress++;
        playClueSequence();
      }
    } else {
      // keep checking the user's guesses
      guessCounter++;
    }
  } else {
    //incorrect guess
    numMistakes++;
    if (numMistakes > 2) {
      loseGame();
    } else {
      // give player another chance, play same sequence again
      alert("Wrong! Try again.");
      playClueSequence();
    }
  }
}

// can change behavior later
function loseGame() {
  stopGame();
  alert("Game Over. You lost :(");
}

function winGame() {
  stopGame();
  alert("Game Over. You won :)");
}

// Button Light Functions
function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 470.2,
  5: 530,
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
