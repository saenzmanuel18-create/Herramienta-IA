document.addEventListener('DOMContentLoaded', () => {

    // Configurar interacciones 3D sutiles para la tarjeta
    const card = document.getElementById('profileCard');
    const container = document.body;

    // Efecto Tilt 3D
    container.addEventListener('mousemove', (e) => {
        // Reducimos el efecto si estamos en dispositivos móviles (pantallas pequeñas)
        if (window.innerWidth < 768) return;

        const xAxis = (window.innerWidth / 2 - e.pageX) / 40;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 40;

        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    // Resetear posición cuando el ratón sale
    container.addEventListener('mouseleave', () => {
        card.style.transform = `rotateY(0deg) rotateX(0deg)`;
        card.style.transition = 'transform 0.5s ease';
    });

    // Quitar transición durante el movimiento para mayor fluidez
    container.addEventListener('mouseenter', () => {
        card.style.transition = 'none';
    });

    // Botón de descargar CV
    const resumeBtn = document.getElementById('resumeBtn');
    if (resumeBtn) {
        resumeBtn.addEventListener('click', () => {
            // Simulamos la descarga o acción
            const originalText = resumeBtn.innerHTML;
            resumeBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Preparando...';
            resumeBtn.style.pointerEvents = 'none';

            setTimeout(() => {
                resumeBtn.innerHTML = '<i class="fa-solid fa-check"></i> CV Descargado';
                resumeBtn.style.background = '#10b981'; // Success green

                setTimeout(() => {
                    resumeBtn.innerHTML = originalText;
                    resumeBtn.style.background = '';
                    resumeBtn.style.pointerEvents = 'all';
                }, 3000);
            }, 1500);
        });
    }

    // Efecto de aparición para las habilidades (Staggered Animation)
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.4s ease';

        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 800 + (index * 150)); // Delay inicial + staggered delay
    });
});
