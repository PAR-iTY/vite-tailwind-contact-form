// for outputting log and test results to screen
// helpful to output html when testing diff devices

// todo: finish parent tree function(s) to locate logged nodes
// const parents = node =>
//   (node.parentElement ? parents(node.parentElement) : []).concat([node]);

const target = document.body.firstElementChild || document.body;
// insert logger html
target.insertAdjacentHTML(
  'beforeend',
  `<div id="logger" class="mt-2">log output:<ol id="log" class="list-decimal ml-9 mt-2"></ol></div>`
);

const log = msg => {
  document
    .getElementById('log')
    .insertAdjacentHTML(
      'beforeend',
      `<li>${Array.isArray(msg) ? msg.join('</li><li>') : msg}</li>`
    );
};

// run some a11y tests
const toLog = [
  `loaded ally.js in version ${JSON.stringify(ally.version)}`,
  `first tabbable element: ${ally.query.firstTabbable().id}`,
  `tabsequence: ${ally.query.tabsequence().map(x => x.id)}`,
  `focusable elements: ${ally.query.focusable().map(x => x.id)}`
];

log(toLog);

// can also log regularly
// console.log('loaded ally.js in version', ally.version);
// console.log('first tabbable element', ally.query.firstTabbable());
// console.log('tabsequence', ally.query.tabsequence());
// console.log('focusable elements', ally.query.focusable());

export { log };

// scrap from main.js

// log(
//   `Array.from reqFields: isArray = ${Array.isArray(
//     reqFields
//   )}, ${reqFields.map(x => x.id)}`
// );
// test ie11 array from polyfill
// const reqFields2 = Array.prototype.slice.call(
//   document.querySelectorAll('input[id][required]')
// );
// log(
//   `[].slice.call reqFields: isArray = ${Array.isArray(
//     reqFields2
//   )}, ${reqFields2.map(x => x.id)}`
// );
// if (toLog) {
//   // log console out to html
//   document
//     .getElementById('log')
//     .insertAdjacentHTML('beforeend', `<li>${toLog.join('</li><li>')}</li>`);
// }
