let backBtn = document.querySelector(".back-btn");
let forwardBtn = document.querySelector(".forward-btn");
let gallary = document.querySelector(".gallary");

let scrollIndex = 0;

forwardBtn.addEventListener("click", () => {
  scrollIndex = scrollIndex + 300;
  scrollIndex = Math.max(300,scrollIndex);
  gallary.scrollTo(scrollIndex, 0);
});
backBtn.addEventListener("click", () => {
  scrollIndex -= 300;
  scrollIndex = Math.min(600,scrollIndex);
  gallary.scrollTo(scrollIndex, 0);
});
