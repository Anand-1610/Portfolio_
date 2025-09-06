const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });
}

const smoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if(targetElement) {
                 // Close mobile nav if it's open before scrolling
                const nav = document.querySelector('.nav-links');
                const burger = document.querySelector('.burger');
                if (nav.classList.contains('nav-active')) {
                    nav.classList.remove('nav-active');
                    burger.classList.remove('toggle');
                     document.querySelectorAll('.nav-links li').forEach(link => {
                        link.style.animation = '';
                    });
                }
                
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1 // Triggers when 10% of the section is visible
});

const sections = document.querySelectorAll('section');
sections.forEach(section => {
    scrollObserver.observe(section);
});

navSlide();
smoothScroll();

document.addEventListener('DOMContentLoaded', () => {
    if (window.VANTA) {
        VANTA.NET({
            el: "#vanta-bg",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x007bff, // Primary color
            backgroundColor: 0xf0f4f8, // Light background color
            points: 12.00,
            maxDistance: 25.00,
            spacing: 18.00
        });
    }
});

const handleGoogleFormSubmit = () => {
    const form = document.getElementById('contact-form');
    // ... existing code ...
} 