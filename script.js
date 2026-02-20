// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

mobileMenuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
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

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(26, 26, 26, 1)';
    } else {
        navbar.style.background = 'rgba(26, 26, 26, 0.98)';
    }
});

// Package purchase buttons - Square Payment Links
// NOTE: Replace these URLs with actual Square payment links once created
const packageLinks = {
    'training-10': 'https://checkout.square.site/buy/YOUR_TRAINING_10_LINK',
    'fst-10': 'https://checkout.square.site/buy/YOUR_FST_10_LINK',
    'massage-5': 'https://checkout.square.site/buy/YOUR_MASSAGE_5_LINK',
    'combo': 'https://checkout.square.site/buy/YOUR_COMBO_LINK'
};

document.querySelectorAll('.btn-package').forEach(button => {
    button.addEventListener('click', function() {
        const packageType = this.getAttribute('data-package');
        const paymentLink = packageLinks[packageType];
        
        // For now, show alert with instructions
        // Once Square links are added, uncomment the window.open line
        alert('Package purchase coming soon! Please contact us at (416) 432-1684 to purchase this package.\n\nAfterPay available at checkout.');
        
        // Uncomment this line once Square payment links are set up:
        // window.open(paymentLink, '_blank');
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all service cards, package cards, and team members
document.querySelectorAll('.service-card, .package-card, .team-member').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Add active state to nav links based on scroll position
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add loading animation when page loads
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s';
        document.body.style.opacity = '1';
    }, 100);
});

console.log('ATM Mobility & Therapy website loaded successfully');
console.log('To enable package purchases: Add Square payment links to packageLinks object in script.js');
