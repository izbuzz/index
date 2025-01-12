const theme = localStorage.getItem("dark");
const colorswitch = document.querySelector("#colorswitch");

colorswitch.checked = (theme === "true")

colorswitch.addEventListener("change", function(e) {
    if (e.currentTarget.checked === "true") {
	localStorage.setItem("dark", "true");
    } else {
	localStorage.setItem("dark", "false");
    }
})
