const panels = document.querySelectorAll(".panel");
const navItems = document.querySelectorAll("#navbar li");

let current = 0;

function showPanel(index) {
  if (index < 0 || index >= panels.length) return;

  panels[current].classList.remove("active");
  navItems[current].classList.remove("active");

  current = index;

  panels[current].classList.add("active");
  navItems[current].classList.add("active");
}

navItems.forEach(item => {
  item.addEventListener("click", () => {
    const index = parseInt(item.dataset.index);
    showPanel(index);
  });
});

window.addEventListener("wheel", (e) => {
  if (e.deltaY > 0 && current < panels.length - 1) {
    showPanel(current + 1);
  } else if (e.deltaY < 0 && current > 0) {
    showPanel(current - 1);
  }
});