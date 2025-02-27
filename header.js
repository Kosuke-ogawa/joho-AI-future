

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        const targetClass = this.getAttribute('data-target');
        const targetElement = document.querySelector('.' + targetClass);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});