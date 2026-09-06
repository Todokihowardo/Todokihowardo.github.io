APEX GP ASIA — 로어 사이트

[팀 로고]  t/0~4.webp  (512x512 RGBA, 투명 유지)
  0 제18전투비행단 / 1 제11전투비행단 / 2 VFA-27
  3 JASDF 제6비행대 / 4 PLAAF 제1항공여단
교체할 때는 같은 파일명으로 덮어쓰면 됩니다. PNG라면:
  python tools/to_webp.py <파일들> --max-side 512
(투명 픽셀 보존이 필요하면 Pillow save 시 exact=True)

[로고]  초록 사선 / + 크로스바 없는 델타 ∧ , 델타가 워드마크의 A 를 대체.
브라우저에 실제로 띄워 Archivo 800 의 'A' 글리프를 픽셀 실측해 정점을 옮겨 왔다.
  캡 높이 : 잉크 폭 = 275 : 292   꼭짓점 x103~189(평평)
  바깥 빗변 기울기 -103/275       카운터 꼭짓점 (144.5, 62)
  크로스바 y174~227 ← 이것만 제거한 것이 델타
  사이드베어링 실측 LSB .0075em / RSB .0085em → .brand__a 의 margin 값
초록 사선은 A 의 왼쪽 바깥 빗변과 기울기가 완전히 동일하다(103:275).
※ letterform 을 감으로 그리지 말 것 — 반드시 렌더된 글리프를 실측해서 맞춘다.
크기는 .brand{--bs} 하나로 조절(헤더 2rem / 푸터 1.4rem / 모바일 1.6rem).
델타·사선은 inline-block + vertical-align:baseline 이라 글자 베이스라인에 자동으로 붙는다.

[함정]  *{margin:0} 리셋이 <dialog> 의 UA 기본 margin:auto 를 지운다.
.tmodal 에 margin:auto 를 직접 넣어야 화면 중앙에 뜬다(안 넣으면 좌상단에 붙음).

[폰트]  Noto Sans KR 은 400/700/900 만 로드합니다.
한글이 들어가는 요소에 500/800 을 쓰면 가짜 볼드로 합성되어 "폰트 안 먹은" 모양이
됩니다. 500/800 은 라틴 전용 요소(GRAND PRIX, ASIA SERIES, NAV, EN 라벨,
PILOT/CHIEF, AGWR/TCE/VEIL)에만 남겨 두었습니다.

[참가 팀]  아이콘 그리드 → 클릭 시 <dialog> 모달.
모달 내용은 문서 하단 <template id="t0"~"t4"> 에 그대로 들어 있습니다.
인물 대표 썸네일은 경기복(의=0)이고, 그 아래 3종 스트립이 경기/공식/일상입니다.
