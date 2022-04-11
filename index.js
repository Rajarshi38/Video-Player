/* get our elements */
const videoPlayer = document.querySelector(".player");
const video = videoPlayer.querySelector(".viewer");

const progressBar = videoPlayer.querySelector(".progress_filled");
const toggle = videoPlayer.querySelector(".toggle");
const skipButtons = videoPlayer.querySelectorAll("[data-skip]");
const ranges = videoPlayer.querySelectorAll(".player_sldier");
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
  console.log("skip");
}

/** Hook up event listeners */

video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
toggle.addEventListener("click", togglePlay);
console.log(skipButtons);
