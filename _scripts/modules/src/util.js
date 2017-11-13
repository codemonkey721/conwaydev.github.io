export function ready(fn) {
    if (document.readyState !== 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

export function throttle(callback, limit) {
    let wait = false;

    return function() {
        if (!wait) {
            callback.apply(null, arguments);
            wait = true;
            setTimeout(function() {
                wait = false;
            }, limit);
        }
    };
}
