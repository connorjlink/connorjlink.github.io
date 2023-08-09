const themeToggle = document.querySelector('.theme-toggle');

const theme = localStorage.getItem('theme');

if (theme) {
    document.documentElement.style.setProperty('color-scheme', 'dark');
    //document.body.classList.add('dark-mode');
}

themeToggle.addEventListener('click', () => {
    //document.getRootNode().toggle('-')
    //document.body.getRootNode().toggle('dark-mode');
    if (document.documentElement.style.getPropertyValue('color-scheme') == 'dark') {
        document.documentElement.style.setProperty('color-scheme', 'light');
        localStorage.removeItem('theme');   
    }

    else {
        document.documentElement.style.setProperty('color-scheme', 'dark');
        localStorage.setItem('theme', 'dark-mode');
    }
});