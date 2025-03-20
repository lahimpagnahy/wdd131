// Update current year and last modified date
document.addEventListener('DOMContentLoaded', function() {
    // Set current year
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;
    
    // Set last modified date
    const lastModified = document.lastModified;
    document.getElementById('last-modified').textContent = lastModified;
    
    // Calculate and display wind chill
    calculateAndDisplayWindChill();
});

// Function to calculate and display wind chill
function calculateAndDisplayWindChill() {
    // Get temperature and wind speed values
    const temperature = 10; // °C
    const windSpeed = 5; // km/h
    
    // Display wind chill
    const windChillElement = document.getElementById('windchill');
    
    // Check if conditions are met for wind chill calculation
    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temperature, windSpeed);
        windChillElement.textContent = `${windChill.toFixed(1)} °C`;
    } else {
        windChillElement.textContent = "N/A";
    }
}

// Function to calculate wind chill (metric formula)
function calculateWindChill(temperature, windSpeed) {
    return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
}