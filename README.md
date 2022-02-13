Contact form experiment built with vitejs + tailwindcss configured for legacy support (IE11+) and accessibility. Uses an API for form-submission handling and delivery to email address, and is deployed with surge.sh

For this project I established a build, config and deploy process with technologies I enjoy and wish to keep developing with. I wrote build-form.sh to do this in a re-usable way as I plan to create a template from it for my own use.

https://vite-tailwind-form.surge.sh/

## tooling

Developer friendly processes and tooling can help immensely with wellbeing and enjoyment which both affect many important things like productivity and creativity. it has added benefits with ease of collaboration, handover, context-switching etc. good friendly tooling can eliminate huge swaths of mistakes and errors by handling diffuse and tedious developer tasks.

### Vitejs and TailwindCSS

I love the purging and modularity with both of these tools, and the potential for configuration and automated deployment of complex web applications, without framework overhead being passed on to the user.

I went with a light build tool Vitejs that centres developer convienience. I like how it uses ES modules instead of bundling for development builds while still minimising file size and achieving things like code-splitting and hot module replacement. it also bundles for production with benefits like tree-shaking, lazy-loading and common chunk splitting.

## form submission handling

I chose this email API service https://formsapi.jabwn.com/ for its security and privacy advantages over competitors detailed below. it uses a API key to avoid exposing an email address in the HTML and it'sprivacy policy clearly states protection of the user data from collection or passing on third parties.

### form API service competitors:

https://formspree.io/ seems to be the most popular service, but doesn't use a API key to hide email address, or allow useful features like file submission in its free tier. most importantly formspree's privacy policy is not great and makes no promises to not pass on or itself use your or your users data.

https://airform.io/ is free and open source, does expose an email address in the HTML though. Was unable to find a privacy policy or similar statement of intent, beyond a general appeal to an open source ethos, which is hard to rely upon.

https://www.staticforms.xyz/ has no sign up or exposing your email address, privacy policy makes no meaningful promises to protect user data though. States it will collect, store and use personal information for its own services, and may share with third parties.

## accessability

some guides used as starting points:

- https://www.oomphinc.com/inside-oomph/best-practices-html-form-accessibility/
- https://a11y-101.com/development

have themed focus and hover states and made focus more visually impactful
preferred as gives devices and browsers power and predictablility
semantic HTML, aria-labels, form attributes, etc

used pre-ES6 javascript for hidden form control for browser compatability just in case, mostly due to not wanting to manually supply polyfills that aren't easily or obviously supplied via tailwinds legacy plugin

took an HTML heavy approach for semantic and accessability improvements inluding always supplying a id to link to a label as reccomended by test results. tried to use aria attributes where helpful

### testing

- pa11y npm CLI tool to get list of HTML accessability issues

- a11y npm CLI tool to get assistive technology-focused issues
  uses phantomJS and chrome dev tools

- doiuse npm CLI tool to get list of CSS styles that fail a specified target browser
  assert: found no caniuse vendor prefix issues due to autoprefixer
  assume: doiuse and autoprefixer's caniuse datasets match on relevant vendor prefixes

## todo

- increase use and understanding of aria labels
- make required fields look required more visually required
