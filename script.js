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

function toggleMenu() {
    const menu = document.querySelector('.navbar nav ul');
    menu.classList.toggle('show');
}

// Fecha o menu quando um link é clicado
const menuLinks = document.querySelectorAll('.navbar nav ul li a');

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        const menu = document.querySelector('.navbar nav ul');
        menu.classList.remove('show');
    });
});

// Mapeamento das seções para os nomes que queremos exibir
const sectionNames = {
    sobre: 'SOBRE MIM',
    habilidades: 'HABILIDADES',
    projetos: 'PROJETOS',
    contato: 'CONTATO',
    home: 'HOME' // Aqui você pode adicionar mais seções caso queira
};

// Função para atualizar o nome da seção no menu
function updateMenuName(sectionId) {
    const menuName = document.getElementById('menu-name');
    // Converte para minúsculas e verifica se existe no mapeamento
    menuName.textContent = sectionNames[sectionId.toLowerCase()] || sectionId.toUpperCase();
}

// Função para ativar a seção correta ao rolar a página
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        // Se a rolagem da página estiver no intervalo da seção
        if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    // Atualiza o nome da seção no menu
    if (currentSection) {
        document.getElementById('menu-name').textContent = sectionNames[currentSection] || currentSection.toUpperCase();
    }
});

// Função para alternar entre modo claro e escuro
function toggleDarkMode() {
    const body = document.body;

    // Verifica se o modo claro está ativado
    if (document.getElementById('theme-toggle').checked) {
        // Ativa o modo claro
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
    } else {
        // Ativa o modo escuro
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
    }
}

// Verificar o estado do switch ao carregar a página
document.addEventListener('DOMContentLoaded', function () {
    // Verificar no localStorage se o usuário escolheu o modo escuro ou claro
    if (localStorage.getItem('darkMode') === 'true') {
        document.getElementById('theme-toggle').checked = false; // Modo escuro, então a checkbox não é marcada
        document.body.classList.add('dark-mode');
    } else {
        document.getElementById('theme-toggle').checked = true; // Modo claro
        document.body.classList.add('light-mode');
    }
});

// Armazenar preferências de tema no localStorage
document.getElementById('theme-toggle').addEventListener('change', function () {
    localStorage.setItem('darkMode', !document.getElementById('theme-toggle').checked);
});
