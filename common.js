const head = document.querySelector('head');

// inject common styles
head.insertAdjacentHTML("beforeend", `
    <link rel="stylesheet" href="common.css">
    <meta property="og:image" content="https://connorjlink.com/res/logo.jpg"/>
`);
