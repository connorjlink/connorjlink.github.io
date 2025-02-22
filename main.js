const head = document.querySelector('head');
const body = document.querySelector('body');
const root = document.querySelector(':root');

// inject common styles
head.insertAdjacentHTML("beforeend", `
    <link rel="stylesheet" href="common.css">
`);

// common navigation bar element
body.insertAdjacentHTML("afterbegin", `
    <header class="shadowed hstack">
        <div class="logo-container">
            <img src="../res/logo.jpg" alt="logo">
            <a class="title" id="index-tab" href="./">Connor J. Link</a>
        </div>

        <!--<div class="toggle">
            <p>Theme</p>
            <button class="theme-toggle">☀</button>
        </div>-->
    </header>

    <nav class="shadowed">
        <div class="nav-radio">
            <input type="radio" name="nav" id="home-radio" value="Home" checked>
            <label for="home-radio">Home</label>
        </div>

        <div class="nav-radio">
            <input type="radio" name="nav" id="portfolio-radio">
            <label for="portfolio-radio">Portfolio</label>
        </div>

        <div class="nav-radio">
            <input type="radio" name="nav" id="experience-radio">
            <label for="experience-radio">Experience</label>
        </div>

        <div class="nav-radio">
            <input type="radio" name="nav" id="education-radio">
            <label for="education-radio">Education</label>
        </div>

        <div class="nav-radio">
            <input type="radio" name="nav" id="contact-radio">
            <label for="contact-radio">Contact</label>
        </div>

        <div class="dummy"></div>
    </nav>
`);

// common copyright element
body.insertAdjacentHTML("beforeend", `
    <div class="dummy"></div>

    <footer class="shadowed">
        <span>&copy; 2025 Connor J. Link. All Rights Reserved.</span>
    </footer>
`);

const indexTab = document.getElementById("index-tab");
const experienceTab = document.getElementById('experience-tab');
const educationTab = document.getElementById('education-tab');
const portfolioTab = document.getElementById('portfolio-tab');
const contactTab = document.getElementById('contact-tab');

function deselectAll() {
    indexTab.style.color = 'var(--primary)';
    indexTab.style.textDecoration = '';

    experienceTab.style.color = 'var(--primary)';
    experienceTab.style.textDecoration = '';

    educationTab.style.color = 'var(--primary)';
    educationTab.style.textDecoration = '';

    portfolioTab.style.color = 'var(--primary)';
    portfolioTab.style.textDecoration = '';

    contactTab.style.color = 'var(--primary)';
    contactTab.style.textDecoration = '';
}

window.addEventListener('load', function() {
    const url = window.location.href;
    const values = url.split('/');
    const page = values[values.length - 1];

    // remove all underlines and set to the deselected color
    deselectAll();

    var element = null;

    if (page.includes("experience")) {
        element = experienceTab;
    } else if (page.includes("education")) {
        element = educationTab;
    } else if (page.includes("portfolio")) {
        element = portfolioTab;
    } else if (page.includes("contact")) {
        element = contactTab;
    } else {
        element = indexTab;
    }

    element.style.color = 'var(--accent)';
    element.style.textDecoration = 'underline 0.2em';
});

const theme = localStorage.getItem('theme');
if (theme === 'dark-mode') {
    setDarkTheme();
}

else {
    setLightTheme();
}

function setLightTheme() {
    document.documentElement.style.setProperty('color-scheme', 'light');
    localStorage.removeItem('theme');

    // foreground is the dark-colored text
    root.style.setProperty("--foreground", "#333");

    // background is the light color
    root.style.setProperty("--background", "#f0f0f0");

    // outlines in light theme are less apparent, so thicken a bit
    root.style.setProperty("--outline-thickness", "2px");

    console.log("setting light theme");
}

function setDarkTheme() {
    document.documentElement.style.setProperty('color-scheme', 'dark');
    localStorage.setItem('theme', 'dark-mode');

    // foreground is the light-colored text
    root.style.setProperty("--foreground", "#cccccc");

    // background is the dark color
    root.style.setProperty("--background", "#1e1e1e")

    // outlines in dark theme are more apparent, so thin
    root.style.setProperty("--outline-thickness", "1px");

    console.log("setting dark theme");
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    if (!event.matches) {
        // light theme requested by browser
        setLightTheme();
    }

    else {
        // dark theme requested by browser
        setDarkTheme();
    }
});

const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
    if (document.documentElement.style.getPropertyValue('color-scheme') === 'dark') {
        // light theme set by user
        setLightTheme();
    }

    else {
        // dark theme set by user
        setDarkTheme();
    }
});