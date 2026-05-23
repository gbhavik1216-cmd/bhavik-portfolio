// LOADER
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});

// CURSOR FOLLOW
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// VIDEO HOVER PLAY
document.querySelectorAll(".video video").forEach(video => {
  video.addEventListener("mouseenter", () => video.play());
  video.addEventListener("mouseleave", () => video.pause());
});