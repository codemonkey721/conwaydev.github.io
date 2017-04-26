function isScrolledIntoView(el) {
    return (el.getBoundingClientRect().top >= 0) && (el.getBoundingClientRect().bottom <= window.innerHeight);
}

function appendTwitterScript() {
    const script = document.createElement('script');
    script.src = '//platform.twitter.com/widgets.js';
    document.head.appendChild(script);
}

function showTwitterFeed() {
    if (document.querySelector('.js-tweets') && isScrolledIntoView(document.querySelector('.js-tweets'))) {
        appendTwitterScript();
    }
}

if (window.innerWidth >= 640) {
    window.addEventListener('scroll', showTwitterFeed);
}
