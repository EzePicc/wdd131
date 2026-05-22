const temperature = 8;
const windSpeed = 12;

function calculateWindChill(temp, wind) {
    return 13.12 + 0.6215*temp - 11.37*Math.pow(wind, 0.16) + 0.3965*temp*Math.pow(wind, 0.16);
}
function displayWindChill() {
    const windchillElement = document.getElementById('windchill');
    
    if (temperature <= 10 && windSpeed > 4.8) {
        const windchill = calculateWindChill(temperature, windSpeed);
        windchillElement.textContent = windchill.toFixed(1) + ' °C';
    } else {
        windchillElement.textContent = 'N/A';
    }
}
