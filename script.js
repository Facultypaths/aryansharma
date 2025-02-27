/* script.js */

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");
    const getStartedBtn = document.getElementById("get-started-btn");
    const dropdownContent = document.getElementById("dropdown-content");

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
        menuToggle.classList.toggle("open");
    });

    getStartedBtn.addEventListener("click", function () {
        dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
        if (!getStartedBtn.contains(event.target) && !dropdownContent.contains(event.target)) {
            dropdownContent.style.display = "none";
        }
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!menuToggle.contains(event.target) && !menu.contains(event.target)) {
            menu.classList.remove("active");
            menuToggle.classList.remove("open");
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // GSAP Animation
    gsap.from(".about-box", { duration: 1, opacity: 0, y: 50, ease: "power3.out" });

    // Scroll Reveal
    ScrollReveal().reveal('.about-content, .about-image, .social-icons', {
        duration: 1000,
        distance: '50px',
        origin: 'bottom',
        delay: 300
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // GSAP Animation for Services Section
    gsap.from(".service-box", { 
        duration: 1, 
        opacity: 0, 
        y: 50, 
        ease: "power3.out", 
        stagger: 0.2 
    });

    // Scroll Reveal for Services
    ScrollReveal().reveal('.service-box', {
        duration: 1000,
        distance: '50px',
        origin: 'bottom',
        delay: 300
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll(".project-box");
    projects.forEach(project => {
        const images = project.querySelectorAll(".project-img");
        let index = 0;
        setInterval(() => {
            images.forEach(img => img.classList.remove("active"));
            images[index].classList.add("active");
            index = (index + 1) % images.length;
        }, 3000);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const blogContainer = document.querySelector(".blogs-container");
    const blogs = document.querySelectorAll(".blog-box");
    let isHovered = false;

    blogs.forEach((blog) => {
        blog.addEventListener("mouseenter", () => {
            isHovered = true;
            blogContainer.style.animationPlayState = "paused";
        });

        blog.addEventListener("mouseleave", () => {
            isHovered = false;
            blogContainer.style.animationPlayState = "running";
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const statusMessage = document.getElementById("form-status");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        statusMessage.textContent = "Sending...";
        statusMessage.style.color = "#0ef";

        setTimeout(() => {
            statusMessage.textContent = "Message Sent Successfully!";
            statusMessage.style.color = "#00c3ff";
            form.reset();
        }, 2000);
    });
});
