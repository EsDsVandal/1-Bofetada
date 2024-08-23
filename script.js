document.addEventListener("DOMContentLoaded", function() {
    const backgroundMusic = document.getElementById('background-music');

    // Intentar reproducir la música automáticamente
    const playPromise = backgroundMusic.play();

    if (playPromise !== undefined) {
        playPromise.then(() => {
            // Reproducción automática exitosa
            console.log("Reproducción automática de música iniciada.");
        }).catch(error => {
            // La reproducción automática fue bloqueada
            console.log("La reproducción automática fue bloqueada.", error);

            // Función para reproducir la música tras una interacción del usuario
            const iniciarMusica = () => {
                backgroundMusic.play().then(() => {
                    console.log("Música reproducida tras la interacción del usuario.");
                    // Remover los listeners después de reproducir la música
                    document.removeEventListener('click', iniciarMusica);
                    document.removeEventListener('keydown', iniciarMusica);
                }).catch(err => {
                    console.log("Error al intentar reproducir la música tras la interacción del usuario.", err);
                });
            };

            // Agregar listeners para eventos de interacción del usuario
            document.addEventListener('click', iniciarMusica);
            document.addEventListener('keydown', iniciarMusica);
        });
    }

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