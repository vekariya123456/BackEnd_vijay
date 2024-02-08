function updateTime() {
    const clockElement = document.getElementById("clock");
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
  
    // Format the time as HH:MM:SS
    const formattedTime = `${hours}:${minutes}:${seconds}`;
  
    // Update the clock element with the formatted time
    clockElement.textContent = formattedTime;
}
updateTime();
setInterval(updateTime, 1000);