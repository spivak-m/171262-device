var linkContact = document.querySelector(".js-contactUs");
var linkMap = document.querySelector(".js-mapPrev");
var closeContact = document.querySelector(".write-us-popup .close-btn");
var closeMap = document.querySelector(".map-popup .close-btn");
var popupContact = document.querySelector(".write-us-popup");
var popupMap = document.querySelector(".map-popup");
var contactForm = popupContact.querySelector("form");
var loginInput = contactForm.querySelector("[name=your-name]");
var emailInput = contactForm.querySelector("[name=your-email]");
var questionInput = contactForm.querySelector("[name=your-text]");

linkContact.addEventListener("click", function(event) {
	event.preventDefault();
	popupContact.classList.add("write-us-popup-show");
	loginInput.focus();
});

closeContact.addEventListener("click", function(event) {
	event.preventDefault();
	popupContact.classList.remove("write-us-popup-show");
});

linkMap.addEventListener("click", function(event) {
	event.preventDefault();
	popupMap.classList.add("map-popup-show");
});

closeMap.addEventListener("click", function(event) {
	event.preventDefault();
	popupMap.classList.remove("map-popup-show");
});

contactForm.addEventListener("submit", function(event) {
	if (!loginInput.value || !emailInput.value || !questionInput.value) {
		event.preventDefault();
	}
});

contactForm.addEventListener("submit", function(event) {
	if (!loginInput.value) {
		event.preventDefault();
		loginInput.classList.add("input-novalue");
	} else {
		loginInput.classList.remove("input-novalue");
	}
});

contactForm.addEventListener("submit", function(event) {
	if (!emailInput.value) {
		event.preventDefault();
		emailInput.classList.add("input-novalue");
	} else {
		emailInput.classList.remove("input-novalue");
	}
});

contactForm.addEventListener("submit", function(event) {
	if (!questionInput.value) {
		event.preventDefault();
		questionInput.classList.add("input-novalue");
	} else {
		questionInput.classList.remove("input-novalue");
	}
});
