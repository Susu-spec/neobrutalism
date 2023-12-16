const button = document.getElementById("button");
const element = document.querySelector('.side');
const aside = document.getElementsByTagName('aside')[0];
const calories = document.querySelector('.calories');

button.addEventListener('click', () => {
    element.classList.toggle("d-block");
    calories.classList.toggle("animated-sides");
    aside.classList.toggle("animated-sides");
});


/**
 if (a > b) {
    result = x;
} else {
    result = y;
}
result = a > b ? x : y;
 */
const stackOrder = document.querySelector('stack-order');

document.addEventListener('DOMContentLoaded', function() {
    const stackOrderDivs = document.querySelectorAll('.stack-order');

    stackOrderDivs.forEach(div => {
      div.addEventListener('click', function () {
        const clickedDiv = this;
        const otherDiv = (clickedDiv === stackOrderDivs[0]) ? stackOrderDivs[1] : stackOrderDivs[0];
        if (clickedDiv.style.zIndex === '-1') {
            clickedDiv.style.zIndex = '1';
            otherDiv.style.zIndex = '-1'; 
        }
    
      });
    });
  });



