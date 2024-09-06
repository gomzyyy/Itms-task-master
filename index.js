let openMenuButton = document.querySelector(".menu-icon-container");
openMenuButton.addEventListener('click', function () {
    document.querySelector(".navigation-bar").classList.add("open");
    console.log('hello')
});

let closeMenuButton = document.querySelector("#close-menu");
closeMenuButton.addEventListener('click', function () {
    document.querySelector(".navigation-bar").classList.remove("open");
});

// function for load footer dynamically
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