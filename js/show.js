// TODO: generalize this
const showButton = document.getElementById("show-interests");
const interests = document.getElementById("interests-container");

showButton.addEventListener("click", event => {
    event.preventDefault();

    if (interests.style.display !== "none") {
	interests.style.display = "none";
    } else {
	interests.style.display = "grid";
    }
});
