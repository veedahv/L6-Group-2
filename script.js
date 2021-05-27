
const hamburger = document.getElementById('hamburger');
const close = document.getElementById('close');
const dropdownBox = document.getElementById('dropdown-box');

hamburger.addEventListener('click', () => {
    dropdownBox.classList.add('show');
})

close.addEventListener('click', () => {
    dropdownBox.classList.remove('show');
})