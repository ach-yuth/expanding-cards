const panels = document.querySelectorAll(".panel");
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeclasslist();
    panel.classList.add("active");
  });
});

function removeclasslist() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
