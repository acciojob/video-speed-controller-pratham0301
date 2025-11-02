const video = document.getElementById("video");
const toggleBtn = document.getElementById("toggle");
const volumeSlider = document.getElementById("volume");
const playbackSpeedInput = document.getElementById("playbackSpeed");
const rewindBtn = document.getElementById("rewind");
const skipBtn = document.getElementById("skip");
const speedBar = document.getElementById("speedBar");
const progressFilled = document.getElementById("progressFilled");

// Toggle Play/Pause
toggleBtn.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    toggleBtn.textContent = "❚❚";
  } else {
    video.pause();
    toggleBtn.textContent = "►";
  }
});

// Update volume
volumeSlider.addEventListener("input", () => {
  video.volume = volumeSlider.value;
});

// Update playback speed (and show in speedBar)
playbackSpeedInput.addEventListener("input", () => {
  video.playbackRate = playbackSpeedInput.value;
  speedBar.textContent = playbackSpeedInput.value + "X";
});

// Rewind 10 seconds
rewindBtn.addEventListener("click", () => {
  video.currentTime = Math.max(0, video.currentTime - 10);
});

// Skip forward 25 seconds
skipBtn.addEventListener("click", () => {
  video.currentTime = Math.min(video.duration, video.currentTime + 25);
});

// Update progress bar as video plays
video.addEventListener("timeupdate", () => {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.width = percent + "%";
});

// Set initial toggle button
video.addEventListener("play", () => { toggleBtn.textContent = "❚❚" });
video.addEventListener("pause", () => { toggleBtn.textContent = "►" });