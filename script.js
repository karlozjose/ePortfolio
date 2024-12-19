document.addEventListener('DOMContentLoaded', (event) => {
    const colorBox = document.querySelectorAll('.color-box');

    colorBox.forEach((colorBox) => {
        colorBox.addEventListener('mouseover', () => {
            colorBox.style.backgroundColor = 'lightcoral';
        });
    
        colorBox.addEventListener('mouseout', () => {
            colorBox.style.backgroundColor = 'lightblue';
        }); 
    });
});
