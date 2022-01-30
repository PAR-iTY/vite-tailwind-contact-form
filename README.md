Contact form experiment built with vitejs + tailwindcss configured for legacy support (IE11+) and accessibility (aria-labels). Uses an API for form-submission handling and delivery to email address, and is deployed with surge.sh

vite-tailwind-form.surge.sh/

`form submission handling`
i chose this email API service https://formsapi.jabwn.com/
it uses a API key so no exposure of email address in the html and appears to have a good privacy policy compared with its competitors for security

competitors:

https://formspree.io/ seems to be the most popular service, but they dont (for free) hide your email address and having used it in the past, tend to bump features (like image/file handling) into proprietary tiers
most importantly formspree's privacy policy is not great and makes no promises to not use your or your users data

https://airform.io/ is free and open source serverless form mail (exposes your email address in the html though)

https://www.staticforms.xyz/ has no sign up or exposing your email address, does not share any information but not a great privacy policy

netlify offers form handling within its dashboard, free and rate limited

-- developer friendly considerations --
i used vitejs and tailwindcss to give some guard rails and structure to the form but also because i have been using both recently and i enjoy working with them. im interested in vitejs for its speed, simplicity and user experience.

basically its very nice to work with and helps avoid whole categories of complexity and potential errors/headaches.

-- accessability considerations --

`todo`

- wrap checkbox and email/password in fieldsets
- use aria labels properly (MDN reference)
  aria-describedby, aria-disabled and aria-live
- make required fields look required

`html accessability`
some guides used as starting points:
https://www.oomphinc.com/inside-oomph/best-practices-html-form-accessibility/
https://a11y-101.com/development

have themed focus and hover states and made focus more visually impactful
preferred as gives devices and browsers power and predictablility
semantic html, aria-labels, form attributes, etc

used pre-ES6 javascript for hidden form control for browser compatability just in case, mostly due to not wanting to manually supply polyfills that aren't easily or obviously supplied via tailwinds legacy plugin

took an html heavy approach for semantic and accessability improvements inluding always supplying a id to link to a label as reccomended by test results. tried to use aria attributes where helpful

`emojis`
<span role="img" aria-hidden="true">🐍</span>
<span role="img" aria-hidden="true">🐻</span>
<span role="img" aria-hidden="true">🐯</span>
<span role="img" aria-hidden="true">🐍</span>
<span role="img" aria-hidden="true">🐴</span>

`testing`

- pa11y npm CLI tool to get list of html accessability issues

- a11y npm CLI tool to get assistive technology-focused issues
  uses phantomJS and chrome dev tools

-- CSS --

- doiuse npm CLI tool to get list of styles that fail a specified target browser
  assert: found no caniuse vendor prefix issues due to autoprefixer
  assume: doiuse and autoprefixer's caniuse datasets match on relevant vendor prefixes

`tailwind`
(optional) tailwind config for using ::selection psuedo-class
https://www.npmjs.com/package/tailwindcss-selection-variant

main.js hidden form control code should be ES5 for legacy support
