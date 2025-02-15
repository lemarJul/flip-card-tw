document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.card');
    
    // Add click event to flip the card
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});
