let currentIndex = 0;
const track = document.getElementById('carouselTrack');
const items = document.querySelectorAll('.art-item');
const totalItems = items.length;
const dotsContainer = document.getElementById('carouselDots');

for (let i = 0; i < totalItems; i++) {
    const dot = document.createElement('div');
    dot.className = 'carousel-dot';
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll('.carousel-dot');
function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    
        dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
}
document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
});

document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
});
const particlesContainer = document.getElementById('particles');
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.bottom = '-20px';
    particle.style.opacity = '0';
    particlesContainer.appendChild(particle);

    setTimeout(() => {
        particle.style.transition = 'all 15s linear';
        particle.style.bottom = '100%';
        particle.style.opacity = '0.8';
    }, Math.random() * 100);

    setTimeout(() => {
        particle.remove();
        createParticle();
    }, 15000);
}

for (let i = 0; i < 30; i++) {
    setTimeout(() => createParticle(), i * 500);
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
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

document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});


document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    
    cursor.style.opacity = '0';
    cursor.style.left = '-100px';
    cursor.style.top = '-100px';

    let isVisible = true;

    document.addEventListener('mousemove', (e) => {
        if (!isVisible) {
            cursor.style.opacity = '1';
            isVisible = true;
        }
        cursor.style.left = (e.clientX - 10) + 'px';
        cursor.style.top = (e.clientY - 10) + 'px';
    });

    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
        isVisible = false;
    });

    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
        isVisible = true;
    });
});