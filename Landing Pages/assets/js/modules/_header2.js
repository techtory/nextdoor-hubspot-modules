document.addEventListener("DOMContentLoaded", function () {
    const hamburgerButton = document.getElementById("hamburgerButton");
    const mobileMenu = document.getElementById("mobileMenu");

    hamburgerButton.addEventListener("click", function () {
        // Toggle the visibility of the mobile menu
        if (mobileMenu.style.display === "flex") {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });

    function openMobileMenu() {
        mobileMenu.style.display = "flex";
        hamburgerButton.classList.add("open");
    }

    function closeMobileMenu() {
        mobileMenu.style.display = "none";
        hamburgerButton.classList.remove("open");
    }
});