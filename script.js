document.addEventListener("DOMContentLoaded", function() {
    const countdownElement = document.getElementById('countdown');
    const targetDate = new Date('September 15, 2024 20:00:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            countdownElement.innerHTML = "Manu, prepárate";
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