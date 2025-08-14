// Carrousel d'images pour la page d'accueil
document.addEventListener('DOMContentLoaded', () => {
    const carrouselItems = document.querySelectorAll('.carrousel-item');
    let currentIndex = 0;

    function showNextItem() {
        carrouselItems[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % carrouselItems.length;
        carrouselItems[currentIndex].classList.add('active');
    }

    setInterval(showNextItem, 3500); // Change d'image toutes les 5 secondes
});

// Mécanisme de dépliage des menus
const menuHeaders = document.querySelectorAll('.menu-header');

menuHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const menuContent = header.nextElementSibling;

        // Ferme tous les autres menus
        document.querySelectorAll('.menu-content.open').forEach(content => {
            if (content !== menuContent) {
                content.classList.remove('open');
            }
        });

        // Ouvre ou ferme le menu cliqué
        menuContent.classList.toggle('open');
    });
});