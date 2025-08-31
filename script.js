// Mobile menu toggle
document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".nav-links").classList.toggle("active");
});

// Smooth scroll active link
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });
    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

// Project modal
document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => {
        document.getElementById(card.dataset.modal).style.display = "flex";
    });
});
document.querySelectorAll(".close").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.closest(".modal").style.display = "none";
    });
});
window.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
        e.target.style.display = "none";
    }
});

// Contact form (simple demo)
document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Message sent! (This is a demo.)");
});
