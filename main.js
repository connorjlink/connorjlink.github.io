const themeToggle = document.querySelector('.theme-toggle');

const theme = localStorage.getItem('theme');
if (theme == 'dark-mode') {
    document.documentElement.style.setProperty('color-scheme', 'dark');
}

function setLightTheme() {
    document.documentElement.style.setProperty('color-scheme', 'light');
    localStorage.removeItem('theme');   
}

function setDarkTheme() {
    document.documentElement.style.setProperty('color-scheme', 'dark');
    localStorage.setItem('theme', 'dark-mode');
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    const new_theme = event.matches ? "dark" : "light";

    if (new_theme == 'light') {
        setLightTheme();
    }
       
    else if (new_theme == 'dark') {
        setDarkTheme();
    }
});

themeToggle.addEventListener('click', () => {
    if (document.documentElement.style.getPropertyValue('color-scheme') == 'dark') {
        setLightTheme(); 
    }

    else {
        setDarkTheme();
    }
});