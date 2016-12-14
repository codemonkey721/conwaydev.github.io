import {throttle} from 'lodash';

function isScrolledIntoView(el) {
    const elemTop = el.getBoundingClientRect().top;
    const elemBottom = el.getBoundingClientRect().bottom;

    return (elemTop >= 0) && (elemBottom <= window.innerHeight);
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
    window.addEventListener('scroll', throttle(showTwitterFeed, 1000));
}
