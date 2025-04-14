// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Existing code...
    
    // Q2: Event tracking for all elements
    function logEvent(event, type) {
        const timestamp = new Date().toISOString();
        const target = event.target;
        const tagName = target.tagName.toLowerCase();
        const elementType = target.type || tagName;
        const className = target.className || 'no-class';
        const id = target.id || 'no-id';
        
        console.log(`${timestamp}, ${type}, ${elementType}, ${className}, ${id}`);
    }

    // Track all click events
    document.addEventListener('click', function(e) {
        logEvent(e, 'click');
    });

    // Track page views for elements when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const event = { target: entry.target };
                logEvent(event, 'view');
            }
        });
    }, { threshold: 0.5 });

    // Observe all elements with data-track attribute
    document.querySelectorAll('[data-track]').forEach(el => {
        observer.observe(el);
    });

    // Existing code...
});
// Function to initialize skill bars on page load
document.addEventListener('DOMContentLoaded', function() {
    // Get all skill elements
    const skillElements = document.querySelectorAll('.skill');
    
    // For each skill element
    skillElements.forEach(function(skill) {
        // Get the level value from data-level attribute
        const level = skill.getAttribute('data-level');
        
        // Find the skill-level div inside this skill element
        const skillLevelBar = skill.querySelector('.skill-level');
        
        // Set the width of the skill-level div to the level percentage
        if (skillLevelBar) {
            skillLevelBar.style.width = level + '%';
        }
    });
    
    // Optional: Add animation effect
    setTimeout(function() {
        skillElements.forEach(function(skill) {
            const skillLevelBar = skill.querySelector('.skill-level');
            if (skillLevelBar) {
                skillLevelBar.classList.add('animated');
            }
        });
    }, 300);
});