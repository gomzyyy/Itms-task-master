// Variable to store the initial distance
let initialDistanceFromTop;

// Function to get the initial distance and store it
function storeInitialDistance() {
    const filterButton = document.querySelector('.filter-button-container button');
    if (filterButton) {
        const filterButtonRect = filterButton.getBoundingClientRect();
        initialDistanceFromTop = filterButtonRect.top;
        console.log('Initial distance from top of the viewport:', initialDistanceFromTop);
    }
}

// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', storeInitialDistance);