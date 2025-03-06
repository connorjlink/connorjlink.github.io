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
const portfolioTab = document.getElementById('portfolio-tab');
const experienceTab = document.getElementById('experience-tab');
const educationTab = document.getElementById('education-tab');
const contactTab = document.getElementById('contact-tab');

window.addEventListener('load', function() {
    const url = window.location.href;
    const values = url.split('/');
    const page = values[values.length - 1];

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

    // TODO: something
});

document.getElementById('home-radio').addEventListener('click', function() {
    window.location.href = './';
});

document.getElementById('portfolio-radio').addEventListener('click', function() {
    window.location.href = './portfolio';
});

document.getElementById('experience-radio').addEventListener('click', function() {
    window.location.href = './experience';
});

document.getElementById('education-radio').addEventListener('click', function() {
    window.location.href = './education';
});

document.getElementById('contact-radio').addEventListener('click', function() {
    window.location.href = './contact';
});
