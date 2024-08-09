const dropdownButton = document.getElementById('dropdownButton');
const dropdown = document.getElementById('dropdown');

// Toggle dropdown on button click
dropdownButton.addEventListener('click', function(event) {
    event.stopPropagation();  // Prevent the click from propagating to the window
    dropdown.classList.toggle('hidden');
});

// Close dropdown when clicking outside of the button and dropdown
window.addEventListener('click', function(event) {
    if (!dropdown.contains(event.target) && !dropdownButton.contains(event.target)) {
        dropdown.classList.add('hidden');
    }
});

$(document).ready(function() {
    $('#dropdownNavbarLink').on('click', function() {
        $('#dropdownNavbar').toggleClass('hidden');
    });

    $(document).on('click', function(event) {
        if (!$(event.target).closest('#dropdownNavbarLink').length && !$(event.target).closest('#dropdownNavbar').length) {
            $('#dropdownNavbar').addClass('hidden');
        }
    });
});