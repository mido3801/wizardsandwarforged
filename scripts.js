function toggleContent(buttonElement) {
    const contentElement = buttonElement.nextElementSibling;
    if (contentElement.style.display === "none" || contentElement.style.display === "") {
        contentElement.style.display = "block";
    } else {
        contentElement.style.display = "none";
    }
}


// Function to show a specific month and hide others
function showMonth(monthId) {
    // Get all month elements
    const months = document.querySelectorAll('.month');

    // Hide all months
    months.forEach(month => month.style.display = 'none');

    // Show the selected month
    document.getElementById(monthId).style.display = 'block';
}

// Show January by default
window.onload = function() {
    showMonth('january');
};
