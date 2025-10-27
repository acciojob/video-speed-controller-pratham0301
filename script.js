// Select HTML elements
const video = document.querySelector('video');
const progressFilled = document.querySelector('.progress_filled');
const toggle = document.getElementById('toggle');
const volume = document.getElementById('volume');
const playbackSpeed = document.getElementById('playbackSpeed');
const rewind = document.getElementById('rewind');
const skip = document.getElementById('skip');

// Play/Pause Toggle
function togglePlay() {
    if (video.paused) {
        video.play();
        toggle.textContent = '❚❚'; // Unicode for pause icon
    } else {
        video.pause();
        toggle.textContent = '►'; // Unicode for play icon
    }
}

// Update Progress Bar
function updateProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressFilled.style.width = ${percent}%;
}

// Volume Change
volume.addEventListener('input', function() {
    video.volume = this.value;
});

// Playback Speed Change
playbackSpeed.addEventListener('input', function() {
    video.playbackRate = this.value;
});

// Rewind 10 seconds
rewind.addEventListener('click', function() {
    video.currentTime = Math.max(0, video.currentTime - 10);
});

// Skip Forward 25 seconds
skip.addEventListener('click', function() {
    video.currentTime = Math.min(video.duration, video.currentTime + 25);
});

// Play/Pause on button click and video click
toggle.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);

// Update progress bar as video plays
video.addEventListener('timeupdate', updateProgress);

// Set initial icons
video.addEventListener('pause', function() {
    toggle.textContent = '►';
});
video.addEventListener('play', function() {
    toggle.textContent = '❚❚';
});