const btnFirstName = document.querySelector("#btnFirstName");
const firstName = document.querySelector("#firstName");
const errMsg = document.querySelector("#errMsg");

const sad = document.querySelector("#sad");
const displayMood = document.querySelector("#displayMood");
const images = document.querySelectorAll("img");

const displayMessage = document.querySelector("#displayMessage");

let currentMood = "";

// Button for text field
btnFirstName.addEventListener("click", () => {
	if (firstName.value === "") {
		errMsg.innerHTML = "Textbox cannot be empty";
		errMsg.style.color = "red";
	} else {
		document.querySelector("#simleyDiv").style.display = "block";
		document.querySelector(
			"#welcomeText"
		).innerHTML = `Welcome ${firstName.value}, how are you feeling today?`;
	}
});

images.forEach((image) => {
	image.addEventListener("mouseover", () => {
		displayMood.innerHTML = image.getAttribute("alt");
		switch (image.getAttribute("alt")) {
			case "Sad":
				displayMood.style.color = "red";
				break;
			case "Stressed":
				displayMood.style.color = "yellow";
				break;
			case "Happy":
				displayMood.style.color = "green";
				break;
		}
	});
});

displayMessage;
