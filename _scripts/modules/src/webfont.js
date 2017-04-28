import WebFont from 'webfontloader';
import { ready } from './util';

ready(()=> {
    WebFont.load({
        google: {
            families: [
                'Poppins:600',
                'Roboto Mono:400,700'
            ]
        }
    });
});
