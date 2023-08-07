// button element
const toggle = document.getElementById("darkmode-toggle");
// whether the user prefersDark
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

// icons used for the toggle
const lightIcon = document.getElementById("light-icon");
const darkIcon = document.getElementById("dark-icon");

// get the current theme, if it is null, 
// set to dark if the user's prefers dark. Otherwise, set it to light
const currentTheme = localStorage.getItem("theme") ?? prefersDark.matches ? "dark" : "light";
showButtonIcon(currentTheme)

toggle.addEventListener("click", (event) => {
  let theme;
  // prevents having to press the button twice because theme is empty
  if (prefersDark.matches) {
    document.documentElement.classList.toggle("light-mode");
    // assign a different theme if we are already in lightmode
    theme = document.documentElement.classList.contains("light-mode") ? "light" : "dark";
  } else {
    // same here
    document.documentElement.classList.toggle("dark-mode");
    theme = document.documentElement.classList.contains("dark-mode") ? "dark" : "light";
  }
  // store the user's preference so it preserves across pages
  localStorage.setItem("theme", theme);
  showButtonIcon(theme);
});

// changes between a moon or sun depending on theme
function showButtonIcon(theme) {
  if (theme === "light") {
    darkIcon.style.display = "block";
    // hide the other icon
    lightIcon.style.display = "none";
  } else if (theme === "dark") {
    lightIcon.style.display = "block";
    darkIcon.style.display = "none";
  }
}

