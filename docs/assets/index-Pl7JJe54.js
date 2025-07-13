(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&u(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();document.querySelector("head");const m=document.querySelector("body");document.querySelector(":root");m.insertAdjacentHTML("afterbegin",`
    <header class="shadowed hstack">
    
        <div class="logo-container">
            <img src="../res/logo.jpg" alt="logo">
            <a class="title" id="index-tab" href="./">Connor J. Link</a>
        </div>

        <div class="dummy"></div>

        <button id="navbar-toggle">
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/>
            </svg>
        </button>

    </header>
`);var h="";window.matchMedia("(max-width: 480px)").matches&&(h="display: none;");var r="",c="",a="",d="",l="";switch(document.documentElement.lang){case"en":r="Home",c="Portfolio",a="Experience",d="Education",l="Contact";break;case"es":r="Inicio",c="Portafolio",a="Experiencia",d="Educación",l="Contacto";break}document.getElementById("page").insertAdjacentHTML("afterbegin",`
    <nav class="shadowed" style="${h}">

        <div class="nav-radio">
            <input type="radio" name="nav" id="home-radio" checked>
            <label for="home-radio">${r}</label>
        </div>

        <div class="nav-radio">
            <input type="radio" name="nav" id="portfolio-radio">
            <label for="portfolio-radio">${c}</label>
        </div>

        <div class="nav-radio">
            <input type="radio" name="nav" id="experience-radio">
            <label for="experience-radio">${a}</label>
        </div>

        <div class="nav-radio">
            <input type="radio" name="nav" id="education-radio">
            <label for="education-radio">${d}</label>
        </div>

        <div class="nav-radio">
            <input type="radio" name="nav" id="contact-radio">
            <label for="contact-radio">${l}</label>
        </div>

    </nav>    
`);var s="";switch(document.documentElement.lang){case"en":s="&copy; 2025 Connor J. Link. All Rights Reserved.";break;case"es":s="&copy; 2025 Connor J. Link. Todos los Derechos Reservados.";break}m.insertAdjacentHTML("beforeend",`
    <footer class="shadowed">${s}</footer>
`);window.addEventListener("load",function(){const t=window.location.href.split("/"),n=t[t.length-1];n.includes("experience")?this.document.querySelector("#experience-radio").checked=!0:n.includes("education")?this.document.querySelector("#education-radio").checked=!0:n.includes("portfolio")?this.document.querySelector("#portfolio-radio").checked=!0:n.includes("contact")?this.document.querySelector("#contact-radio").checked=!0:this.document.querySelector("#home-radio").checked=!0});document.getElementById("home-radio").addEventListener("click",function(){window.location.href="./"});document.getElementById("portfolio-radio").addEventListener("click",function(){window.location.href="./portfolio"});document.getElementById("experience-radio").addEventListener("click",function(){window.location.href="./experience"});document.getElementById("education-radio").addEventListener("click",function(){window.location.href="./education"});document.getElementById("contact-radio").addEventListener("click",function(){window.location.href="./contact"});const f=document.querySelector("nav");document.getElementById("navbar-toggle").addEventListener("click",function(){f.style.display=f.style.display==="none"?"initial":"none"});
