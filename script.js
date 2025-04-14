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