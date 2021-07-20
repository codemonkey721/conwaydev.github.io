const script = document.createElement("script");
script.src = "https://www.googletagmanager.com/gtag/js?id=G-1XCBW4CS93";
script.async = true;
script.onload = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-1XCBW4CS93');
};
document.body.appendChild(script);
