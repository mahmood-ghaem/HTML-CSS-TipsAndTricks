(function () {
  'use strict';

  const navToggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.links');

  navToggle.addEventListener('click', function () {
    menu.classList.toggle('show-links');
    navToggle.classList.toggle('open');
  });
})();
