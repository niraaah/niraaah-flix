### README.md


# 영화 검색 및 관리 웹 애플리케이션

본 프로젝트는 TMDB API를 활용하여 영화 검색, 관리, 시청 기록 등을 제공하는 웹 애플리케이션입니다. 사용자는 개인 TMDB API 키를 통해 영화 데이터를 검색하고, 찜 목록 관리 및 무한 스크롤링을 활용한 효율적인 탐색을 경험할 수 있습니다.

---

## 📚 프로젝트 기본 정보

- **프로젝트 이름**: 영화 검색 및 관리 웹 애플리케이션
- **주요 기능**:
  - 영화 검색 (키워드, 장르, 언어, 평점, 개봉년도 등)
  - 로그인 및 회원가입 기능
  - 영화 찜하기 및 관리
  - 모달을 통한 상세 영화 정보 제공
  - 무한 스크롤링 및 반응형 UI
- **배포 상태**: 개발 중
- **사용 API**: [TMDB API](https://www.themoviedb.org/documentation/api)

---

## 🛠️ 기술 스택 명시

- **프론트엔드**: React, React Router DOM
- **스타일링**: CSS, Custom Animation, CSS Grid, Flexbox
- **백엔드 (API 사용)**: TMDB API
- **상태 관리**: React State
- **스토리지**: Local Storage
- **추가 라이브러리**:
  - `react-markdown`: 약관 내용 렌더링
  - `react-toastify`: 사용자 알림 (Toast) 처리

---

## 🔧 설치 및 실행 가이드

### 1️⃣ 프로젝트 클론
```bash
git clone <프로젝트 URL>
cd <프로젝트 폴더>
```

### 2️⃣ 패키지 설치

```bash
npm install
```

### 3️⃣ 환경 변수 설정

`.env` 파일을 생성한 후, TMDB API 키를 추가합니다.
```env
REACT_APP_TMDB_API_KEY=당신의_TMDB_API_키
```

### 4️⃣ 프로젝트 실행
```bash
npm start
```
앱은 기본적으로 `http://localhost:3000`에서 실행됩니다.

---

## 🗂️ 프로젝트 구조 설명

```csharp
📦 src
├── 📂 assets              # 이미지 및 정적 파일
│   ├── images/            # 이미지 파일
├── 📂 components          # 재사용 가능한 컴포넌트
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── MovieCard.jsx
│   ├── MovieModal.jsx
│   ├── Toast.jsx
│   └── WishlistCard.jsx
├── 📂 hooks               # 사용자 정의 Hook
│   ├── useFetchMovies.js
│   ├── useLocalStorage.js
│   └── useWishlist.ts
├── 📂 pages               # 주요 페이지
│   ├── Home.jsx
│   ├── MovieDetails.jsx
│   ├── Popular.jsx
│   ├── Search.jsx
│   ├── SignIn.jsx
│   └── Wishlist.jsx
├── 📂 services            # API 호출 및 유틸리티
│   ├── URL.ts             # TMDB API 호출 함수
├── 📂 styles              # 스타일링 파일
│   ├── global.css
│   ├── Home.css
│   ├── SignIn.css
│   └── Toast.css
└── 📂 terms               # 약관 파일
    └── terms.md
```

---

## 🧑‍💻 개발 가이드

### 1️⃣ 코딩 컨벤션

- 변수 및 함수명: 카멜케이스 (`camelCase`)
- 컴포넌트명: 파스칼케이스 (`PascalCase`)
- CSS 클래스명: 케밥케이스 (`kebab-case`)
- 코드 포매팅: ESLint 및 Prettier 준수

### 2️⃣ Git 커밋 메시지 규칙

| 유형       | 설명                          | 예시                              |
|------------|-------------------------------|-----------------------------------|
| `feat`     | 새로운 기능 추가              | feat: 로그인 기능 추가           |
| `fix`      | 버그 수정                    | fix: 영화 검색 필터 오류 수정     |
| `docs`     | 문서 수정                    | docs: README.md 업데이트         |
| `style`    | 스타일 수정 (UI, 포매팅 등)  | style: 로그인 버튼 정렬 수정      |
| `refactor` | 코드 리팩토링                | refactor: 컴포넌트 로직 분리      |
| `test`     | 테스트 추가/수정             | test: 영화 상세 모달 테스트 추가 |

### 3️⃣ 브랜치 전략

- `main`: 배포 가능한 코드
- `develop`: 개발 중인 코드
- `feature/{기능명}`: 새로운 기능 추가 시 생성
- PR(Pull Request)을 통해 `develop`으로 병합

### 4️⃣ PR 템플릿 안내

#### PR 제목

`[유형] 작업 내용 요약`

#### 본문 템플릿

```md
## 작업 내용
- 주요 작업 내용

## 테스트 방법
- 테스트 방법 안내

## 관련 이슈
- #이슈번호
```

---

## 🐞 이슈 등록 방법

1. 이슈 제목은 간결하게 작성 (`[유형] 이슈 제목`)
2. 본문에 작업 내용을 구체적으로 기재
3. 관련 커밋 및 PR 번호 연결

---

## 📄 추가 문서 링크

- [TMDB API 문서](https://www.themoviedb.org/documentation/api)
- [React 공식 문서](https://reactjs.org/docs/getting-started.html)
- [React Router DOM 공식 문서](https://reactrouter.com/en/main)

---

## 📖 변경 이력

| 버전       | 변경 내용                                         | 날짜       |
|------------|--------------------------------------------------|------------|
| `v1.0.0`   | 프로젝트 초기화 및 주요 기능 구현                | 2024-11-20 |

---

## 🔗 관련 프로젝트 링크

- [TMDB API 공식 사이트](https://www.themoviedb.org/)
- [React Toastify](https://fkhadra.github.io/react-toastify/introduction)

---

Happy Coding! 🚀