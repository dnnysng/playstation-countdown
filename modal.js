// Get the modal
var squareModal = document.getElementById("squareModal");

// Get the button that opens the modal
var squareBtn = document.getElementById("squareBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
squareBtn.onclick = function() {
  squareModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  squareModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == squareModal) {
    squareModal.style.display = "none";
  }
}