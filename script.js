// Print resume functionality
document.getElementById('print-btn').addEventListener('click', function () {
    window.print();
});

// Smooth scrolling for navigation (if we add navigation later)
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

// Add animation to sections on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply animation to all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Add hover effects to project and experience items
document.querySelectorAll('.project-item, .experience-item').forEach(item => {
    item.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
    });

    item.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
    });
});

// Skill tags animation
document.querySelectorAll('.skill-category li').forEach(skill => {
    skill.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.1)';
    });

    skill.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1)';
    });
});

// Dynamic year calculation for expected graduation
function updateGraduationYear() {
    const currentYear = new Date().getFullYear();
    const graduationElement = document.querySelector('.education-item p:nth-child(3)');
    if (graduationElement && graduationElement.textContent.includes('Expected Graduation')) {
        graduationElement.textContent = `Expected Graduation: May ${currentYear + 1}`;
    }
}

// Update graduation year on page load
updateGraduationYear();

// Add loading animation
window.addEventListener('load', function () {
    document.body.style.opacity = '1';
});

document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';

// Console log for debugging (remove in production)
console.log('Resume loaded successfully!');