'use strict';
// Formspree endpoint for Harborstone project inquiries.
const FORM_ENDPOINT = 'https://formspree.io/f/mrpgnadj';
const menu = document.querySelector('.menu');
const nav = document.querySelector('#navigation');
menu?.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open); });
nav?.addEventListener('click', (event) => { if (event.target.closest('a')) { menu.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); } });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && nav?.classList.contains('open')) { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); menu.focus(); } });
document.querySelector('#year')?.replaceChildren(String(new Date().getFullYear()));
// Give each section the same editorial rhythm: a small category label and a clear idea.
const sectionTitles = [
 ['#services', 'SERVICES', 'Practical, by design.'],
 ['#faq', 'FAQs', 'A few things worth knowing.'],
 ['#contact', 'CONTACT', "Let's talk about your website."]
];
sectionTitles.forEach(([selector, label, title]) => {
 const section = document.querySelector(selector);
 const heading = section?.querySelector('h2');
 if (!section || !heading) return;
 const kicker = document.createElement('p');
 kicker.className = 'eyebrow';
 kicker.textContent = label;
 heading.textContent = title;
 heading.parentElement.insertBefore(kicker, heading);
});

const form = document.querySelector('#quote-form');
if (form) {
 const button = document.querySelector('#submit-button');
 const status = document.querySelector('#form-status');
 const requiredFields = [
  ['name', 'Enter your name.'],
  ['phone', 'Enter your phone number.'],
  ['project_type', 'Select a project type.'],
  ['project_details', 'Add your project details.']
 ];
 const validateField = ([name, message]) => {
  const field = form.elements.namedItem(name);
  const valid = field.value.trim() !== '';
  field.setAttribute('aria-invalid', String(!valid));
  document.getElementById(`${name}-error`).textContent = valid ? '' : message;
  return valid;
 };
 requiredFields.forEach(rule => {
  const field = form.elements.namedItem(rule[0]);
  const revalidate = () => {
   if (field.getAttribute('aria-invalid') === 'true') validateField(rule);
  };
  field.addEventListener('input', revalidate);
  field.addEventListener('change', revalidate);
 });
 form.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (button.disabled) return;
  const invalidFields = requiredFields.filter(rule => !validateField(rule));
  if (invalidFields.length) {
   status.textContent = '';
   form.elements.namedItem(invalidFields[0][0]).focus();
   return;
  }
  const data = new FormData(form);
  button.disabled = true;
  button.textContent = 'Sending…';
  form.setAttribute('aria-busy', 'true');
  status.textContent = 'Sending your request…';
  try {
   const response = await fetch(FORM_ENDPOINT, {
    method: 'POST', body: data, headers: { Accept: 'application/json' }
   });
   if (!response.ok) {
    status.textContent = response.status === 429
     ? 'Too many requests. Please wait a few minutes and try again. Your details are still here.'
     : 'Your request could not be sent. Your details are still here—please try again.';
    return;
   }
   status.textContent = 'Thank you. Your project request has been sent. We’ll be in touch by phone.';
   form.reset();
   requiredFields.forEach(([name]) => {
    form.elements.namedItem(name).removeAttribute('aria-invalid');
    document.getElementById(`${name}-error`).textContent = '';
   });
  } catch {
   status.textContent = 'Unable to connect. Please check your connection and try again. Your details are still here.';
  } finally {
   button.disabled = false;
   button.textContent = 'Submit';
   form.removeAttribute('aria-busy');
  }
 });
}
