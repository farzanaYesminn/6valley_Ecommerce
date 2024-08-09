const dropdownRightNavButton = document.getElementById('dropdownRightNavButton');
const dropdownRightNav = document.getElementById('dropdownRightNav');

const dropdownButtons = ['dropdownOfferButton', 'dropdownStoreButton', 'dropdownBrandsButton'];

dropdownRightNavButton.addEventListener('click', function() {
    dropdownRightNav.classList.toggle('hidden');
});

dropdownButtons.forEach(buttonId => {
    const button = document.getElementById(buttonId);
    const dropdown = document.getElementById(buttonId.replace('Button', ''));

    button.addEventListener('click', function(event) {
        event.stopPropagation();

        dropdownButtons.forEach(id => {
            if (id !== buttonId) {
                const otherDropdown = document.getElementById(id.replace('Button', ''));
                otherDropdown.classList.add('hidden');
            }
        });

        dropdown.classList.toggle('hidden');
    });

    dropdown.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});

window.addEventListener('click', function() {
    dropdownButtons.forEach(buttonId => {
        const dropdown = document.getElementById(buttonId.replace('Button', ''));
        dropdown.classList.add('hidden');
    });
});

document.getElementById('close-button').addEventListener('click', function() {
    document.getElementById('promo-section').classList.add('hidden');
});