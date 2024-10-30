const backgroundEffect = document.querySelector('.background-effect');

backgroundEffect.addEventListener('mouseenter', () => {
    backgroundEffect.style.background = 'linear-gradient(45deg, rgba(255, 0, 0, 0.2), rgba(255, 255, 255, 0.1))';
});

backgroundEffect.addEventListener('mouseleave', () => {
    backgroundEffect.style.background = 'linear-gradient(45deg, rgba(0, 0, 0, 0.2), rgba(255, 255, 255, 0.1))';
});
