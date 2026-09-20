(function () {
  var nav = document.querySelector('nav');
  var toggle = document.querySelector('.nav-toggle');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }
  if (document.body.classList.contains('inner')) return;
  var updateNav = function () {
    if (!nav) return;
    if (window.scrollY > 80) nav.classList.add('nav-scrolled');
    else nav.classList.remove('nav-scrolled');
  };
  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();
})();
