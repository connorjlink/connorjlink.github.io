var x=Object.defineProperty;var $=(e,t,n)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var p=(e,t,n)=>$(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const v=(()=>{let e=0;return()=>(e+=1,`${Math.random().toString(36).substring(2,9)}-${e}`)})();class b extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._uuid=v()}connectedCallback(){this.render()}attributeChangedCallback(){this.render()}get _props(){const t=this.getAttribute("text")??"??",n=this.getAttribute("size"),i=Number.isFinite(Number(n))?Number(n):300,o=this.getAttribute("foreground-top-color")??this.getAttribute("foreground-gradient-top")??"var(--symbol-icon-fg-top, rgba(255,255,255,0.95))",r=this.getAttribute("foreground-bottom-color")??this.getAttribute("foreground-gradient-bottom")??"var(--symbol-icon-fg-bottom, rgba(220,220,220,0.95))",s=this.getAttribute("background-top-color")??this.getAttribute("background-gradient-top")??"var(--symbol-icon-bg-top, rgba(80,80,80,1))",l=this.getAttribute("background-bottom-color")??this.getAttribute("background-gradient-bottom")??"var(--symbol-icon-bg-bottom, rgba(40,40,40,1))";return{text:t,size:i,radius:this.getAttribute("radius")??"0.5rem",shadowColor:this.getAttribute("shadow-color")??"var(--symbol-icon-shadow-color, rgba(0,0,0,0.35))",foregroundTopColor:o,foregroundBottomColor:r,backgroundTopColor:s,backgroundBottomColor:l}}render(){if(!this.shadowRoot)return;const{text:t,size:n,radius:i,shadowColor:o,foregroundTopColor:r,foregroundBottomColor:s,backgroundTopColor:l,backgroundBottomColor:w}=this._props,u=`bgGradient-${this._uuid}`,g=`textGradient-${this._uuid}`,f=`dropShadow-${this._uuid}`,h=`richShadow-${this._uuid}`;this.shadowRoot.innerHTML=`
            <style>
                :host { display: inline-block; }
                svg { filter: none; text-shadow: none !important; font-family: 'Consolas', 'Menlo', monospace; }
            </style>
            <svg
                style="border-radius: ${i}; box-shadow: 0 0 1em #000A;"
                width="${n}"
                height="${n}"
                viewBox="0 0 300 300"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="${a(t)}"
            >
                <defs>
                    <linearGradient id="${u}" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="${d(l)}" />
                        <stop offset="100%" stop-color="${d(w)}" />
                    </linearGradient>

                    <linearGradient id="${g}" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="${d(r)}" />
                        <stop offset="100%" stop-color="${d(s)}" />
                    </linearGradient>

                    <filter id="${f}" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="5" dy="5" stdDeviation="10" flood-color="rgba(0,0,0,0.5)" />
                    </filter>

                    <filter id="${h}" x="-50%" y="-50%" width="200%" height="200%">
                        <feDropShadow dx="20" dy="20" stdDeviation="20" flood-color="rgba(0,0,0,0.8)" />
                    </filter>
                </defs>

                <g>
                    <rect x="0" y="0" width="300" height="300" fill="url(#${u})" />
                </g>

                <text
                    x="155"
                    y="170"
                    text-anchor="middle"
                    dominant-baseline="middle"
                    font-size="180"
                    fill="${d(o)}"
                    opacity="1.0"
                >
                    ${a(t)}
                </text>

                <text
                    x="150"
                    y="165"
                    text-anchor="middle"
                    dominant-baseline="middle"
                    font-size="180"
                    fill="url(#${g})"
                    filter="url(#${f}) url(#${h})"
                    stroke="rgba(255,255,255,0.3)"
                    stroke-width="1"
                >
                    ${a(t)}
                </text>
            </svg>
        `}}p(b,"observedAttributes",["text","size","radius","shadow-color","foreground-gradient-top","foreground-gradient-bottom","foreground-top-color","foreground-bottom-color","background-gradient-top","background-gradient-bottom","background-top-color","background-bottom-color"]);function a(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function d(e){return a(e)}customElements.get("symbol-icon")||customElements.define("symbol-icon",b);const A=document.querySelector("article");function c(){const e=window.location.hash;if(!e||e.length<2)return;const t=document.getElementById(e.substring(1));if(!t)return;const n=t.closest("details");n&&(n.open=!0)}function y(e){fetch(e).then(t=>t.text()).then(t=>{const i=new DOMParser().parseFromString(t,"text/html"),o=i.querySelector("article");A.innerHTML=o.innerHTML,document.title=i.title,document.querySelectorAll("link[data-page-style]").forEach(r=>r.remove()),i.querySelectorAll('link[rel="stylesheet"]').forEach(r=>{if(!r.href.includes("common.css")){const s=document.createElement("link");s.rel="stylesheet",s.href=r.href,s.setAttribute("data-page-style","true"),document.head.appendChild(s)}}),c()}),console.log(`Loaded page: ${e}`)}function k(e){console.log(`Navigating to ${e}`);const t=e.substring(2);t!=""&&window.location.href.includes(t)||(history.pushState({url:e},"",e),y(e))}window.navigate=k;window.addEventListener("popstate",e=>{var t;(t=e.state)!=null&&t.url&&y(e.state.url)});function C(){const t=window.location.href.split("/").pop()||"",n={experience:"experience-radio",education:"education-radio",portfolio:"portfolio-radio",contact:"contact-radio"};let i=!1;for(const o in n)if(t.includes(o)){const r=document.getElementById(n[o]);r&&(r.checked=!0),console.log(`Found ${o} in ${t}, setting ${n[o]} as checked.`),i=!0;break}if(!i){const o=document.getElementById("home-radio");o&&(o.checked=!0)}}window.addEventListener("load",C);window.addEventListener("load",c);window.addEventListener("hashchange",c);const m=document.querySelector("nav");document.getElementById("navbar-toggle").addEventListener("click",function(){m.style.display=m.style.display==="none"?"initial":"none"});
