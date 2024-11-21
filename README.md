[![logo](https://github.com/user-attachments/assets/f5124ab8-c308-40b5-a77f-204725a1efc1)](https://limemovie.vercel.app/)

![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white) ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=Vercel&logoColor=white) ![Zustand](https://img.shields.io/badge/Zustand-181717?style=flat-square&logo=redux&logoColor=white) ![Axios](https://img.shields.io/badge/Axios-5A29E6?style=flat-square&logo=axios&logoColor=white) ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=flat-square&logo=Postman&logoColor=white) ![Swiper](https://img.shields.io/badge/Swiper-6332F6?style=flat-square&logo=swiper&logoColor=white) ![SASS](https://img.shields.io/badge/SASS-CC6699?style=flat-square&logo=sass&logoColor=white)

## 🍋 LimeMovie
TMDB API를 활용한 영화 정보 사이트 라임무비입니다.

<!-- 썸네일 -->

## 🔗 배포 URL
<https://limemovie.vercel.app/>


## 📑 요약
### 1. 주제
- 최신, 인기 등 여러 주제에 맞는 영화 정보 제공 사이트

### 2. 목표
- 영화 정보 제공 및 검색 기능

### 3. 핵심 기능
- The Movie Database(TMDB) API로 영화 컨텐츠 제공

### 4. 주요 기술 스택
- React, Vercel, Swiper

### 5. 기간 및 인원
- 2024.09.11 ~ 2024.09.24 (구현)
- 2024.11.18 ~ 2024.11.21 (리팩토링)
- 총 18일, 1인



## 💡 주요 작업
### 1. The Movie Database API 사용
- [The Movie Database(TMDB)](https://developer.themoviedb.org/docs/getting-started) 로 컨텐츠를 제공
- 구글링 및 공식 문서 리딩, Postman으로 데이터 분석 후 간단하게 텍스트 파일로 정리, 반 전체에 공유
- 서버 없이도 CORS 이슈 없이 바로 API 요청이 가능했기 때문에 서버 없이 진행함

### 2. Vercel 배포
- Github과 연동, 변동 사항이 실시간으로 반영되는 자동화된 배포 환경을 구축

### 3. Swiper 활용
- Swiper의 버튼, 페이지네이션 등 스타일 커스터마이징
- 스와이퍼에 스크립트를 추가해 hover 시 해당 아이템이 위로 살짝 올라오는 효과, 이미지를 어둡게 하는 효과 등 커스터마이징

### 4. 리팩토링
- 비효율적인 폴더 구조 개선 및 레이아웃 설계
- API 함수 개선
- 컴포넌트 구조 단순화
- 미구현된 기능 완성 등



## 💼 폴더 구조
````
📦movie
 ┣ 📂build
 ┣ 📂node_modules
 ┣ 📂public
 ┃ ┣ 📂assets   //리팩토링 시 분리
 ┃ ┃ ┗ 📂icons
 ┃ ┣ 📜favicon.ico
 ┃ ┣ 📜index.html
 ┣ 📂src
 ┃ ┣ 📂api
 ┃ ┃ ┗ 📜instance.js // API 함수
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂layout   //리팩토링 시 추가
 ┃ ┃ ┃ ┣ 📜Footer.js
 ┃ ┃ ┃ ┣ 📜Header.js
 ┃ ┃ ┃ ┣ 📜Layout.js
 ┃ ┃ ┃ ┗ 📜TopBtn.js
 ┃ ┃ ┣ 📂slide
 ┃ ┃ ┃ ┗ 📜BasicSlide.js
 ┃ ┃ ┣ 📂sub
 ┃ ┃ ┃ ┣ 📜LoadMoreBtn.js
 ┃ ┃ ┃ ┣ 📜SubBtnWrap.js
 ┃ ┃ ┃ ┗ 📜SubImgWrap.js
 ┃ ┃ ┣ 📜GenreBtn.js
 ┃ ┃ ┗ 📜Loading.js  //리팩토링 시 추가
 ┃ ┣ 📂pages
 ┃ ┣ 📂store
 ┃ ┃ ┗ 📜store.js
 ┃ ┣ 📂styles
 ┃ ┣ 📜App.js
 ┃ ┣ 📜App.test.js
 ┃ ┣ 📜index.js
 ┃ ┣ 📜reportWebVitals.js
 ┃ ┗ 📜setupTests.js
 ┣ 📜.env
 ┣ 📜.gitignore
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜README.md
 ┗ 📜tmdb영화api.txt
````



## 🛠️ 개발 환경  
| 기술              | 기술명            | Badge                                                           |
|:-----------------:|:-----------------:|:-------------------------------------------------------------:|
| **프레임워크**    | React             | ![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white) |
| **배포**          | Vercel            | ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=Vercel&logoColor=white) |
| **상태 관리**     | Zustand           | ![Zustand](https://img.shields.io/badge/Zustand-181717?style=flat-square&logo=redux&logoColor=white) |
| **HTTP 요청**     | Axios             | ![Axios](https://img.shields.io/badge/Axios-5A29E6?style=flat-square&logo=axios&logoColor=white) |
| **API 테스트**    | Postman           | ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=flat-square&logo=Postman&logoColor=white) |
| **UI 라이브러리** | Swiper            | ![Swiper](https://img.shields.io/badge/Swiper-6332F6?style=flat-square&logo=swiper&logoColor=white) |
| **스타일링**      | SASS              | ![SASS](https://img.shields.io/badge/SASS-CC6699?style=flat-square&logo=sass&logoColor=white) |



## 🔍 API 분석
### 1. 공통
### 2. 메인
### 3. 카테고리
### 4. 디테일
### 5. 검색




## 🔨 리팩토링
### 1. 비효율적인 폴더 구조 변경
- ```📂assets``` 폴더 이동 (```📂src```내부에서 ```📂public```로), 불필요한 이미지 파일 삭제
- 미리 생성해둔 불필요한 폴더 다수 삭제

### 2. 기본 레이아웃 추가
- 레이아웃 없이 페이지마다 헤더, 푸터 등을 넣어둔 초기 상태에서 ```layout.js```로 기본 레이아웃 추가

### 3. API 함수 개선
- 페이지 값을 1씩 증가시키며 다음 데이터를 가져올 수 있도록 ```page```**파라미터 추가**
- 배열, 오브젝트로 뒤섞여있던 **데이터 리턴 형태를 오브젝트로 통일**시킴
- 메인 비주얼 슬라이드에 표시하는 영화는 각각의 API URL이 필요한데 이 결과값을 각각의 키를 만들어(```visual1```, ```visual2```, ...) 하나씩 리턴하는 구조였음.
  **이 데이터를 하나의 배열로 묶어**  ```visual``` 키에 **한번에 리턴**하도록 변경
- 처음 받은 초기 상태 그대로의 데이터를 바로 해당 페이지로 리턴 후 해당 페이지에서 가공하던 방식에서, **필요한 데이터만 추출해 해당 페이지로 리턴**하도록 변경

### 3. 컴포넌트 구조 개선
- 불필요한 컴포넌트를 통합 및 삭제
- 특정 페이지에서만 사용하는 컴포넌트는 해당 페이지에 옮겨 단순화
- 이외 타이틀 등 불필요하게 분리시킨 컴포넌트 삭제
- 페이지마다 다른 형태로 마크업했던 로딩 화면을 로딩 컴포넌트를 추가해 일관성있게 개선

### 4. 미구현 기능 추가
- 페이지 별 컨텐츠 누적 표시
- 검색 기능
- 구독용 이메일 주소 입력란에 유효성 검사
- 메인 비디오 팝업 추가
- 탑 버튼 추가

### 5. 전역 상태 관리 수정
- 전역 상태 관리를 마치 DB처럼 사용하도록 설계해서, 모든 페이지별 API요청과 그 결과값을 ```store.js```에 저장하고 있었음
- API 결과값 중 전역에서 사용하는 데이터가 없었기 때문에 불필요한 작업이라고 판단, API요청을 해당 페이지로 이동시킨 후 데이터도 그곳에서 관리하도록 함
- 전역 상태 관리는 loading상태를 판별하는 변수만 남겨둠

### 6. 기타
- 로고를 텍스트→이미지로 변경, ![favicon (1)](https://github.com/user-attachments/assets/06bcc8b0-0b30-459e-9cf4-050f691f8cd1)```favicon```변경
- 검색 버튼 ![Rectangle 24](https://github.com/user-attachments/assets/df2d06d6-d6cc-4604-867b-9752e62fda8a)```#E3FF00``` 테마색으로 변경



## 💥 트러블 슈팅
### 1. 페이지 이동 시 스크롤이 유지되는 현상
- 리액트 특성상 페이지 이동시 화면을 새로고침하지 않기 때문에 발생하는 현상

  **⇒ 해결 방법**: 스크롤을 초기화할 필요가 있는 시점에 ```window.scrollTo({top:0})``` 추가



## 📚 참고 URL
- 화면 설계 : [LimeMovie Figma](https://www.figma.com/design/SPeB7hXwt0J5eESPgAx3PE/limemovie?node-id=140-2&node-type=frame&t=C90EWvUwdCPBTixC-0)
