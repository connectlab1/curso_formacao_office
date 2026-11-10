/* ==========================================================================
 M a*in.js - Navegação Suave (Single Page App)
 Formação Pacote Office
 ========================================================================== */

(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', () => {
        // Navegação Suave (Smooth Scroll) para Âncoras do Menu Header
        const navLinks = document.querySelectorAll('header nav a[href^="#"]');

        navLinks.forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    const headerOffset = 70; // Compensação da altura da Navbar Fixa
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    });
})();
