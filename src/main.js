document.getElementById('contact-form').addEventListener('input', e => {
  // console.log(e.target);

  const reqFields = Array.from(document.querySelectorAll('input[id][required]'));

  // enable submit when all required field values are valid
  document.getElementById('submit').disabled = reqFields.some(
    field => !field.checkValidity()
  );

  // stoopid basic branching method
  if (e.target.required) {
    // target required
    if (!e.target.checkValidity()) {
      // target required and invalid
      if (!e.target.classList.contains('required')) {
        e.target.classList.add('required');
        const msg = e.target.parentElement.querySelector('.required-msg');
        msg.classList.remove('hidden');
      }
    } else {
      // target required and valid
      if (e.target.classList.contains('required')) {
        e.target.classList.remove('required');
        const msg = e.target.parentElement.querySelector('.required-msg');
        msg.classList.add('hidden');
      }
    }
  }
});

// cancel form
document.getElementById('cancel').addEventListener('click', () => {
  document.getElementById('contact-form').reset();
});

// If tiger is selected reveal type of tiger field
document.getElementById('tiger').addEventListener('click', () => {
  const group = document.getElementById('tiger-toggle');
  const field = document.getElementById('tiger-type');

  // toggle aspects to help form UX and html accessability
  // use required as flag to to toggle attrs and attr:val pairs
  // afaik cannot toggle an attr:val pair so do manually
  // avoiding toggleAttribute also helps IE11 compatability
  // idk if toggleAttribute is polyfilled, cant find in core-js

  if (field.hasAttribute('required')) {
    // remove field attributes
    field.removeAttribute('name');
    field.removeAttribute('aria-required');
    field.removeAttribute('required');
    // hide group from DOM
    group.setAttribute('hidden', '');
  } else {
    // add field attributes
    field.setAttribute('name', 'tiger-type');
    field.setAttribute('aria-required', 'true');
    field.setAttribute('required', '');
    // reveal group to DOM
    group.removeAttribute('hidden');
  }

  // hide/reveal group visually
  group.classList.toggle('hidden');
});
