document.addEventListener("DOMContentLoaded", function() {
    // Intentamos reproducir la música de fondo
    const backgroundMusic = document.getElementById('background-music');
    
    // Intenta reproducir la música cuando la página esté cargada
    backgroundMusic.play().catch(function(error) {
        console.log("La reproducción automática fue bloqueada, se necesita una interacción del usuario.");
    });
    
    // Configurar el volumen de la música de fondo al 50%
    backgroundMusic.volume = 0.5;

    const countdownElement = document.getElementById('countdown');
    const targetDate = new Date('September 14, 2024 20:00:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            countdownElement.innerHTML = "Manu, ten cuidado";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `
            ${days} : ${hours} : ${minutes} : ${seconds}
        `;
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();
});