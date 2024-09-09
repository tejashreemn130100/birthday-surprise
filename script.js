document.addEventListener("DOMContentLoaded", function() {
    const popup = document.getElementById("birthday-popup");
    const closeBtn = document.querySelector(".close");
    const surpriseBtn = document.getElementById("surprise-btn");

    // Show the popup when the page loads
    popup.style.display = "flex";

    // Close the popup when the close button is clicked
    closeBtn.onclick = function() {
        popup.style.display = "none";
    }

    // Add a custom action when the button is clicked
    surpriseBtn.onclick = function() {
        alert("I LOVE U SIDDU ❤️ 🎉");
    }
});
