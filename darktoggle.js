// button element
const toggle = document.getElementById("darkmode-toggle");
// whether the user prefersDark
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

toggle.addEventListener("click", event => {
	// dark mode to light mode
	const current = localStorage.getItem("theme");

	if (current === "dark") {
	    document.documentElement.dataset.theme = "light";
	    localStorage.setItem("theme", "light");
	    return;
	} else if (current === "light") {
	    document.documentElement.dataset.theme = "dark";
	    localStorage.setItem("theme", "dark");
	    return;
	} 

	if (prefersDark.matches) {
	    document.documentElement.dataset.theme = "dark";
	    localStorage.setItem("theme", "dark");
	} else {
	    document.documentElement.dataset.theme = "light";
	    localStorage.setItem("theme", "light");
		
	}

	// might revisit these later
	// if (prefersDark.matches) {
	//     // document.body.classList.toggle("light-mode");
	//     document.documentElement.dataset.theme = "light";
	//     // theme = document.body.classList.contains("light-mode") ? "light" : "dark";
	//     theme = document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
	// } else {
	//     // document.body.classList.toggle("dark-mode");
	//     document.documentElement.dataset.theme = "dark";
	//     // theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
	//     theme = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
	// }
	// localStorage.setItem("theme", theme);
});
