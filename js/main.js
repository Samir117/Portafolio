// Datos de los proyectos (DEBE IR PRIMERO)
const proyectosData = [
    {
        titulo: "Sabee Edu – sabeeedu.com",
        descripcion: "Plataforma web educativa desarrollada para presentar programas de formación, servicios académicos e información institucional. El sitio está enfocado en una navegación clara, estructura organizada de contenidos y una experiencia accesible para estudiantes y usuarios interesados en procesos de aprendizaje.",
        tecnologias: "WordPress · HTML · CSS · JavaScript · Bootstrap",
        url: "https://sabeeedu.com/"
    },
    {
        titulo: "Design Lila – Designlila.com",
        descripcion: "Desarrollo de un sitio web corporativo moderno y elegante para Design Lila enfocado en transmitir una identidad visual limpia, profesional y alineada con marcas creativas. La página fue diseñada con una estructura clara y navegación intuitiva, permitiendo a los usuarios comprender rápidamente los servicios ofrecidos y generar confianza desde el primer contacto.",
        tecnologias: "WordPress · Plugins personalizados · PHP · JavaScript · Desarrollo a la medida · Bootstrap",
        url: "https://www.designlila.com/"
    },
    {
        titulo: "iCycle Importaciones – icycleimportaciones.co",
        descripcion: "Web corporativa desarrollada para una empresa de importación, enfocada en presentar sus servicios, procesos y propuesta comercial. El sitio prioriza una comunicación clara, diseño profesional y una estructura orientada a clientes empresariales.",
        tecnologias: "WordPress · HTML · CSS · JavaScript",
        url: "https://www.icycleimportaciones.co/"
    },
    {
        titulo: "Dismayorcol – dismayorcol.com",
        descripcion: "Página institucional desarrollada para presentar la identidad corporativa, servicios y canales de contacto de la empresa. El sitio cuenta con un diseño limpio y una estructura pensada para transmitir confianza y profesionalismo.",
        tecnologias: "WordPress · HTML · CSS · JavaScript",
        url: "https://www.dismayorcol.com/"
    },
    {
        titulo: "Ciudad Creativa – ciudadcreat1va.com",
        descripcion: "Web de agencia creativa desarrollada para destacar servicios de diseño y soluciones digitales. Incluye secciones de portafolio y servicios, con un enfoque visual moderno y una experiencia de usuario fluida. Incluyendo una intranet de auto gestión de servicios con Fossbillin OpenSource.",
        tecnologias: "WordPress · HTML · CSS",
        url: "https://ciudadcreat1va.com/"
    },
    {
        titulo: "Palco Quillero – palcoquillero.com",
        descripcion: "Plataforma web enfocada en la promoción de palcos y experiencias exclusivas para eventos. El desarrollo prioriza una presentación clara de beneficios, servicios y una navegación sencilla para facilitar la toma de decisión del usuario.",
        tecnologias: "WordPress · HTML · CSS · JavaScript · PHP",
        url: "https://www.palcoquillero.com/"
    },
    {
        titulo: "Scalea Di Mare Hotel – scaleadimarehotel.com",
        descripcion: "Sitio web hotelero desarrollado para mostrar habitaciones, servicios e instalaciones del hotel. Incluye una estructura orientada a reservas, contenido visual optimizado y una experiencia pensada para visitantes nacionales e internacionales.",
        tecnologias: "WordPress · HTML · CSS · JavaScript",
        url: "https://www.scaleadimarehotel.com/"
    },
    {
        titulo: "Sabina Soluciones Logísticas – sabinasolucioneslogisticsas.com",
        descripcion: "Web corporativa desarrollada para una empresa de logística y transporte. El sitio presenta sus servicios, alcance operativo y canales de contacto, con un enfoque en claridad, rendimiento y comunicación empresarial.",
        tecnologias: "WordPress · HTML · CSS · JavaScript",
        url: "https://www.sabinasolucioneslogisticsas.com/"
    }
];

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Renderizar las cards en el grid
    const gridContainer = document.getElementById('projectsGrid');
    
    // Verificar que el contenedor exista
    if (!gridContainer) {
        console.error('No se encontró el elemento con id "projectsGrid"');
        return;
    }

    proyectosData.forEach((proyecto, index) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        // Delay de animación escalonada
        card.style.setProperty('--delay', index);
        
        // Estructura interna
        card.innerHTML = `
            <h3>${proyecto.titulo}</h3>
            <p>${proyecto.descripcion}</p>
            <div class="tech">
                <strong>Tecnologías:</strong> ${proyecto.tecnologias}
            </div>
            <a href="${proyecto.url}" target="_blank">Ver proyecto</a>
        `;
        
        // Efecto de movimiento 3D al seguir el mouse
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            card.style.transform = `translateY(-6px) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) rotateX(0deg) rotateY(0deg) scale(1)';
        });
        
        gridContainer.appendChild(card);
    });

    // Intersection Observer para animación al hacer scroll
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Aplicar observer a todas las cards después de renderizadas
    setTimeout(() => {
        document.querySelectorAll('.project-card').forEach(card => {
            observer.observe(card);
        });
    }, 100);
});