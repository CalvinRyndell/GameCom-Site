document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".click-btn1");
    const red = document.querySelector(".red");
    const green = document.querySelector(".green");
    const yellow = document.querySelector(".yellow");
    const blue = document.querySelector(".blue");
    const card = document.getElementById("flip-card");
    const cardContent = document.querySelector(".card_content");
  
    // Store the original content of the card
    const originalContent = cardContent.innerHTML;
  
    button.addEventListener("click", function () {
      // Toggle the 'discovered' class on the card
      card.classList.toggle("discovered");
  
      // Add a link with "Play Game" when the card is flipped
      if (card.classList.contains("discovered")) {
        cardContent.innerHTML = '<a href="cardGame/memory.html" style="transform: rotateY(180deg); display: inline-block; text-decoration: none; color: white">Play Game</a>';
      } else {
        // Restore the original content when the card is not flipped
        cardContent.innerHTML = originalContent;
      }
  
      // Add the class toggling for other elements as per your existing code
      red.classList.toggle("red-expand");
      green.classList.toggle("green-expand");
      yellow.classList.toggle("yellow-expand");
      blue.classList.toggle("blue-expand");
    });
  });
  