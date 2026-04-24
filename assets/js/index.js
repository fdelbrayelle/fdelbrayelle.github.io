(function () {
  var stored = localStorage.getItem('dark');
  var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  var isDark = stored !== null ? stored === '1' : prefersDark;
  if (isDark) document.body.classList.add('dark');

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('dark-toggle');
    if (!btn) return;
    btn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
    btn.addEventListener('click', function () {
      var nowDark = !document.body.classList.contains('dark');
      document.body.classList.toggle('dark', nowDark);
      localStorage.setItem('dark', nowDark ? '1' : '0');
      btn.textContent = nowDark ? '☀️' : '🌙';
    });
  });
})();
