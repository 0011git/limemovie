![logo](https://github.com/user-attachments/assets/f5124ab8-c308-40b5-a77f-204725a1efc1)

![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white) ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=Vercel&logoColor=white) ![Zustand](https://img.shields.io/badge/Zustand-181717?style=flat-square&logo=redux&logoColor=white) ![Axios](https://img.shields.io/badge/Axios-5A29E6?style=flat-square&logo=axios&logoColor=white) ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=flat-square&logo=Postman&logoColor=white) ![Swiper](https://img.shields.io/badge/Swiper-6332F6?style=flat-square&logo=swiper&logoColor=white) ![SASS](https://img.shields.io/badge/SASS-CC6699?style=flat-square&logo=sass&logoColor=white)

## 🎞LimeMovie
TMDB API를 활용한 영화 정보 사이트 라임무비입니다.

<!-- 썸네일 -->

## 🔗 배포 URL
<!-- url -->


## 📑 요약
### 1. 주제
- 최신, 인기 등 여러 주제에 맞는 영화 정보 제공

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
- 구글링 및 공식 문서 리딩, Postman으로 데이터 분석 후 간단하게 텍스트 파일로 정리, 공유
- 서버 없이도 바로 API 요청이 가능했기 때문에 서버 없이 진행함

### 2. Vercel 배포
- 변동 사항이 실시간으로 반영되는 자동화된 배포 환경을 구축

### 3. Swiper 활용
- Swiper의 스타일을 다양하게 커스텀

### 4. 리팩토링
- 비효율적인 폴더 구조 및 레이아웃 설계, api 함수 개선, 컴포넌트 구조 단순화, 미구현된 기능 완성 등



## 💼 폴더 구조
````
수정필요
📦limemovie
 ┣ 📂build
 ┣ 📂node_modules
 ┣ 📂public
 ┃ ┗  📦assets
 ┃     ┗ 📂icons
 ┣ 📂src
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
<!-- 추가 -->

## 🔨 리팩토링
### 1. 비효율적인 폴더 구조 변경
- ```📂assets```을 ```📂src```에서 ```📂public```로 이동, 불필요한 이미지 파일 삭제
- 미리 생성해둔 불필요한 폴더 삭제

### 2. 기본 레이아웃 추가
- 레이아웃 없이 페이지마다 헤더, 푸터 등을 넣어둔 초기 상태에서 ```layout.js```로 기본 레이아웃 추가

### 3. 컴포넌트 구조 개선
- 불필요한 컴포넌트를 통합 및 삭제
- 특정 페이지에서만 사용하는 컴포넌트는 해당 페이지에 옮겨 단순화시킴
- 이외 타이틀 등 불필요하게 분리시킨 컴포넌트 삭제
- 페이지마다 다른 형태로 마크업했던 로딩 화면을 컴포넌트를 추가해 통합시킴

### 4. 미구현된 기능 추가
- 페이지 별 데이터 누적 기능
- 검색 기능
- 구독용 이메일 주소 입력란에 유효성 검사
- 탑 버튼 추가


### 5. 전역 상태 관리 수정
- 전역 상태 관리를 마치 DB처럼 사용하게 설계해서 모든 api요청과 그 결과값을 ```store.js```에서 하고 있었음
- 전역에서 사용하는 데이터가 아니기 때문에 각 페이지로 api요청과 데이터를 이동시키고 모두 삭제함.
- 전역 상태 관리는 loading상태를 판별하는 변수만 남겨둠



## 💥 트러블 슈팅



## 📚 참고 URL
- 화면 설계 : [LimeMovie Figma](https://www.figma.com/design/SPeB7hXwt0J5eESPgAx3PE/limemovie?node-id=140-2&node-type=frame&t=C90EWvUwdCPBTixC-0)