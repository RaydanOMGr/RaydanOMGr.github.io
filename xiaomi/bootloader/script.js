(function() {
  var toggle = document.getElementById('sidebarToggle');
  var sidebar = document.getElementById('sidebar');
  var overlay = document.getElementById('sidebarOverlay');

  function openSidebar() {
    sidebar.classList.add('open');
    overlay.classList.add('open');
  }
  function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
  }
  window.closeSidebar = closeSidebar;

  toggle.addEventListener('click', function() {
    if (sidebar.classList.contains('open')) { closeSidebar(); }
    else { openSidebar(); }
  });
  overlay.addEventListener('click', closeSidebar);

  var links = sidebar.querySelectorAll('a');
  var sections = [];
  links.forEach(function(link) {
    var href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      sections.push(href.substring(1));
    }
  });

  function updateActive() {
    var scrollY = window.scrollY + 100;
    var activeId = 'top';
    sections.forEach(function(id) {
      var el = document.getElementById(id);
      if (el && el.offsetTop <= scrollY) {
        activeId = id;
      }
    });
    links.forEach(function(link) {
      var href = link.getAttribute('href');
      link.classList.remove('active');
      if (href === '#' + activeId) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActive);
  updateActive();
})();
