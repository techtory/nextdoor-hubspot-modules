export function initializeCarousel() {
    const carousel = document.querySelector('.testimonial-carousel');
    const items = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');
    let currentIndex = 0;

    function updateCarousel() {
        const offset = -currentIndex * 100;
        items.forEach((item, index) => {
            item.style.transform = `translateX(${offset}%)`;
        });
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    prevArrow.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? items.length - 1 : currentIndex - 1;
        updateCarousel();
    });

    nextArrow.addEventListener('click', () => {
        currentIndex = (currentIndex === items.length - 1) ? 0 : currentIndex + 1;
        updateCarousel();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });

    updateCarousel();

    let isDown = false;
    let startX;
    let scrollLeft;

    carousel.addEventListener('mousedown', (e) => {
        isDown = true;
        carousel.classList.add('active');
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener('mouseleave', () => {
        isDown = false;
        carousel.classList.remove('active');
    });

    carousel.addEventListener('mouseup', () => {
        isDown = false;
        carousel.classList.remove('active');
    });

    carousel.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        carousel.scrollLeft = scrollLeft - walk;
    });
}
