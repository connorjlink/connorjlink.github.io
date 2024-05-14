const body = document.querySelector('body');

body.insertAdjacentHTML("afterbegin", `
    <nav class="navbar">
        <div class="navdiv">
            <div class="logo">
                <img src="../res/logo.jpg">
                <a href="./">Connor J. Link</a>
            </div>

            <ul>
                <li><a href="./photography">Photography</a></li>
                <li><a href="./experience">Experience</a></li>
                <li><a href="./research">Research</a></li>
                <li><a href="./projects">Projects</a></li>
                <li><a href="./contact">Contact</a></li>
                <li><button class="theme-toggle">☀</button></li>
            </ul>
        </div>
    </nav>

     <hr>
`);

body.insertAdjacentHTML("beforeend", `
    <hr>

    <p class="copyright">&copy; 2024 Connor J. Link. All Rights Reserved.</p>
`);

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