// Product Array
const products = [
    { id: 1, name: "Smart Home Security System" },
    { id: 2, name: "Wireless Bluetooth Headphones" },
    { id: 3, name: "Ultra HD Smart TV" },
    { id: 4, name: "Robotic Vacuum Cleaner" },
    { id: 5, name: "Smart Fitness Tracker" },
    { id: 6, name: "High-Performance Laptop" },
    { id: 7, name: "Digital Camera with Wi-Fi" },
    { id: 8, name: "Portable Bluetooth Speaker" }
];

// Initialize page functionality
document.addEventListener('DOMContentLoaded', function() {
    // Set last modified date
    document.getElementById('lastModified').textContent = document.lastModified;

    // If we're on the form page, populate products
    if (document.getElementById('productName')) {
        populateProducts();
    }

    // If we're on the confirmation page, handle the submission
    if (document.querySelector('.confirmation')) {
        handleConfirmation();
    }
});

// Populate product dropdown from array
function populateProducts() {
    const productSelect = document.getElementById('productName');
    
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.name;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
}

// Handle the form submission and confirmation page
function handleConfirmation() {
    // Get URL parameters
    const params = new URLSearchParams(window.location.search);
    
    // Get values from form submission
    const productName = params.get('productName');
    const rating = params.get('rating');
    const installDate = params.get('installDate');
    const features = params.getAll('features');
    const reviewText = params.get('reviewText');
    const userName = params.get('userName') || 'Anonymous';
    
    // Display submitted values on confirmation page
    document.getElementById('confirmedProduct').textContent = productName;
    document.getElementById('confirmedRating').textContent = rating + ' ' + '★'.repeat(parseInt(rating));
    document.getElementById('confirmedDate').textContent = formatDate(installDate);
    
    // Handle features display
    const featuresElement = document.getElementById('confirmedFeatures');
    if (features && features.length > 0) {
        featuresElement.textContent = features.join(', ');
    } else {
        featuresElement.textContent = 'None selected';
    }
    
    // Handle review text and username
    document.getElementById('confirmedReview').textContent = reviewText || 'No review provided';
    document.getElementById('confirmedName').textContent = userName;
    
    // Update review count in localStorage
    updateReviewCount();
}

// Format date to be more readable
function formatDate(dateString) {
    if (!dateString) return 'Not provided';
    
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Update and display the review count
function updateReviewCount() {
    // Get current count from localStorage or initialize to 0
    let count = parseInt(localStorage.getItem('reviewCount') || '0');
    
    // Increment count
    count++;
    
    // Save back to localStorage
    localStorage.setItem('reviewCount', count.toString());
    
    // Display count on page
    document.getElementById('reviewCount').textContent = count;
}