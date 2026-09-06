APEX GP ASIA — 로어 사이트

[팀 로고]  t/0~4.webp  (512x512 RGBA, 투명 유지)
  0 제18전투비행단 / 1 제11전투비행단 / 2 VFA-27
  3 JASDF 제6비행대 / 4 PLAAF 제1항공여단
교체할 때는 같은 파일명으로 덮어쓰면 됩니다. PNG라면:
  python tools/to_webp.py <파일들> --max-side 512
(투명 픽셀 보존이 필요하면 Pillow save 시 exact=True)

[로고]  마크만 SVG(<symbol id="apexdelta">), 글자는 실제 서체로 조판.
델타익 두 장(왼쪽 사선만 관제탑 그린) + "APEX"(Archivo 800) + GRAND/PRIX 락업.
※ letterform 을 패스로 직접 그리지 말 것 — 자간·획 굵기·곡률이 무너진다.
크기는 .brand{--bs} 하나로 조절되고, 델타 높이는 대문자 높이(0.72em)에 맞춰
자동 계산된다. 헤더 --bs:2rem / 푸터 1.4rem / 모바일 1.6rem.

[폰트]  Noto Sans KR 은 400/700/900 만 로드합니다.
한글이 들어가는 요소에 500/800 을 쓰면 가짜 볼드로 합성되어 "폰트 안 먹은" 모양이
됩니다. 500/800 은 라틴 전용 요소(GRAND PRIX, ASIA SERIES, NAV, EN 라벨,
PILOT/CHIEF, AGWR/TCE/VEIL)에만 남겨 두었습니다.

[참가 팀]  아이콘 그리드 → 클릭 시 <dialog> 모달.
모달 내용은 문서 하단 <template id="t0"~"t4"> 에 그대로 들어 있습니다.
인물 대표 썸네일은 경기복(의=0)이고, 그 아래 3종 스트립이 경기/공식/일상입니다.
