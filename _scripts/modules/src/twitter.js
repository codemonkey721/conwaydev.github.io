import {ready, throttle} from './util';

function isScrolledIntoView(el) {
    return el.getBoundingClientRect().top >= 0 && el.getBoundingClientRect().bottom <= window.innerHeight;
}

function appendTwitterScript() {
    const script = document.createElement('script');
    script.src = '//platform.twitter.com/widgets.js';
    document.head.appendChild(script);
}

ready(() => {
    if (!('IntersectionObserver' in window)) {
        const tweets = document.querySelector('.js-tweets');

        window.addEventListener(
            'scroll',
            throttle(() => {
                if (tweets && isScrolledIntoView(tweets)) {
                    appendTwitterScript();
                }
            }, 250)
        );
    } else {
        const observer = new IntersectionObserver(
            () => {
                appendTwitterScript();
            },
            {
                threshold: 0.5
            }
        );

        observer.observe(document.querySelector('.js-tweets'));
    }
});
