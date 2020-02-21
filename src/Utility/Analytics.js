const intervalId = setInterval(() => {
  console.log('sendind analytics!...');
}, 2000);

document.getElementById('stop-analytics-btn').addEventListener('click', () => {
  clearInterval(intervalId);
});
