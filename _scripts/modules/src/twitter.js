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
    const tweets = document.querySelector('.js-tweets');

    if (tweets) {
        if (!('IntersectionObserver' in window)) {
            window.addEventListener(
                'scroll',
                throttle(() => {
                    if (tweets && isScrolledIntoView(tweets) && (window.outerWidth > 600)) {
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
                    threshold: 1
                }
            );

            if (tweets && (window.outerWidth > 600)) {
                observer.observe(tweets);
            }
        }
    }
});