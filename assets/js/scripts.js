const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement;

// Theme toggle function
function changeTheme() {
    const currentTheme = rootHtml.getAttribute("data-theme");
    currentTheme === "dark" ? rootHtml.setAttribute("data-theme", "light") : rootHtml.setAttribute("data-theme", "dark");
    toggleTheme.classList.toggle("bi-sun");
    toggleTheme.classList.toggle("bi-moon");
    
    // Save theme preference to localStorage
    localStorage.setItem("theme", rootHtml.getAttribute("data-theme"));
}

// Apply saved theme on page load
document.addEventListener('DOMContentLoaded', function() {
    // Load saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        rootHtml.setAttribute("data-theme", savedTheme);
        if (savedTheme === "light") {
            toggleTheme.classList.remove("bi-sun");
            toggleTheme.classList.add("bi-moon");
        } else {
            toggleTheme.classList.remove("bi-moon");
            toggleTheme.classList.add("bi-sun");
        }
    }

    // Add event listener for theme toggle
    if (toggleTheme) {
        toggleTheme.addEventListener("click", changeTheme);
    }

    // Deixar com a cor na aba em que estiver selecionado
    highlightActiveMenuItem();
    
    if (window.location.hash && document.querySelector(window.location.hash)) {
        setTimeout(() => {
            document.querySelector(window.location.hash).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }, 100);
    }
});

// Deixar com a cor na aba em que estiver selecionado
function highlightActiveMenuItem() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const menuLinks = document.querySelectorAll('.menu__link');
    
    menuLinks.forEach(link => {
        
        link.classList.remove('active');
        
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || 
            (currentPage === '' && linkHref === 'index.html') ||
            (currentPage === 'index.html' && linkHref === '')) {
            link.classList.add('active');
        }
    });
}