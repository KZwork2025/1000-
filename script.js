document.addEventListener('DOMContentLoaded', function() {
    const telegramButton = document.querySelector('.telegram-button');
    
    telegramButton.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.boxShadow = '0 0 30px rgba(255, 51, 51, 0.7)';
    });

    telegramButton.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = '0 0 20px rgba(255, 51, 51, 0.5)';
    });
});
