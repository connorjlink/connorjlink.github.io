const head = document.querySelector('head');
const body = document.querySelector('body');
const root = document.querySelector(':root');

// inject common styles
head.insertAdjacentHTML("beforeend", `
    <link rel="stylesheet" href="common.css">
`);

// common header element
body.insertAdjacentHTML("afterbegin", `
    <header class="shadowed hstack">
    
        <div class="logo-container">
            <img src="../res/logo.jpg" alt="logo">
            <a class="title" id="index-tab" href="./">Connor J. Link</a>
        </div>

        <div class="dummy"></div>

        <button id="navbar-toggle">&equiv;</button>

    </header>
`);

// common navbar element
// navbar is hidden on mobile by default!
var extras = '';
if (window.matchMedia("(max-width: 480px)").matches) {
    extras = 'display: none;';
}
document.getElementById('page').insertAdjacentHTML("afterbegin", `
    <nav class="shadowed" style="${extras}">

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

    </nav>
`);

// common copyright footer element
body.insertAdjacentHTML("beforeend", `
    <footer class="shadowed">&copy; 2025 Connor J. Link. All Rights Reserved.</footer>
`);


window.addEventListener('load', function() {
    const url = window.location.href;
    const values = url.split('/');
    const page = values[values.length - 1];

    if (page.includes("experience")) {
        this.document.querySelector('#experience-radio').checked = true;
    } else if (page.includes("education")) {
        this.document.querySelector('#education-radio').checked = true;
    } else if (page.includes("portfolio")) {
        this.document.querySelector('#portfolio-radio').checked = true;
    } else if (page.includes("contact")) {
        this.document.querySelector('#contact-radio').checked = true;
    } else {
        this.document.querySelector('#home-radio').checked = true;
    }

    // TODO:
    /*
        - translate all pages to new HTML documents?
        - add hreflang to head of all pages
        - add subdomains to squarespace for each language
        - update light theme so its not terrible
            - lessen contrast of drop shadows
            - darken background for code to improve legibility
            - change navbar color to not be the same as page background
            - bring back darken98, darken95?
            - fix all item borders (including images) to be darker
    
    */
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


const nav = document.querySelector('nav');
document.getElementById('navbar-toggle').addEventListener('click', function() {
    nav.style.display = (nav.style.display === 'none') ? 'initial' : 'none';
});
