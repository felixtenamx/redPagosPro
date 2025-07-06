document.addEventListener('DOMContentLoaded', function() {
   
    // 1. Loader Animation
    const loader = document.getElementById('loader');
    
    setTimeout(() => {
        loader.classList.add('fade-out');
        
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 3500);

    // 2. Header and Navigation
    // Cargar el header
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
            // Inicializar el menú hamburguesa DESPUÉS de cargar el header
            initializeHamburgerMenu();
        })
        .catch(error => console.error('Error cargando el header:', error));

    // Cargar el footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error cargando el footer:', error));

    // 3. Hamburger Menu Functions
    function initializeHamburgerMenu() {
        const menuToggle = document.querySelector('.menu-toggle');
        const menuHeader = document.querySelector('.menuHeader');
        const hamburgerContainer = document.querySelector('.hamburger-container');

        if (menuToggle && menuHeader) {
            menuToggle.addEventListener('click', () => {
                menuToggle.classList.toggle('active');
                menuHeader.classList.toggle('active');
                hamburgerContainer.classList.toggle('active');
            });

            // Cerrar menú al hacer clic en un enlace
            const menuLinks = document.querySelectorAll('.menuHeader a');
            menuLinks.forEach(link => {
                link.addEventListener('click', () => {
                    menuToggle.classList.remove('active');
                    menuHeader.classList.remove('active');
                    hamburgerContainer.classList.remove('active');
                });
            });
        }
    }

    // 4. Cookie Banner Mejorado
    setTimeout(() => {
    const banner = document.getElementById("cookie-banner");
    const btn = document.querySelector("#aceptar-cookies");

    if (!localStorage.getItem("cookies-aceptadas") && banner && btn) {
        banner.style.display = "flex";

        btn.addEventListener("click", function () {
        localStorage.setItem("cookies-aceptadas", "true");
        banner.style.display = "none";
        });
    } else if (banner) {
        banner.style.display = "none";
    }
    }, 500);

  

});