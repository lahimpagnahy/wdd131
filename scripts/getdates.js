// Display the current year in the footer
document.addEventListener("DOMContentLoaded", function() {
    // Set the current year for copyright
    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;
    
    // Set the last modified date
    document.getElementById("lastModified").textContent = `Last modification: ${document.lastModified}`;
});