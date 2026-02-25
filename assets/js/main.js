/**
 * DIY Craft Studio - Main JavaScript
 * Handles smooth animations and scroll-reveal effects
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Animation Observer
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'show' class to trigger CSS transition
                entry.target.classList.add('show');
                // Optional: Stop observing after animation triggers
                // animationObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15, // Trigger when 15% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Slightly offset the trigger point
    });

    // 2. Select and Observe Elements
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach(element => {
        animationObserver.observe(element);
    });

    // 3. Mobile Hamburger Menu (Existing logic restoration)
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.overlay');

    if (hamburger && mobileMenu && overlay) {
        // Hamburger Menu Toggle
        hamburger.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            overlay.classList.add('active');
            hamburger.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });

        const closeMenu = () => {
            mobileMenu.classList.remove('active');
            overlay.classList.remove('active');
            hamburger.classList.remove('active');
            document.body.style.overflow = 'auto';
        };

        overlay.addEventListener('click', closeMenu);

        // Close menu when clicking links
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }

    // 4. Header Scroll Effect
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // 5. Theme Toggle Logic
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-theme');
            const isDark = body.classList.contains('dark-theme');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    }
});
