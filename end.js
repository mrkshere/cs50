
const urlParams = new URLSearchParams(window.location.search);
const numCorrect = urlParams.get("finalScore");
const numCorrectElement = document.getElementById("finalScore");
numCorrectElement.textContent = numCorrect;
