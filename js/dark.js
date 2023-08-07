// get the user's preferences, may be null 
// if they have not toggled a theme yet
const theme = localStorage.getItem("theme");

// toggle scheme based on user choice
if (theme === "dark") {
  document.documentElement.classList.toggle("dark-mode");
} else if (theme === "light") {
  document.documentElement.classList.toggle("light-mode");
}
// if theme is null, the theme will be chosen based on
// the user's OS preferences via prefers-color-scheme
