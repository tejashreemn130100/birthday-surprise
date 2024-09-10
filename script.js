document.addEventListener("DOMContentLoaded", function() {
    const popup = document.getElementById("birthday-popup");
    const closeBtn = document.querySelector(".close");
    const surpriseBtn = document.getElementById("surprise-btn");

    // Show the popup when the page loads
    popup.style.display = "flex";

    // Close the popup when the close button is clicked
    closeBtn.onclick = function() {
        popup.style.display = "none";
    };

    // Add a custom action when the surprise button is clicked
    surpriseBtn.onclick = function() {
        // Hide the current popup content and display the surprise message
        document.querySelector(".popup-content").innerHTML = `
            <h1 style="font-size: 4rem;">💖 I LOVE YOU, SIDDU 💖</h1>
            <p style="font-size: 1.5rem;">You mean the world to me! ❤️</p>
            <p style="font-size: 2rem;">🎉 Let’s celebrate your day 🎉</p>
            <img src="heart.png" alt="Hearts" style="width: 200px; animation: float 2s infinite;">`;
    };
});
