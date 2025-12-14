const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement
function changeTheme() {
    const currentTheme = rootHtml.getAttribute("data-theme");

    currentTheme === "dark" ? rootHtml.setAttribute("data-theme", "light") : rootHtml.setAttribute("data-theme", "dark")

    toggleTheme.classList.toggle("bi-sun")
    toggleTheme.classList.toggle("bi-moon")
}

toggleTheme.addEventListener("click", changeTheme);

function irParaProjetos() {
    const secao = document.querySelector('#projetos')

    if (secao) {
        secao.scrollIntoView({behavior: 'smooth'})
    }
}