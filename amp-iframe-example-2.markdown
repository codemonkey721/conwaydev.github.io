---
title: AMP Iframe Example 2
date: 2020-12-09 21:03:00 Z
permalink: "/amp-iframe-example-2/"
layout: blank
---

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport"
      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>AMP Iframe example</title>
    <style>
      p + p {
        margin-top: 1rem;
      }
    </style>
  </head>
  <body>
    <p>I'm a cool iframe with a little script inside me that post messages to my parent window in order to resize me! Thats all I am!</p>
    <p>The code i'm running is found at <a href="https://amp.dev/documentation/components/amp-iframe/#iframe-resizing">https://amp.dev/documentation/components/amp-iframe/#iframe-resizing</a>.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, consequuntur maxime nesciunt repellendus tempora ullam. Animi dicta eaque illo ipsam iste odio officiis similique sit temporibus voluptate. Alias, culpa, iste.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti dolore, dolores, ducimus fuga ipsa iure molestias nobis numquam perferendis porro quisquam sint sunt vel vero voluptatem voluptatum! Dolores, recusandae.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque debitis delectus dicta dolor, dolores hic id itaque magni nisi omnis optio pariatur, possimus quidem quo quos ratione repudiandae sunt unde.</p>
<p>The code i'm running is found at <a href="https://amp.dev/documentation/components/amp-iframe/#iframe-resizing">https://amp.dev/documentation/components/amp-iframe/#iframe-resizing</a>.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, consequuntur maxime nesciunt repellendus tempora ullam. Animi dicta eaque illo ipsam iste odio officiis similique sit temporibus voluptate. Alias, culpa, iste.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti dolore, dolores, ducimus fuga ipsa iure molestias nobis numquam perferendis porro quisquam sint sunt vel vero voluptatem voluptatum! Dolores, recusandae.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque debitis delectus dicta dolor, dolores hic id itaque magni nisi omnis optio pariatur, possimus quidem quo quos ratione repudiandae sunt unde.</p>
<p>The code i'm running is found at <a href="https://amp.dev/documentation/components/amp-iframe/#iframe-resizing">https://amp.dev/documentation/components/amp-iframe/#iframe-resizing</a>.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, consequuntur maxime nesciunt repellendus tempora ullam. Animi dicta eaque illo ipsam iste odio officiis similique sit temporibus voluptate. Alias, culpa, iste.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti dolore, dolores, ducimus fuga ipsa iure molestias nobis numquam perferendis porro quisquam sint sunt vel vero voluptatem voluptatum! Dolores, recusandae.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque debitis delectus dicta dolor, dolores hic id itaque magni nisi omnis optio pariatur, possimus quidem quo quos ratione repudiandae sunt unde.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis delectus eum explicabo magni nesciunt nobis quos reiciendis repellat tempora vel. Ab, commodi culpa esse exercitationem molestiae quidem ratione tenetur veniam!</p>

    <script>
      function ready(fn) {
        if (document.readyState !== 'loading') {
          fn();
        } else {
          document.addEventListener('DOMContentLoaded', fn);
        }
      }

      ready(function() {
        window.parent.postMessage(
          {
            sentinel: 'amp',
            type: 'embed-ready',
          },
          '*'
        );

        window.parent.postMessage(
          {
            sentinel: 'amp',
            type: 'embed-size',
            height: document.body.scrollHeight,
          },
          '*'
        );
      });
    </script>
  </body>
</html>