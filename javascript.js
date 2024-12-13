document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    console.log("Space key pressed, but default behavior prevented!");
  }
});