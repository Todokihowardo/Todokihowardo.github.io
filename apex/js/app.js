// 미준비 이미지 라벨 오버레이(실사진 배치 시 자동 정상).
addEventListener("error", function (e) {
  var el = e.target;
  if (el.tagName === "IMG") el.classList.add("missing");
}, true);

// 사진 클릭 → 확대. 오버레이/Esc 클릭 → 닫힘.
// ponytail: 오버레이 하나 재사용, 라이브러리 없음.
(function () {
  var box = document.createElement("div");
  box.className = "lightbox";
  var big = document.createElement("img");
  box.appendChild(big);
  document.body.appendChild(box);

  function close() { box.classList.remove("open"); big.removeAttribute("src"); }
  box.addEventListener("click", close);
  addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });

  document.querySelectorAll(".pc img,.jet img").forEach(function (img) {
    img.addEventListener("click", function () {
      if (img.classList.contains("missing") || !img.getAttribute("src")) return;
      big.src = img.currentSrc || img.src;
      box.classList.add("open");
    });
  });
})();
