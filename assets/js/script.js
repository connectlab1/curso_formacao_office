/* ==========================================================================
 *  Main.js - Navegação Suave & Lógica da Notificação Flutuante
 *  Formação Pacote Office
 *  ========================================================================== */

(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', () => {
        // 1. Navegação Suave (Single Page App)
        const navLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');

        navLinks.forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    e.preventDefault();

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

        // 2. Lógica da Notificação Flutuante do Minicurso Gratuito
        const notification = document.getElementById('floating-notification');

        if (notification) {
            // Verifica se o usuário já fechou a notificação nesta sessão
            if (!sessionStorage.getItem('minicurso_closed')) {
                // Exibe a notificação após 4 segundos (4000ms)
                setTimeout(() => {
                    notification.classList.remove('translate-y-32', 'opacity-0');
                    notification.classList.add('translate-y-0', 'opacity-100');
                }, 4000);
            }
        }
    });
})();

// Função global para fechar e guardar a preferência na sessão
function closeFloatingNotification() {
    const notification = document.getElementById('floating-notification');
    
    if (notification) {
        notification.classList.remove('translate-y-0', 'opacity-100');
        notification.classList.add('translate-y-32', 'opacity-0');

        // Salva no sessionStorage para não exibir novamente na mesma aba
        sessionStorage.setItem('minicurso_closed', 'true');
    }
}