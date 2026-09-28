// js/main.js
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Set Active Nav Link
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navItems = document.querySelectorAll('.nav-links a');
    
    navItems.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Scroll Reveal Animation (Intersection Observer)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Function to apply animations to dynamically or statically added elements
    window.observeElements = () => {
        const elementsToAnimate = document.querySelectorAll(`
            .hero h1, .hero p, .hero-btns, 
            .section-header, 
            .card, 
            .step, 
            .roadmap-item,
            .cta-section,
            .details-content,
            .assessment-container
        `);

        elementsToAnimate.forEach((el, index) => {
            if (!el.classList.contains('animate-on-scroll') && !el.classList.contains('is-visible')) {
                el.classList.add('animate-on-scroll');
                
                // Add a very subtle delay for grids to stagger entry
                if(el.classList.contains('card') || el.classList.contains('step') || el.classList.contains('roadmap-item')) {
                    const delay = (index % 4) * 0.05;
                    el.style.transitionDelay = `${delay}s`;
                }
                
                observer.observe(el);
            }
        });
    };

    // Initial observation
    window.observeElements();
});
