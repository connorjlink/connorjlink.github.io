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

function lightenAll() {
    indexTab.style.fontWeight = 'bold';
    photographyTab.style.fontWeight = 'bold';
    experienceTab.style.fontWeight = 'bold';
    researchTab.style.fontWeight = 'bold';
    portfolioTab.style.fontWeight = 'bold';
    contactTab.style.fontWeight = 'bold';
}

indexTab.addEventListener('click', () => {
    lightenAll();
    indexTab.style.fontWeight = 'bolder';
});

photographyTab.addEventListener('click', () => {
    lightenAll();
    photographyTab.style.fontWeight = 'bolder';
});

researchTab.addEventListener('click', () => {
    lightenAll();
    researchTab.style.fontWeight = 'bolder';
});

experienceTab.addEventListener('click', () => {
    lightenAll();
    experienceTab.style.fontWeight = 'bolder';
});

contactTab.addEventListener('click', () => {
    lightenAll();
    contactTab.style.fontWeight = 'bolder';
});

window.onpopstate = function(event) {

};

// You can also manually trigger the event handler when the page first loads
window.addEventListener('load', function() {
    console.log('Initial page URL: ' + window.location.href);

    const url = window.location.href;
    const values = url.split('/');
    const page = values[values.length - 1];

    if (page.includes("photography")) {
        lightenAll();
        photographyTab.style.fontWeight = '1000'; //bolder
    } else if (page.includes("experience")) {
        lightenAll();
        experienceTab.style.fontWeight = '1000';
    } else if (page.includes("research")) {
        lightenAll();
        researchTab.style.fontWeight = '1000';
    } else if (page.includes("portfolio")) {
        lightenAll();
        portfolioTab.style.fontWeight = '1000';
    } else if (page.includes("contact")) {
        lightenAll();
        contactTab.style.fontWeight = '1000';
    } else {
        lightenAll();
        indexTab.style.fontWeight = '1000';
    }

    console.log('Page URL changed to: ' + page);

    // You can put your event handling code here
    // For example, you can call a function or trigger a custom event
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