document.addEventListener("DOMContentLoaded", function() {
    const backgroundMusic = document.getElementById('background-music');
    const playPromise = backgroundMusic.play();

    if (playPromise !== undefined) {
        playPromise.then(() => {
            console.log("Reproducción automática de música iniciada.");
        }).catch(error => {
            console.log("La reproducción automática fue bloqueada.", error);
            const iniciarMusica = () => {
                backgroundMusic.play().then(() => {
                    console.log("Música reproducida tras la interacción del usuario.");
                    document.removeEventListener('click', iniciarMusica);
                    document.removeEventListener('keydown', iniciarMusica);
                }).catch(err => {
                    console.log("Error al intentar reproducir la música tras la interacción del usuario.", err);
                });
            };

            document.addEventListener('click', iniciarMusica);
            document.addEventListener('keydown', iniciarMusica);
        });
    }

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