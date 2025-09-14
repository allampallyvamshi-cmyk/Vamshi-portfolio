// Main JavaScript file for Vamshi's Portfolio

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio loaded successfully!');

    // Add smooth scrolling for internal links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Add hover effects to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.15)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        });
    });

    // Add a simple fade-in effect for sections
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Add dynamic date to footer (if exists)
    const footer = document.querySelector('footer');
    if (footer) {
        const currentYear = new Date().getFullYear();
        const yearSpan = document.createElement('span');
        yearSpan.textContent = `© ${currentYear} Vamshi's Portfolio`;
        footer.appendChild(yearSpan);
    }

    // Add a feature to highlight the current section in the navigation
    function highlightActiveSection() {
        const sectionElements = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('nav a');
        
        for (let i = sectionElements.length - 1; i >= 0; i--) {
            const section = sectionElements[i];
            const rect = section.getBoundingClientRect();
            
            if (rect.top <= 100) {
                navLinks.forEach(link => link.classList.remove('active'));
                const activeLink = document.querySelector(`nav a[href="#${section.id}"]`);
                if (activeLink) activeLink.classList.add('active');
                break;
            }
        }
    }

    // Ltisten to scroll events
    window.addEventListener('scroll', highlightActiveSection);

    console.log('🚀 Portfolio JavaScript initialized!');
});

// Add a generic error handler
window.addEventListener('error', function(e) {
    console.error('🚨 An error occurred:', e.error);
});