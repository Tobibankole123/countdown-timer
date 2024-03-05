const countDownDate = new Date("March 28, 2024 00:00:00").getTime();

function formatNumber(n) {
  if (n < 10) return `0${n}`;

  return n;
}

const x = setInterval(function () {
  const now = new Date().getTime();

  const distance = countDownDate - now;

  // Get days, hours, minutes and seconds
  const days = formatNumber(Math.floor(distance / (1000 * 60 * 60 * 24)));
  const hours = formatNumber(
    Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const minutes = formatNumber(
    Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  );
  const seconds = formatNumber(Math.floor((distance % (1000 * 60)) / 1000));

  // Show values in the browser
  document.getElementById(
    "countdown"
  ).innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  // Show "EXPIRED" if the deadline has passed
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);
