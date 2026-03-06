// Données des projets - À personnaliser
const projects = [
    {
        title: "Projet 1",
        description: "Description de votre premier projet. Décrivez les technologies utilisées et les défis relevés.",
        tags: ["HTML", "CSS", "JavaScript"],
        link: "https://github.com/mlautr"
    },
    {
        title: "Projet 2",
        description: "Description de votre deuxième projet. Expliquez l'impact et les résultats obtenus.",
        tags: ["React", "Node.js", "MongoDB"],
        link: "https://github.com/mlautr"
    },
    {
        title: "Projet 3",
        description: "Description de votre troisième projet. Mettez en avant vos compétences principales.",
        tags: ["Vue.js", "Firebase", "Tailwind"],
        link: "https://github.com/mlautr"
    }
];

// Charger les projets au démarrage
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    setupNavigation();
});

// Rendre les cartes de projets
function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        const tagsHTML = project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('');
        
        projectCard.innerHTML = `
            <div class="project-image">
                <i class="fas fa-code"></i>
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${tagsHTML}
                </div>
                <a href="${project.link}" target="_blank" class="project-link">
                    Voir le projet <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// Gestion de la navigation
function setupNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle menu mobile
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Fermer le menu quand on clique sur un lien
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            updateActiveLink(link);
        });
    });

    // Mettre à jour le lien actif au scroll
    window.addEventListener('scroll', () => {
        updateActiveLinkOnScroll();
    });
}

// Mettre à jour le lien actif
function updateActiveLink(clickedLink) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    clickedLink.classList.add('active');
}

// Mettre à jour le lien actif lors du scroll
function updateActiveLinkOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}

// Smooth scroll fallback pour les anciens navigateurs
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

console.log('Portfolio chargé avec succès!');
