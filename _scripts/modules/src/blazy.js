import { ready } from './util';

ready(() => {
  if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll("img");
    images.forEach(img => {
      if (img.dataset.src) {
        img.src = img.dataset.src;
      }
    });
  } else {
    // Dynamically import the LazySizes library
    let script = document.createElement("script");
    script.async = true;
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/4.1.8/lazysizes.min.js";
    document.body.appendChild(script);
  }
});
