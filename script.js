document.addEventListener('DOMContentLoaded', () => {
    // Manejo del botón de CV (Feedback visual para descarga real)
    const resumeBtn = document.getElementById('resumeBtn');
    if (resumeBtn) {
        resumeBtn.addEventListener('click', (e) => {
            // No detenemos el evento para que la descarga ocurra naturalmente
            const originalContent = resumeBtn.innerHTML;
            
            // Efecto visual de descarga
            resumeBtn.style.opacity = '0.8';
            resumeBtn.innerHTML = '<span>Descargando...</span><i class="fa-solid fa-circle-notch fa-spin"></i>';
            
            setTimeout(() => {
                resumeBtn.innerHTML = '<span>¡Archivo Listo!</span><i class="fa-solid fa-check"></i>';
                resumeBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';

                setTimeout(() => {
                    resumeBtn.innerHTML = originalContent;
                    resumeBtn.style.background = '';
                    resumeBtn.style.opacity = '1';
                }, 3000);
            }, 1000);
        });
    }

    // Animación de entrada para los bloques Bento
    const bentoItems = document.querySelectorAll('.bento-item');
    bentoItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(15px)';
        item.style.transition = 'all 0.5s ease-out';

        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 100 * index);
    });
});
