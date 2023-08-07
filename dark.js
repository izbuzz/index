const theme = localStorage.getItem("theme");

if (theme === "dark") {
  document.documentElement.classList.toggle("dark-mode");
} else if (theme === "light") {
  document.documentElement.classList.toggle("light-mode");
}
// if currentTheme is null, the theme will be chosen based on
// the user's OS preferences via prefers-color-scheme
