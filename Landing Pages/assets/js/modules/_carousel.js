document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');
    let currentIndex = 0;

    function updateCarousel() {
        const offset = -currentIndex * 100;
        items.forEach((item, index) => {
            item.style.transform = `translateX(${offset}%)`;
            item.style.visibility = index === currentIndex ? 'visible' : 'hidden';
        });
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });

        // Disable prevArrow if at the first item
        prevArrow.disabled = currentIndex === 0;

        // Disable nextArrow if at the last item
        nextArrow.disabled = currentIndex === items.length - 1;
    }

    prevArrow.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextArrow.addEventListener('click', () => {
        if (currentIndex < items.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });

    updateCarousel();
});
