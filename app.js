const button = document.getElementById("button");
const element = document.querySelector('.side');
const aside = document.getElementsByTagName('aside')[0];
const calories = document.querySelector('.calories');

button.addEventListener('click', () => {
    element.classList.toggle("d-block");
    calories.classList.toggle("animated-sides");
    aside.classList.toggle("animated-sides");
});

