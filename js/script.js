var linkContact = document.querySelector(".js-contactUs");
var linkMap = document.querySelector(".js-mapPrev");
var closeContact = document.querySelector(".write-us-popup .close-btn");
var closeMap = document.querySelector(".map-popup .close-btn");
var popupContact = document.querySelector(".write-us-popup");
var popupMap = document.querySelector(".map-popup");

linkContact.addEventListener("click", function(event) {
	event.preventDefault();
	popupContact.classList.add("write-us-popup-show");
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