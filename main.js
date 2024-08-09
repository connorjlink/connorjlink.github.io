const head = document.querySelector('head')

head.insertAdjacentHTML("beforeend", `
    <link rel="stylesheet" href="common.css">
    <meta property="og:image" content="https://connorjlink.com/res/logo.jpg"/>
`);

const body = document.querySelector('body');

body.insertAdjacentHTML("afterbegin", `
    <nav class="navbar">
        <div class="navdiv">
            <div class="logo">
                <img src="../res/logo.jpg" alt="Small logo photo taken at Yellowstone National Park">
                <a id="index-tab" href="./">Connor J. Link</a>
            </div>

            <ul>
                <li><a id="photography-tab" href="./photography">Photography</a></li>
                <li><a id="experience-tab" href="./experience">Experience</a></li>
                <li><a id="research-tab" href="./research">Research</a></li>
                <li><a id="portfolio-tab" href="./portfolio">Portfolio</a></li>
                <li><a id="contact-tab" href="./contact">Contact</a></li>
                <li><button class="theme-toggle">☀</button></li>
            </ul>
        </div>
    </nav>

     <hr>
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
    }

    if (element !== photographyTab) {
        photographyTab.style.fontWeight = 'bold';
    }

    if (element !== experienceTab) {
        experienceTab.style.fontWeight = 'bold';
    }

    if (element !== researchTab) {
        researchTab.style.fontWeight = 'bold';
    }

    if (element !== portfolioTab) {
        portfolioTab.style.fontWeight = 'bold';
    }

    if (element !== contactTab) {
        contactTab.style.fontWeight = 'bold';
    }
}

window.addEventListener('load', function() {
    const url = window.location.href;
    const values = url.split('/');
    const page = values[values.length - 1];

    if (page.includes("photography")) {
        lightenAllExcept(photographyTab);
        photographyTab.style.fontWeight = '1000';
    } else if (page.includes("experience")) {
        lightenAllExcept(experienceTab);
        experienceTab.style.fontWeight = '1000';
    } else if (page.includes("research")) {
        lightenAllExcept(researchTab);
        researchTab.style.fontWeight = '1000';
    } else if (page.includes("portfolio")) {
        lightenAllExcept(portfolioTab);
        portfolioTab.style.fontWeight = '1000';
    } else if (page.includes("contact")) {
        lightenAllExcept(contactTab);
        contactTab.style.fontWeight = '1000';
    } else {
        lightenAllExcept(indexTab);
        indexTab.style.fontWeight = '1000';
    }
});


body.insertAdjacentHTML("beforeend", `
    <hr>

    <p class="copyright">&copy; 2024 Connor J. Link. All Rights Reserved.</p>
`);

const themeToggle = document.querySelector('.theme-toggle');

const theme = localStorage.getItem('theme');
if (theme === 'dark-mode') {
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

    if (new_theme === 'light') {
        setLightTheme();
    }

    else if (new_theme === 'dark') {
        setDarkTheme();
    }

});

themeToggle.addEventListener('click', () => {
    if (document.documentElement.style.getPropertyValue('color-scheme') === 'dark') {
        setLightTheme();
    }

    else {
        setDarkTheme();
    }
});