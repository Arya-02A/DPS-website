// main.js

// ===== Scroll-to-Top Button =====
const scrollBtn = document.createElement('button');
scrollBtn.innerText = '↑';
scrollBtn.id = 'scrollToTopBtn';
scrollBtn.style.position = 'fixed';
scrollBtn.style.bottom = '30px';
scrollBtn.style.right = '30px';
scrollBtn.style.padding = '10px 15px';
scrollBtn.style.fontSize = '20px';
scrollBtn.style.display = 'none';
scrollBtn.style.border = 'none';
scrollBtn.style.borderRadius = '50%';
scrollBtn.style.backgroundColor = '#007bff';
scrollBtn.style.color = 'white';
scrollBtn.style.cursor = 'pointer';
scrollBtn.style.zIndex = '1000';
scrollBtn.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
document.body.appendChild(scrollBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollBtn.style.display = 'block';
    } else {
        scrollBtn.style.display = 'none';
    }
});

scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== Scroll Animations =====
const animatedElements = document.querySelectorAll('.mainBox, .box, .aboutText');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target); // Animate only once
        }
    });
}, {
    threshold: 0.2
});

animatedElements.forEach(el => {
    el.classList.add('before-animation');
    observer.observe(el);
});
