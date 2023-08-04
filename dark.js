const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
    // document.body.classList.toggle("dark-mode");
    document.documentElement.dataset.theme = "dark";
} else {
    // document.body.classList.toggle("light-mode");
    document.documentElement.dataset.theme = "light";
}

