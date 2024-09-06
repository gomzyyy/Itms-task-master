// Function to fetch data from the JSON file and populate the dropdowns
async function populateDropdowns() {
    try {
        // Fetch country and state data from local JSON file
        let response = await fetch('country_state.json');
        let data = await response.json();
        // Populate country select
        let countrySelect = document.getElementById('country-select');
        data.data.forEach(country => {
            let option = document.createElement('option');
            option.value = country.iso3;
            option.text = country.name;
            countrySelect.add(option);
        });

        // Add event listener to update states based on selected country
        countrySelect.addEventListener('change', function () {
            let selectedCountryCode = this.value;
            populateStates(selectedCountryCode, data.data);
        });

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Function to populate state dropdown
function populateStates(countryCode, countries) {
    // Find the selected country from the JSON data
    let selectedCountry = countries.find(country => country.iso3 === countryCode);


    // Populate state select
    let stateSelect = document.getElementById('state-select');
    stateSelect.innerHTML = '<option value="" disabled selected>Select your state</option>'; // Reset options
    if (selectedCountry && selectedCountry.states) {
        selectedCountry.states.forEach(state => {
            let option = document.createElement('option');
            option.value = state.state_code;
            option.text = state.name;
            stateSelect.add(option);
        });
    }
}

// Call the function on page load
document.addEventListener('DOMContentLoaded', populateDropdowns);


// for header 
let openMenuButton = document.querySelector(".menu-icon-container");
openMenuButton.addEventListener('click', function () {
    document.querySelector(".navigation-bar").classList.add("open");
    console.log('hello')
});

let closeMenuButton = document.querySelector("#close-menu");
closeMenuButton.addEventListener('click', function () {
    document.querySelector(".navigation-bar").classList.remove("open");
});


// for load footer dynamically 
document.addEventListener('DOMContentLoaded', function () {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            if (document.getElementById('footer-placeholder')) {
                document.getElementById('footer-placeholder').innerHTML = data;
            }
        })
        .catch(error => console.error('Error loading footer:', error));
});