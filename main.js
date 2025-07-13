const head = document.querySelector('head');
const body = document.querySelector('body');
const root = document.querySelector(':root');

// common header element
body.insertAdjacentHTML("afterbegin", `
    
`);

/*
Custom flag symbol:
<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 14v7M5 4.971v9.541c5.6-5.538 8.4 2.64 14-.086v-9.54C13.4 7.61 10.6-.568 5 4.97Z"/>
</svg>
*/


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
