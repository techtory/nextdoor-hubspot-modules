document.addEventListener("DOMContentLoaded", function () {
    const header3hamburgerButton = document.getElementById("header3hamburgerButton");
    const header3mobileMenu = document.getElementById("header3mobileMenu");

    header3hamburgerButton.addEventListener("click", function () {
        // Toggle the visibility of the mobile menu
        if (getComputedStyle(header3mobileMenu).display === "flex") {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });

    const openMobileMenu = () => {
        header3mobileMenu.style.display = "flex";
        header3hamburgerButton.classList.add("open");
    };

    const closeMobileMenu = () => {
        header3mobileMenu.style.display = "none";
        header3hamburgerButton.classList.remove("open");
    };
});