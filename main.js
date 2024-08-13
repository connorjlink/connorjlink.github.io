const head = document.querySelector('head');
const body = document.querySelector('body');
const root = document.querySelector(':root');

// inject common styles
head.insertAdjacentHTML("beforeend", `
    <link rel="stylesheet" href="common.css">
    <meta property="og:image" content="https://connorjlink.com/res/logo.jpg"/>
`);

// common navigation bar element
body.insertAdjacentHTML("afterbegin", `
    <header class="shadowed">
        <img class="logo" src="../res/logo.jpg" alt="logo">

        <nav>
            <div class="vstack">
                <a class="title" id="index-tab" href="./">Connor J. Link</a>

                <ul>
                    <li>
                        <a id="photography-tab" href="./photography">Photography</a>
                    </li>

                    <li>
                        <a id="experience-tab" href="./experience">Experience</a>
                    </li>

                    <li>
                        <a id="research-tab" href="./research">Research</a>
                    </li>

                    <li>
                        <a id="portfolio-tab" href="./portfolio">Portfolio</a>
                    </li>

                    <li>
                        <a id="contact-tab" href="./contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>

        <button class="theme-toggle">☀</button>
    </header>
`);

// common copyright element
body.insertAdjacentHTML("beforeend", `
    <footer class="shadowed">&copy; 2024 Connor J. Link. All Rights Reserved.</footer>
`);

const indexTab = document.getElementById("index-tab");
const photographyTab = document.getElementById('photography-tab');
const experienceTab = document.getElementById('experience-tab');
const researchTab = document.getElementById('research-tab');
const portfolioTab = document.getElementById('portfolio-tab');
const contactTab = document.getElementById('contact-tab');

function lightenAllExcept(element) {
    if (element !== indexTab) {
        indexTab.style.fontWeight = 'bold';
        indexTab.style.textDecoration = '';
    }

    if (element !== photographyTab) {
        photographyTab.style.fontWeight = 'bold';
        photographyTab.style.textDecoration = '';
    }

    if (element !== experienceTab) {
        experienceTab.style.fontWeight = 'bold';
        experienceTab.style.textDecoration = '';
    }

    if (element !== researchTab) {
        researchTab.style.fontWeight = 'bold';
        researchTab.style.textDecoration = '';
    }

    if (element !== portfolioTab) {
        portfolioTab.style.fontWeight = 'bold';
        portfolioTab.style.textDecoration = '';
    }

    if (element !== contactTab) {
        contactTab.style.fontWeight = 'bold';
        contactTab.style.textDecoration = '';
    }
}

window.addEventListener('load', function() {
    const url = window.location.href;
    const values = url.split('/');
    const page = values[values.length - 1];

    if (page.includes("photography")) {
        lightenAllExcept(photographyTab);
        photographyTab.style.fontWeight = '1000';
        photographyTab.style.textDecoration = 'underline 0.2em';
    } else if (page.includes("experience")) {
        lightenAllExcept(experienceTab);
        experienceTab.style.fontWeight = '1000';
        experienceTab.style.textDecoration = 'underline 0.2em';
    } else if (page.includes("research")) {
        lightenAllExcept(researchTab);
        researchTab.style.fontWeight = '1000';
        researchTab.style.textDecoration = 'underline 0.2em';
    } else if (page.includes("portfolio")) {
        lightenAllExcept(portfolioTab);
        portfolioTab.style.fontWeight = '1000';
        portfolioTab.style.textDecoration = 'underline 0.2em';
    } else if (page.includes("contact")) {
        lightenAllExcept(contactTab);
        contactTab.style.fontWeight = '1000';
        contactTab.style.textDecoration = 'underline 0.2em';
    } else {
        lightenAllExcept(indexTab);
        indexTab.style.fontWeight = '1000';
        indexTab.style.textDecoration = 'underline 0.2em';
    }
});

const themeToggle = document.querySelector('.theme-toggle');

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
    root.style.setProperty("--fg", "#333");

    // background is the light color
    root.style.setProperty("--bg", "#f0f0f0");

    console.log("setting light theme");
}

function setDarkTheme() {
    document.documentElement.style.setProperty('color-scheme', 'dark');
    localStorage.setItem('theme', 'dark-mode');

    // foreground is the light-colored text
    root.style.setProperty("--fg", "#cccccc");

    // background is the dark color
    root.style.setProperty("--bg", "#1e1e1e")

    console.log("setting dark theme");
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    if (!event.matches) {
        // light theme requested by browser
        setLightTheme();
    }

    else {
        // dark theem requested by browser
        setDarkTheme();
    }
});

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