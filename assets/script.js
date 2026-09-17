(function () {
  var root = document.documentElement;
  var key = "daisy-site-visited";

  try {
    if (window.sessionStorage.getItem(key)) {
      root.classList.add("home-visited");
      return;
    }

    window.sessionStorage.setItem(key, "1");
  } catch (error) {
    root.classList.add("home-visited");
    return;
  }

  window.requestAnimationFrame(function () {
    root.classList.add("ready");
  });
})();
