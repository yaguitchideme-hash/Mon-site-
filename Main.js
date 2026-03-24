document.addEventListener('DOMContentLoaded', () => {
    const bouton = document.getElementById('monBouton');
    const message = document.getElementById('message');
    if (bouton && message) {
        bouton.addEventListener('click', () => {
            message.textContent = 'Merci d’avoir cliqué ! 🚀';
        });
    }
});
