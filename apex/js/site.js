/* APEX GP ASIA — 로어 사이트
   ① 팀 아이콘 → 팀 정보 모달   ② 사진 클릭 확대 */
(function () {
  'use strict';

  /* ── 팀 모달 ─────────────────────────────── */
  var dlg  = document.getElementById('tmodal');
  var hdEl = document.getElementById('tmHd');
  var bdEl = document.getElementById('tmBd');

  function openTeam(btn) {
    var tpl = document.getElementById(btn.dataset.team);
    if (!tpl || !dlg) return;

    /* 헤더: 카드의 로고·이름을 그대로 재사용 */
    var logo = btn.querySelector('.tlogo');
    var name = btn.querySelector('.tcard__name');
    hdEl.textContent = '';

    var l = logo.cloneNode(true);
    hdEl.appendChild(l);

    var h = document.createElement('h3');
    h.textContent = name.firstChild.textContent.trim();
    var sub = name.querySelector('.tcard__sub');
    if (sub) {
      var s = document.createElement('small');
      s.textContent = sub.textContent;
      h.appendChild(s);
    }
    hdEl.appendChild(h);

    var x = document.createElement('button');
    x.className = 'tmodal__x';
    x.type = 'button';
    x.setAttribute('aria-label', '닫기');
    x.textContent = '✕';
    x.addEventListener('click', function () { dlg.close(); });
    hdEl.appendChild(x);

    bdEl.textContent = '';
    bdEl.appendChild(tpl.content.cloneNode(true));
    bdEl.scrollTop = 0;

    if (typeof dlg.showModal === 'function') dlg.showModal();
    else dlg.setAttribute('open', '');           /* <dialog> 미지원 폴백 */
  }

  Array.prototype.forEach.call(document.querySelectorAll('.tcard'), function (btn) {
    btn.addEventListener('click', function () { openTeam(btn); });
  });

  /* 백드롭 클릭으로 닫기 — .tmodal__in 바깥을 눌렀을 때만 */
  if (dlg) {
    dlg.addEventListener('click', function (e) {
      if (!e.target.closest('.tmodal__in')) dlg.close();
    });
  }

  /* ── 라이트박스 ──────────────────────────── */
  var lb = document.getElementById('lb');
  var lbImg = lb && lb.querySelector('img');
  var ZOOM = '.card__img img, .drv img, .person__hd img, .look img, .jetbox img';

  function closeLb() {
    if (!lb) return;
    lb.classList.remove('on');
    lbImg.src = '';
    if (!dlg || !dlg.open) document.body.style.overflow = '';
  }

  document.addEventListener('click', function (e) {
    if (!lb || !e.target.closest) return;
    if (lb.classList.contains('on')) { closeLb(); return; }
    var img = e.target.closest(ZOOM);
    if (!img || !(img.currentSrc || img.src)) return;
    lbImg.src = img.currentSrc || img.src;
    lbImg.alt = img.alt || '';
    lb.classList.add('on');
    document.body.style.overflow = 'hidden';
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lb && lb.classList.contains('on')) {
      e.preventDefault();          /* 라이트박스가 열려 있으면 모달보다 먼저 닫는다 */
      e.stopPropagation();
      closeLb();
    }
  }, true);

  /* ── 팀 로고가 아직 없을 때: 깨진 아이콘 대신 약칭 ── */
  var INITIAL = { 't/0.webp': '18', 't/1.webp': '11',
                  't/2.webp': 'VFA', 't/3.webp': '6th', 't/4.webp': '1st' };

  Array.prototype.forEach.call(document.querySelectorAll('.tlogo img'), function (img) {
    function fallback() {
      var box = img.parentNode;
      if (!box) return;
      box.textContent = INITIAL[img.getAttribute('src')] || '—';
    }
    img.addEventListener('error', fallback);
    if (img.complete && img.naturalWidth === 0) fallback();
  });
})();
