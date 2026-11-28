const toggle = document.querySelector('#theme-toggle');
const icon = document.querySelector('#theme-toggle i');
const savedTheme = localStorage.getItem('theme'); //read it back: 'dark', or null if nothing's saved

function applyTheme(theme) {
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        document.documentElement.removeAttribute('data-theme');
        icon.classList.replace('fa-sun', 'fa-moon');
    }
    localStorage.setItem('theme', theme);
}

applyTheme(savedTheme || 'light');

toggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');

    if (currentTheme === 'dark') {
        applyTheme('light');
    } else {
        applyTheme('dark');
    }
});