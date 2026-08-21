document.addEventListener('DOMContentLoaded', () => {
    const trackingButton = document.getElementById('tracking');

    if (!trackingButton) {
        console.warn('Елемент з id="tracking" не знайдено на сторінці.');
        return;
    }

    trackingButton.addEventListener('click', () => {
        if (typeof gtag === 'function') {
            gtag('event', 'click_tracking_button', {
                event_category: 'engagement',
                event_label: 'tracking_button'
            });
        } else {
            console.warn('gtag не визначено. Перевірте, чи підключено Google Analytics/Google Tag Manager.');
        }
    });
});