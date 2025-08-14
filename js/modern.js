 // Initialisation de ScrollReveal
        ScrollReveal().reveal('.animate-fadeIn', {
            delay: 200,
            distance: '20px',
            origin: 'bottom',
            opacity: 0,
            easing: 'ease-in-out',
            duration: 800,
            interval: 100
        });
        
        // Animation pour les sections
        ScrollReveal().reveal('#presentation, #horaires, #plats, #contact', {
            delay: 200,
            distance: '50px',
            origin: 'bottom',
            opacity: 0,
            easing: 'ease-in-out',
            duration: 1000
        });
        
        // Animation pour les cartes de plats
        ScrollReveal().reveal('.dish-card', {
            delay: 200,
            distance: '30px',
            origin: 'bottom',
            opacity: 0,
            easing: 'ease-in-out',
            duration: 800,
            interval: 200
        });
        
        // Navigation fixe
        window.addEventListener('scroll', function() {
            const nav = document.querySelector('nav');
            if (window.scrollY > 100) {
                nav.classList.add('shadow-lg');
                nav.classList.add('py-2');
            } else {
                nav.classList.remove('shadow-lg');
                nav.classList.remove('py-2');
            }
        });
        
        // Menu mobile (simplifié pour l'exemple)
        document.querySelector('button').addEventListener('click', function() {
            const navLinks = document.querySelector('.md\\:flex');
            navLinks.classList.toggle('hidden');
            navLinks.classList.toggle('flex');
            navLinks.classList.toggle('flex-col');
            navLinks.classList.toggle('absolute');
            navLinks.classList.toggle('top-16');
            navLinks.classList.toggle('left-0');
            navLinks.classList.toggle('right-0');
            navLinks.classList.toggle('bg-white');
            navLinks.classList.toggle('p-4');
            navLinks.classList.toggle('shadow-md');
        });
        function menu(){
            window.location("menu.html");
        }