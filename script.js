// Navbar scroll effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Contact form submission
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will be in touch soon.');
    e.target.reset();
});

// DEBUG: Check if script is running
console.log("VOTIVA Script Loaded");

// Gem meaning display - FIXED VERSION
document.addEventListener('DOMContentLoaded', () => {
    const gems = document.querySelectorAll('.gem-item');
    const display = document.getElementById('gem-lore-display');

    // Debug check
    if (gems.length === 0) console.error("Error: No .gem-item elements found");
    if (!display) console.error("Error: No #gem-lore-display element found");

    if (gems.length > 0 && display) {
        gems.forEach(gem => {
            // Mouse Enter
            gem.addEventListener('mouseenter', (e) => {
                // Get data from the element that triggered the event
                const lore = e.currentTarget.dataset.lore;
                console.log("Hovered gem:", lore); // Debug log

                if (lore) {
                    display.style.opacity = '0';
                    setTimeout(() => {
                        display.textContent = lore;
                        display.style.opacity = '1';
                        display.style.color = '#fff';
                        display.style.textShadow = '0 0 10px rgba(255,255,255,0.5)';
                    }, 100);
                }
            });

            // Mouse Leave
            gem.addEventListener('mouseleave', () => {
                display.style.opacity = '0';
                setTimeout(() => {
                    display.textContent = 'Select your offering.';
                    display.style.opacity = '1';
                    display.style.color = '#E0E0E0';
                    display.style.textShadow = 'none';
                }, 100);
            });
        });
    }
});