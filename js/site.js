// 히어로 나레이션 한 줄만 타이핑한다. 그 외 모션 없음.
// JS가 없거나 reduced-motion이면 문장은 그대로 보인다(HTML에 이미 있음).
(function () {
  var el = document.querySelector("[data-type]");
  if (!el) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var text = el.textContent;
  el.textContent = "";

  var i = 0;
  (function step() {
    el.textContent = text.slice(0, ++i);
    if (i < text.length) setTimeout(step, 55);
  })();
})();
