window.addEventListener("DOMContentLoaded", () => {
  const countdownDate = new Date("2023-12-31 23:59:59").getTime();

  const timerElement = document.getElementById("timer");

  const updateTimer = () => {
    const currentTime = new Date().getTime();
    const distance = countdownDate - currentTime;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timerElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance <= 0) {
      timerElement.textContent = "Countdown Expired";
    }
  };

  setInterval(updateTimer, 1000);
});
