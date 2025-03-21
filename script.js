window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar nav ul li a");

    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (pageYOffset >= sectionTop - sectionHeight / 4) {
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

// Adicionando funcionalidade de clique
document.querySelectorAll(".navbar nav ul li a").forEach((link) => {
    link.addEventListener("click", function () {
        // Remove a classe active de todos os links
        document.querySelectorAll(".navbar nav ul li a").forEach((a) => {
            a.classList.remove("active");
        });
        // Adiciona a classe active ao link clicado
        this.classList.add("active");
    });
});
