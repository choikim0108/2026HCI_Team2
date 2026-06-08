# 2026 HCI Team 2 Course Registration Prototype

한림대학교 수강신청 UX 개선을 위한 정적 웹 프로토타입입니다. 최종 선정안은 `hciprojectweb_ab_a.html`이며, B 계열 파일은 비교·발표용 참고 버전으로 유지합니다.

## 최종 실행 파일

| 구분 | 파일 | 용도 |
| --- | --- | --- |
| 최종안 A | `hciprojectweb_ab_a.html` | 최종 선정 버전. 발표와 사용성 검증 기준 파일 |
| B 호환안 | `hciprojectweb_ab_b.html` | B 계열 기본/호환 파일 |
| B1 CREDIT | `hciprojectweb_ab_b_credit.html` | 좌측 대시보드와 원형 학점 표시 비교안 |
| B2 NEON | `hciprojectweb_ab_b_neon.html` | 표형/운영툴형 compact 비교안 |
| B3 CARDS | `hciprojectweb_ab_b_cards.html` | 시간표 우선형 카드 비교안 |

## 남겨둔 핵심 파일

- `courses.js`: 모든 프로토타입이 공유하는 목업 강좌 데이터
- `software_contentit.pdf`: 전공 로드맵 링크 대상
- `prototype_ab_summary.md`: 최종 A와 B 계열 비교 요약
- `.gitignore`: 발표 자료, 백업 zip, 조사 원본 등 레거시 산출물이 Git에 들어가지 않도록 제한

## 최종 A 버전 주요 개선 사항

- 검색 범위(`전체`, `강좌명`, `학과`, `교수`, `코드`)를 명시적으로 안내하고 선택 상태를 강조
- 강좌 카드 hover/search 시 시간표에 신청 가능·중복·이미 신청 상태를 즉시 표시
- 시간표는 1/A교시부터 시작하며 불필요한 상단 빈 행을 제거
- 중복 시간표 경고와 붉은 overlay가 바로 사라지지 않도록 유지 시간을 확보
- 다크모드 전체 색상 대비를 재점검하고 상태 배지/버튼 색상 역할을 분리
- 장바구니 일괄신청은 시작 확인 1회 후 순차 처리되며, 정원 마감 강좌는 추가 확인 없이 대기신청 처리
- 모달은 Enter/Escape 키보드 조작을 지원
- 모바일 시뮬레이션 기능은 최종 범위에서 제외

## 실행 방법

별도 빌드 과정 없이 브라우저에서 HTML 파일을 직접 열면 됩니다.

```bash
# 최종 선정안 실행
open hciprojectweb_ab_a.html
```

Windows 환경에서는 파일 탐색기에서 `hciprojectweb_ab_a.html`을 더블클릭해도 됩니다.

## 기술 구성

- HTML5 / CSS3 / JavaScript
- jQuery 1.11.0
- 정적 목업 데이터: `courses.js`
- 외부 서버/API 연동 없음

## 정리 기준

이 저장소는 최종 프로토타입 실행과 비교 검증에 필요한 파일만 유지합니다. 발표 원본, 백업 압축파일, 설문 원본, 임시 문서, 이전 메인 HTML 등 레거시 산출물은 저장소에서 제외했습니다.
