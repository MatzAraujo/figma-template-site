const menu = document.querySelector('.menu');
const toggles = document.querySelectorAll('.toggle'); 

toggles.forEach(element => {
    element.addEventListener('click', () => {
        menu.classList.toggle('show');
    });
});
