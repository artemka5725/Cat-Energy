const slider = document.querySelector('.example__slider-img');
const range = document.querySelector('.example__custom-range');

range.addEventListener('input', e => {
    slider.style.setProperty('--value', range.value + '%');
});

