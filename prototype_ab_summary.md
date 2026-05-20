# HCI Prototype 개선 작업 및 A/B 테스트 차이 정리

## 최신 공통 패치

- 시간표 중복 상태를 노란색이 아닌 붉은 계열 경고 색상으로 통일했습니다.
- 강좌 카드에 마우스를 올렸을 때 중복되는 경우, 시간표 상단에 `무슨 강의가 무슨 강의와 무슨 시간에 겹치는지` 읽을 수 있는 경고 메시지를 표시합니다.
- 중복 표시도 여러 개의 분리된 사각형처럼 보이지 않도록, 신청 완료 시간표와 같은 방식으로 연속 셀의 테두리를 합쳐 하나의 블록처럼 보이게 했습니다.
- 중복 강좌 신청 시 모달 메시지도 과목명과 겹치는 시간을 구체적으로 보여주도록 바꿨습니다.
- 시간표 본문에 세로 스크롤바가 생겨도 `월화수목금` 헤더와 각 요일별 강의 칸의 가로 폭이 어긋나지 않도록 헤더 보정값을 동기화했습니다.
- 좌상단 사용자 정보는 `USER_MAJOR = ' 콘텐츠IT'`처럼 값 자체에 앞 공백이 포함되도록 수정했습니다.
- 강의 시간은 `월 7-8교시`처럼 같은 요일의 연속 교시를 묶어 표시합니다.
- 강의계획서 / 신청·대기신청·취소 / 장바구니 담기 버튼은 같은 행에서 동일한 폭으로 보이도록 정리했습니다.

## 단순화된 A/B 파일 구조

현재 작업공간의 A/B 테스트 HTML은 아래 두 파일만 유지합니다.

- `hciprojectweb_ab_a.html`: A안, 현재까지의 공통 패치가 반영된 기준 버전
- `hciprojectweb_ab_b.html`: B안, A안을 기반으로 A/B 테스트용 개선 요소를 추가한 실험 버전

삭제된 개별 변수 파일:

- `hciprojectweb_ab_time_a.html` / `hciprojectweb_ab_time_b.html`
- `hciprojectweb_ab_timetable_a.html` / `hciprojectweb_ab_timetable_b.html`
- `hciprojectweb_ab_terms_a.html` / `hciprojectweb_ab_terms_b.html`
- `hciprojectweb_ab_density_a.html` / `hciprojectweb_ab_density_b.html`
- `hciprojectweb_ab_visual_a.html` / `hciprojectweb_ab_visual_b.html`

## A/B 테스트 차이

| 항목 | A안: 현재 패치 기준 | B안: A + 실험 개선 |
| --- | --- | --- |
| 기본 기능 | 최신 공통 패치 전체 반영 | A안과 동일 |
| 시간표 중복 표시 | 붉은 계열 블록 + 상단 경고 메시지 | A안과 동일하되 경고 박스 시각 강조가 더 강함 |
| 검색 안내 | 기본 안내 문구 | 안내 문구 좌측 강조선과 굵기 보강 |
| 강좌 카드 | 현재 패치 기준 카드 여백/크기 | 카드 라운드와 여백을 더 키우고 hover 시 미세 상승 효과 |
| 상태 배지 | 신청 가능/대기/마감 상태 배지 | 상태 배지에 그림자를 추가해 시각 구분 강화 |
| 시간표 제목 | `나의 수강 시간표` | `나의 수강 시간표 · B안 개선형`으로 실험 버전 식별 |

## 사용 방법

프로젝트 루트에서 HTML 파일을 브라우저로 열어 비교하면 됩니다. 모든 HTML은 동일한 `courses.js` 데이터를 사용합니다.

- 메인 작업본: `hciprojectweb.html`
- A안 기준본: `hciprojectweb_ab_a.html`
- B안 실험본: `hciprojectweb_ab_b.html`

권장 비교 흐름:

1. `hciprojectweb_ab_a.html`에서 강좌를 하나 신청합니다.
2. 신청한 강좌와 시간이 겹치는 다른 강좌 카드에 마우스를 올립니다.
3. 시간표의 붉은 중복 블록과 상단 경고 메시지를 확인합니다.
4. 같은 흐름을 `hciprojectweb_ab_b.html`에서 반복해 시각 강조 차이를 비교합니다.
