# 알프스 흑염소

> 직접 운영하는 농장에서 식탁까지, 믿고 먹을 수 있는 흑염소 전문점 랜딩페이지

울산 울주군의 실제 흑염소 전문 식당을 위해 제작한 반응형 웹사이트입니다. 직영 농장에서 기른 100% 국내산 흑염소라는 브랜드의 차별점을 중심으로, 식당 소개부터 메뉴 탐색, 전화 예약, 위치 확인까지 한 페이지에서 자연스럽게 이어지도록 구성했습니다.

## Project Overview

| 항목 | 내용 |
| --- | --- |
| 프로젝트 유형 | 실제 운영 식당 랜딩페이지 |
| 프로젝트 형태 | 개인 프로젝트 |
| 주요 역할 | 기획, 콘텐츠 구성, UI 디자인, 반응형 구현 |
| 주요 사용자 | 가족 모임, 보양식, 단체 식사를 위해 식당을 찾는 고객 |
| 디바이스 | Desktop, Tablet, Mobile |

## Project Goal

- `직영 농장`, `직접 사육`, `100% 국내산`을 핵심 메시지로 전달
- 구이·탕·세트·코스 메뉴를 카테고리별로 쉽게 탐색할 수 있도록 구성
- 식당 예약과 액기스 문의 번호를 명확히 분리
- 브랜드 소개부터 실제 전화 예약과 방문까지 이어지는 사용자 흐름 설계

## Key Features

- React 상태를 활용한 메뉴 카테고리 필터
- 모바일·태블릿 햄버거 내비게이션
- 메뉴 선택 후 모바일 내비게이션 자동 닫힘
- 식당 예약 및 액기스 문의 `tel:` 전화 연결
- 모바일 화면 하단 고정 전화 버튼
- 카카오맵 길찾기 연결
- SVG 브랜드 로고 및 파비콘
- Open Graph 및 X/Twitter 공유 메타데이터
- PC·태블릿·모바일 반응형 레이아웃

## Tech Stack

| Category | Technology |
| --- | --- |
| Framework | Next.js 16 |
| Library | React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS 3, CSS |
| Deployment | Vercel |
| Assets | SVG, PNG |

## Component Structure

화면과 데이터가 한 파일에 집중되지 않도록 역할별 컴포넌트로 분리했습니다. 상태가 필요한 `Header`와 `MenuSection`만 Client Component로 구성하고, 나머지 영역은 Server Component로 유지했습니다.

```text
app
├── globals.css
├── layout.tsx
└── page.tsx

components
├── FloatingCallBar.tsx
├── Footer.tsx
├── Header.tsx
├── Hero.tsx
├── LocationSection.tsx
├── MenuSection.tsx
├── PhoneIcon.tsx
├── ReservationSection.tsx
├── StorySection.tsx
└── TrustSection.tsx

data
└── menu.ts
```

### Component Responsibilities

| Component | 역할 |
| --- | --- |
| `Header` | 반응형 내비게이션과 햄버거 메뉴 상태 관리 |
| `Hero` | 브랜드 핵심 메시지와 주요 CTA 표시 |
| `TrustSection` | 직영 농장과 국내산 원재료의 신뢰 요소 전달 |
| `StorySection` | 브랜드 스토리와 직접 사육 과정 소개 |
| `MenuSection` | 메뉴 카테고리 필터 및 메뉴 목록 렌더링 |
| `ReservationSection` | 식당 예약과 액기스 문의 번호 분리 |
| `LocationSection` | 주소와 카카오맵 길찾기 연결 |
| `Footer` | 브랜드 및 운영 정보와 제작자 크레딧 표시 |
| `FloatingCallBar` | 모바일 하단 전화 CTA 제공 |
| `PhoneIcon` | 전화 아이콘을 공통 컴포넌트로 재사용 |

## Tailwind CSS 3

Tailwind CSS 3.4를 적용하고 브랜드 컬러를 `tailwind.config.ts`에 확장했습니다.

```ts
colors: {
  alps: {
    green: "#17382D",
    lightGreen: "#214B3D",
    gold: "#C69B52",
    cream: "#F4EFE4",
    ivory: "#FBF9F3",
    ink: "#20251F",
  },
}
```

## Local Development

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000`으로 접속합니다.

```bash
npm run build
```

위 명령어로 프로덕션 빌드를 확인할 수 있습니다.

## Designer

**Designed and developed by Giryeong Kim**
