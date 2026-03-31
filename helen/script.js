const btn = document.getElementById('confettiBtn');

btn.addEventListener('click', () => {
    // You could link this to a real confetti library like canvas-confetti
    alert("🌟 MISSION ACCEPTED! 🌟\nGet ready for Helen's Epic 9th Birthday Battle!\nSee you in Kafarzabad!");
    
    // Extra fun: change the background color randomly when clicked
    document.body.style.background = "radial-gradient(circle, #7000ff 0%, #ff00ff 100%)";
    setTimeout(() => {
        document.body.style.background = "radial-gradient(circle, #2d004b 0%, #000000 100%)";
    }, 500);
});