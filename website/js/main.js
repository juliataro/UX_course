/* Highway Heroes – small helpers. The site works fully without this file;
   it only adds the folding phone/tablet menu and keeps the © year current. */
(function () {
  'use strict';

  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('site-nav');

  if (toggle && nav) {
    var setOpen = function (open) {
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      nav.classList.toggle('is-open', open);
    };

    toggle.addEventListener('click', function () {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });

    // Close the menu after choosing a section
    nav.addEventListener('click', function (ev) {
      if (ev.target.closest('a[href^="#"]')) setOpen(false);
    });

    // Escape closes the menu and returns focus to the button
    document.addEventListener('keydown', function (ev) {
      if (ev.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setOpen(false);
        toggle.focus();
      }
    });

    // Reset when the screen becomes wide (e.g. tablet rotated)
    var wide = window.matchMedia('(min-width: 1120px)');
    var onChange = function () { if (wide.matches) setOpen(false); };
    if (wide.addEventListener) wide.addEventListener('change', onChange);
  }

  // Move keyboard focus to the section a link jumps to (helps screen-reader users)
  document.addEventListener('click', function (ev) {
    var link = ev.target.closest('a[href^="#"]');
    if (!link) return;
    var target = document.getElementById(link.getAttribute('href').slice(1));
    if (!target) return;
    if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
    setTimeout(function () { target.focus({ preventScroll: true }); }, 0);
  });

  // Keep the copyright year up to date
  var year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
})();
