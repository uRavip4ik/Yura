let homeButton = document.querySelector("#homeButton");
let aboutButton = document.querySelector("#aboutButton");
let photosButton = document.querySelector("#photosButton");
let contactButton = document.querySelector("#contactButton");

homeButton.addEventListener("click", function() {
   
    document.querySelector("#home").scrollIntoView();
});

aboutButton.addEventListener("click", function() {
    document.querySelector("#about").scrollIntoView();
});

photosButton.addEventListener("click", function() {
    document.querySelector("#photos").scrollIntoView();
});

contactButton.addEventListener("click", function() {
    document.querySelector("#contact").scrollIntoView();
});