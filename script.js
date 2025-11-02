const video = document.getElementById("video");
const toggleBtn = document.getElementById("toggle");
const volume = document.getElementById("volume");
const playbackSpeed = document.getElementById("playbackSpeed");
const rewind = document.getElementById("rewind");
const skip = document.getElementById("skip");
const speedBar = document.getElementById("speedBar");
const progressFilled = document.getElementById("progressFilled");

// Play/Pause with symbol swap
toggleBtn.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    toggleBtn.innerHTML = "❚❚"; // Pause symbol
  } else {
    video.pause();
    toggleBtn.innerHTML = "&#9658;"; // Play symbol
  }
});
video.addEventListener("play", () => { toggleBtn.innerHTML = "❚❚"; });
video.addEventListener("pause", () => { toggleBtn.innerHTML = "&#9658;"; });

// Volume control
volume.addEventListener("input", () => {
  video.volume = Number(volume.value);
});

// Playback speed control
playbackSpeed.addEventListener("input", () => {
  video.playbackRate = Number(playbackSpeed.value);
  speedBar.textContent = playbackSpeed.value + "X";
});

// Rewind by 10 seconds
rewind.addEventListener("click", () => {
  video.currentTime = Math.max(0, video.currentTime - 10);
});

// Skip forward 25 seconds
skip.addEventListener("click", () => {
  video.currentTime = Math.min(video.duration, video.currentTime + 25);
});

// Progress bar update
video.addEventListener("timeupdate", () => {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.width = percent + "%";
});