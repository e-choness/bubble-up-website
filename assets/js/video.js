document.addEventListener("DOMContentLoaded", function () {
  const videoElement = document.getElementById("introVideo");
  if (videoElement) {
    videoElement.addEventListener("click", function () {
      if (this.paused || this.ended) {
        this.play();
      } else {
        this.pause();
      }
    });
  }
});
