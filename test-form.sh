# this script has all the npm testing libraries that were attempted
# but: vite + tailwind's approaches to legacy support circumvent many of them
# expect: form honey-pot fields will necessarily fail accessability

# only the test libraries found to be effective are included in build-form.sh

# ------------------------------------------------------------------
#
# the out-of-the-box useful libraries:
#
# ------------------------------------------------------------------

# run html accessability checks
npx pa11y https://vite-tailwind-form.surge.sh

# get more aria-specific information
npx a11y https://vite-tailwind-form.surge.sh

# ------------------------------------------------------------------
#
# the more complicated/false-positive error libraries:
#
# ------------------------------------------------------------------

# check ecmascript transpilation and polyfills
# expect: vite's legacy plugin use of import/export to confuse eslint
npx eslint --no-eslintrc --parser-options=ecmaVersion:5 dist/assets/**/*.js

# axe + html-validate + browsers (heavy)
npx evaluatory https://vite-tailwind-form.surge.sh

# expect: vite's legacy plugin use of import/export to confuse es-check
# option: '--module true' for module vs nomodule compatability
# warning: spits out a log of backtrace error stuff that isnt helpful
npx es-check --module true es5 './dist/assets/**/*.js'

# run css browser compatability check against caniuse db
# expect: postcss autoprefixer to handle vendor prefixes
# research: is index.{UID}.css un-tranformed tailwind css?
# what about the injected css within index.legacy.{UID}.js?
# add --ignore list?
npx doiuse --browsers "ie >= 11" $(find ./dist/assets -type f -name "index.*.css")

# opinionated style errors
npx html-validate ./dist/index.html

# ------------------------------------------------------------------
#
# the broken libraries:
#
# ------------------------------------------------------------------

# returns a lot of metadata stats
# errors on accessability (uses phantom.js)
npx staats https://vite-tailwind-form.surge.sh

# BELOW: @axe-core/cli wrappers (all have errors)

# downloads chromium
# <error> seems to hang on closing chromium
npx equa11y

# downloads chromium
# <error> seems to hang on closing chromium
npx @a11ygato/cli audit https://vite-tailwind-form.surge.sh
npx a11y-sitechecker https://vite-tailwind-form.surge.sh

# <error> requires chromium
npx conduct-a11y-audit -u https://vite-tailwind-form.surge.sh