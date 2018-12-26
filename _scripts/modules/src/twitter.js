import {ready} from './util';

function appendTwitterScript() {
    const script = document.createElement('script');
    script.src = '//platform.twitter.com/widgets.js';
    document.head.appendChild(script);
}

ready(() => {
    const tweets = document.querySelector('.js-tweets');

    if (tweets) {
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver(
                () => {
                    appendTwitterScript();
                },
                {
                    threshold: 0.5
                }
            );

            if (tweets) {
                observer.observe(tweets);
            }
        }
    }
});
