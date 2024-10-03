// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) &&
        rect.top < window.innerHeight && rect.bottom > 0
    );
}

// Get all sections
const sections = document.querySelectorAll('section');

// Function to add 'visible' class to sections when in viewport
function handleScroll() {
    sections.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('visible');
        }
    });
}

// Run the function on scroll and when the page loads
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);
window.addEventListener('load', handleScroll);
// Force the first section to be visible immediately
sections[0].classList.add('visible');

