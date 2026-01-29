/* Main JS for DIY Craft Studio */

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.overlay');
    
    // Create elements if they don't exist in HTML (or assume they will be there)
    // Checks to prevent errors if elements aren't found on specific pages
    if (hamburger && mobileMenu) {
        // Close button for mobile menu
        const closeBtn = document.createElement('div');
        closeBtn.innerHTML = '&times;';
        closeBtn.style.cssText = 'position: absolute; top: 20px; right: 20px; font-size: 30px; cursor: pointer; color: var(--tertiary);';
        mobileMenu.appendChild(closeBtn);

        hamburger.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            if(overlay) overlay.classList.add('active');
        });

        const closeMenu = () => {
            mobileMenu.classList.remove('active');
            if(overlay) overlay.classList.remove('active');
        };

        closeBtn.addEventListener('click', closeMenu);
        if(overlay) overlay.addEventListener('click', closeMenu);
    }

    // Header Scroll Effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.03)';
        }
    });
});
