document.addEventListener('DOMContentLoaded', () => {
    console.log("SoldadorPro Iniciado");

    // Dynamic Glow effect on mouse move
    const body = document.body;
    let glowIndex = 0;
    
    // Add an interactive cursor glow effect for modern design
    const cursorGlow = document.createElement('div');
    cursorGlow.style.position = 'fixed';
    cursorGlow.style.width = '300px';
    cursorGlow.style.height = '300px';
    cursorGlow.style.background = 'radial-gradient(circle, rgba(0, 240, 255, 0.08) 0%, transparent 60%)';
    cursorGlow.style.borderRadius = '50%';
    cursorGlow.style.pointerEvents = 'none';
    cursorGlow.style.transform = 'translate(-50%, -50%)';
    cursorGlow.style.zIndex = '9999';
    cursorGlow.style.transition = 'top 0.1s ease, left 0.1s ease';
    document.body.appendChild(cursorGlow);

    document.addEventListener('mousemove', (e) => {
        cursorGlow.style.left = `${e.clientX}px`;
        cursorGlow.style.top = `${e.clientY}px`;
    });

    // Button interactions
    const startCourseBtn = document.getElementById('startCourseBtn');
    startCourseBtn.addEventListener('click', () => {
        alert('¡Bienvenido al Curso SoldadorPro! Iniciando módulo de Seguridad Industrial...');
    });

    const loginBtn = document.getElementById('loginBtn');
    loginBtn.addEventListener('click', () => {
        alert('Redirigiendo al portal de alumnos...');
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Parallax effect for glowing backgrounds
    const glows = document.querySelectorAll('.bg-glow');
    window.addEventListener('scroll', () => {
        let scrolY = window.scrollY;
        glows.forEach((glow, idx) => {
            const speed = idx === 0 ? 0.2 : -0.15;
            glow.style.transform = `translateY(${scrolY * speed}px)`;
        });
    });
});
