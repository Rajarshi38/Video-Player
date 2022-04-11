/* get our elements */
const videoPlayer = document.querySelector(".player");
const video = videoPlayer.querySelector(".viewer");
const progress = videoPlayer.querySelector(".progress");
const progressBar = videoPlayer.querySelector(".progress_filled");
const toggle = videoPlayer.querySelector(".toggle");
const skipButtons = videoPlayer.querySelectorAll("[data-skip]");
const ranges = videoPlayer.querySelectorAll(".player_slider");
let mousedown = false;
/**Build out functions */
function togglePlay() {
  const method = video.paused ? "play" : "pause";
  video[method]();
}

function updateButton() {
  const icon = this.paused ? "►" : "❚❚";
  toggle.textContent = icon;
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function sliderChange() {
  video[this.name] = this.value;
}
function handleProgress() {
  const videoPercent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${videoPercent}%`;
}

function progressBarSlider(e) {
  const progressTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = progressTime;
}

/** Hook up event listeners */

//video play and pause
video.addEventListener("click", togglePlay);
toggle.addEventListener("click", togglePlay);
//play button icon change
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
//skip button video currentTime increase decrease
skipButtons.forEach((btn) => btn.addEventListener("click", skip));
//range slider
ranges.forEach((range) => range.addEventListener("change", sliderChange));
//progress bar
video.addEventListener("timeupdate", handleProgress);

progress.addEventListener("click", progressBarSlider);
progress.addEventListener(
  "mousemove",
  (e) => mousedown && progressBarSlider(e)
);
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));
