// button element
const toggle = document.getElementById("darkmode-toggle");
// whether the user prefersDark
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

toggle.addEventListener("click", (event) => {
  let theme;
  // prevents having to press the button twice because theme is empty
  if (prefersDark.matches) {
    document.documentElement.classList.toggle("light-mode");
    theme = document.documentElement.classList.contains("light-mode") ? "light" : "dark";
  } else {
    document.documentElement.classList.toggle("dark-mode");
    theme = document.documentElement.classList.contains("dark-mode") ? "dark" : "light";
  }
  localStorage.setItem("theme", theme);
});
