[![logo](https://github.com/user-attachments/assets/f5124ab8-c308-40b5-a77f-204725a1efc1)](https://limemovie.vercel.app/)

![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white) ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=Vercel&logoColor=white) ![Swiper](https://img.shields.io/badge/Swiper-6332F6?style=flat-square&logo=swiper&logoColor=white) ![Zustand](https://img.shields.io/badge/Zustand-181717?style=flat-square&logo=redux&logoColor=white) ![Axios](https://img.shields.io/badge/Axios-5A29E6?style=flat-square&logo=axios&logoColor=white) ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=flat-square&logo=Postman&logoColor=white) ![SASS](https://img.shields.io/badge/SASS-CC6699?style=flat-square&logo=sass&logoColor=white)

## 🍋 LimeMovie
TMDB API를 활용한 영화 정보 사이트 **라임무비**입니다.

![limemovie_thumbnail_gif (1)](https://github.com/user-attachments/assets/03c52cca-54a4-4082-90db-2f296e52e611)


## 🔗 배포 URL
<https://limemovie.vercel.app/>


## 📑 요약
### 1. 주제
- 최신, 인기 등 여러 주제에 맞는 영화 정보 제공 사이트 (PC)

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
- 공식 가이드 문서, TMDB Support, Postman 등을 참고 및 활용
- 컨텐츠 제작에 필요한 API URL, 쿼리 등을 ```tmdb영화api.txt```로 정리
- 수업 시간에 같은 반 학생들이 모두 동일한 API를 사용해서 프로젝트를 진행했기 때문에 공유하면 도움이 될거라는 판단 하에 반 전체에 공유 

<details>
  <summary>$\bf{\rm{\color{#0969DA}tmdb영화api.txt\ 전문}}$</summary>

  
인터스텔라id:157336

필수쿼리=api키


무조건 넣을 쿼리

1)지역

&region=KR

2)언어

&language=ko-kr

사진주소

https://<k>image.tmdb.org/t/p/original/

https://<k>image.tmdb.org/t/p/w300/

---

메인비주얼: id 사진 타이틀 줄거리 동영상

https://<k>api.themoviedb.org/3/movie/157336?api_key=f89a6c1f22aca3858a4ae7aef10de967&language=ko-kr&region=KR&append_to_response=videos



메인하단슬라이드: 주소 뒤에 &page=1 붙이기




카테고리: id 사진 카테고리별정보(true|false로)

1. 상영중

<날짜 조정 필요함>

이번 주 새로 개봉한 영화(영화관)

https://<k>api.themoviedb.org/3/discover/movie?api_key=f89a6c1f22aca3858a4ae7aef10de967&language=ko-KR&region=KR&sort_by=popularity.desc&with_release_type=2|3&release_date.gte=2024-09-05&release_date.lte=2024-09-12

이번 주 새로 개봉한 영화(디지털)

https://<k>api.themoviedb.org/3/discover/movie?api_key=f89a6c1f22aca3858a4ae7aef10de967&language=ko-KR&region=KR&sort_by=popularity.desc&with_release_type=4&release_date.gte=2024-09-05&release_date.lte=2024-09-12

이번 주 새로 개봉한 영화(영화관+디지털)

https://<k>api.themoviedb.org/3/discover/movie?api_key=f89a6c1f22aca3858a4ae7aef10de967&language=ko-KR&&region=KR&sort_by=popularity.desc&with_release_type=2|3|4&release_date.gte=2024-09-05&release_date.lte=2024-09-12

상영 중인 영화(영화관) now_playing

https://<k>api.themoviedb.org/3/movie/now_playing?api_key=f89a6c1f22aca3858a4ae7aef10de967&language=ko-KR&region=KR





2. 인기

지금 뜨는 콘텐츠(이번주) : trending/movie/week

https://<k>api.themoviedb.org/3/trending/movie/week?api_key=f89a6c1f22aca3858a4ae7aef10de967&language=ko-KR&region=KR

TOP 100 : 평점 높은 순(vote_average), popularity.desc 정렬, page=1~5까지

https://<k>api.themoviedb.org/3/movie/top_rated?api_key=f89a6c1f22aca3858a4ae7aef10de967&language=ko-KR&region=KR&sort_by=popularity.desc&page=1

https://<k>api.themoviedb.org/3/movie/top_rated?api_key=f89a6c1f22aca3858a4ae7aef10de967&language=ko-KR&region=KR&sort_by=popularity.desc&page=2

https://<k>api.themoviedb.org/3/movie/top_rated?api_key=f89a6c1f22aca3858a4ae7aef10de967&language=ko-KR&region=KR&sort_by=popularity.desc&page=3

https://<k>api.themoviedb.org/3/movie/top_rated?api_key=f89a6c1f22aca3858a4ae7aef10de967&language=ko-KR&region=KR&sort_by=popularity.desc&page=4

https://<k>api.themoviedb.org/3/movie/top_rated?api_key=f89a6c1f22aca3858a4ae7aef10de967&language=ko-KR&region=KR&sort_by=popularity.desc&page=5



3. 장르(중복검색가능)
   
https://<k>api.themoviedb.org/3/discover/movie?api_key=f89a6c1f22aca3858a4ae7aef10de967&language=ko-KR&region=KR&sort_by=popularity.desc&with_genres=28,878

2시간이하

https://<k>api.themoviedb.org/3/discover/movie?api_key=f89a6c1f22aca3858a4ae7aef10de967&language=ko-KR&region=KR&sort_by=popularity.desc&with_runtime.lte=120&with_genres=16,28


검색: id 사진 타이틀 개봉연도 평점(vote_average) 장르2개 줄거리

https://<k>api.themoviedb.org/3/discover/movie?api_key=f89a6c1f22aca3858a4ae7aef10de967&language=ko-KR&region=KR&sort_by=popularity.desc&with_text_query=노래


디테일페이지(id필요): id 사진 타이틀 개봉연도 나이제한 시간 장르1개 줄거리 주연 시청플랫폼 장르모두 평점 개봉연월일 출연 동영상 유사콘텐츠

시청플랫폼(지역KR)

https://<k>api.themoviedb.org/3/movie/157336/watch/providers?api_key=f89a6c1f22aca3858a4ae7aef10de967&language=ko-KR

나이제한(지역KR - certification)

https://<k>api.themoviedb.org/3/movie/157336/release_dates?api_key=f89a6c1f22aca3858a4ae7aef10de967&language=ko-KR&region=KR

나머지

https://<k>api.themoviedb.org/3/movie/157336?api_key=f89a6c1f22aca3858a4ae7aef10de967&language=ko-kr&region=KR&append_to_response=videos,casts


---

0. 메인 비주얼

내가 좋아하는 영화 넣기?
or
트랜드 랜덤 컨텐츠 뽑아서 넣기?

영화 아이디 배열에 저장

트렌딩(week)

https://<k>api.themoviedb.org/3/trending/movie/week?api_key=f89a6c1f22aca3858a4ae7aef10de967&language=ko-KR&region=KR

각각 4.상세 페이지 - 상세정보 가져와서 이름, 줄거리 3줄, 이미지, 비디오 뿌리기

https://<k>api.themoviedb.org/3/movie/157336?api_key=f89a6c1f22aca3858a4ae7aef10de967&language=ko-kr&region=KR&append_to_response=videos,images






1. 상영중

<날짜 조정 필요함>

이번 주 새로 개봉한 영화(영화관)

https://<k>api.themoviedb.org/3/discover/movie?api_key=f89a6c1f22aca3858a4ae7aef10de967&language=ko-KR&region=KR&sort_by=popularity.desc&with_release_type=2|3&release_date.gte=2024-09-05&release_date.lte=2024-09-12

이번 주 새로 개봉한 영화(디지털)

https://<k>api.themoviedb.org/3/discover/movie?api_key=f89a6c1f22aca3858a4ae7aef10de967&language=ko-KR&&region=KR&sort_by=popularity.desc&with_release_type=4&release_date.gte=2024-09-05&release_date.lte=2024-09-12

이번 주 새로 개봉한 영화(영화관+디지털)

https://<k>api.themoviedb.org/3/discover/movie?api_key=f89a6c1f22aca3858a4ae7aef10de967&language=ko-KR&&region=KR&sort_by=popularity.desc&with_release_type=2|3|4&release_date.gte=2024-09-05&release_date.lte=2024-09-12

상영 중인 영화(영화관) now_playing

https://<k>api.themoviedb.org/3/movie/now_playing?api_key=f89a6c1f22aca3858a4ae7aef10de967&language=ko-KR&region=KR





2. 인기

지금 뜨는 콘텐츠(이번주) : trending/movie/week

https://<k>api.themoviedb.org/3/trending/movie/week?api_key=f89a6c1f22aca3858a4ae7aef10de967&language=ko-KR&region=KR


TOP 100 : 평점 높은 순(vote_average) page=1~5까지

https://<k>api.themoviedb.org/3/movie/top_rated?language=ko-KR&region=KR&api_key=f89a6c1f22aca3858a4ae7aef10de967&page=1

https://<k>api.themoviedb.org/3/movie/top_rated?language=ko-KR&region=KR&api_key=f89a6c1f22aca3858a4ae7aef10de967&page=2

https://<k>api.themoviedb.org/3/movie/top_rated?language=ko-KR&region=KR&api_key=f89a6c1f22aca3858a4ae7aef10de967&page=3

https://<k>api.themoviedb.org/3/movie/top_rated?language=ko-KR&region=KR&api_key=f89a6c1f22aca3858a4ae7aef10de967&page=4

https://<k>api.themoviedb.org/3/movie/top_rated?language=ko-KR&region=KR&api_key=f89a6c1f22aca3858a4ae7aef10de967&page=5



TOP 100(사용x) : popularity순서로 page=1~5까지

https://<k>api.themoviedb.org/3/discover/movie?api_key=f89a6c1f22aca3858a4ae7aef10de967&sort_by=popularity.desc&with_genres=28&language=ko-KR&region=KR&page=1

https://<k>api.themoviedb.org/3/discover/movie?api_key=f89a6c1f22aca3858a4ae7aef10de967&sort_by=popularity.desc&with_genres=28&language=ko-KR&region=KR&page=2

https://<k>api.themoviedb.org/3/discover/movie?api_key=f89a6c1f22aca3858a4ae7aef10de967&sort_by=popularity.desc&with_genres=28&language=ko-KR&region=KR&page=3

https://<k>api.themoviedb.org/3/discover/movie?api_key=f89a6c1f22aca3858a4ae7aef10de967&sort_by=popularity.desc&with_genres=28&language=ko-KR&region=KR&page=4

https://<k>api.themoviedb.org/3/discover/movie?api_key=f89a6c1f22aca3858a4ae7aef10de967&sort_by=popularity.desc&with_genres=28&language=ko-KR&region=KR&page=5





3. 장르 (검색 시 기본 popularity 내림차순 정렬값 주는 것 같음)
장르 종류 가져오기(하단 참조)
https://<k>api.themoviedb.org/3/genre/movie/list?language=ko-KR&api_key=f89a6c1f22aca3858a4ae7aef10de967

장르 검색(and) (or검색도 있는데 필요 없을 것 같아서 제외)
&with_genres=16,28
https://<k>api.themoviedb.org/3/discover/movie?api_key=f89a6c1f22aca3858a4ae7aef10de967&language=ko-KR&region=KR&sort_by=popularity.desc&with_genres=16,28


2시간 이하 &with_runtime.lte=120
https://<k>api.themoviedb.org/3/discover/movie?api_key=f89a6c1f22aca3858a4ae7aef10de967&with_runtime.lte=120&language=ko-KR&region=KR&sort_by=popularity.desc

https://<k>api.themoviedb.org/3/discover/movie?api_key=f89a6c1f22aca3858a4ae7aef10de967&language=ko-KR&region=KR&sort_by=popularity.desc&keywords=%EC%95%84%EB%B0%94%ED%83%80







4. 상세 페이지 : id필요

상세정보
https://<k>api.themoviedb.org/3/movie/157336?api_key=f89a6c1f22aca3858a4ae7aef10de967&append_to_response=videos,images,casts

시청 가능한 플랫폼(지역KR)
https://<k>api.themoviedb.org/3/movie/157336/watch/providers?api_key=f89a6c1f22aca3858a4ae7aef10de967&language=ko-KR

유사영화목록 : 포스터, 제목만 사용
https://<k>api.themoviedb.org/3/movie/157336/similar ?api_key=f89a6c1f22aca3858a4ae7aef10de967&language=ko-KR&region=KR

나이제한(지역KR) 
https://<k>api.themoviedb.org/3/certification/movie/list?language=ko-KR&region=KR&api_key=f89a6c1f22aca3858a4ae7aef10de967
https://<k>api.themoviedb.org/3/movie/157336/release_dates?language=ko-KR&region=KR&api_key=f89a6c1f22aca3858a4ae7aef10de967




5. 검색 query=아바타(popularity 내림차순 정렬된 자료로 줌)

https://<k>api.themoviedb.org/3/discover/movie?api_key=f89a6c1f22aca3858a4ae7aef10de967&language=ko-KR&region=KR&sort_by=popularity.desc&with_text_query=캔디&with_runtime.gte=0

타이틀, 개봉연도, 시간, 장르, 줄거리
https://<k>api.themoviedb.org/3/search/movie?query=아바타&api_key=f89a6c1f22aca3858a4ae7aef10de967&language=ko-KR&region=KR

나이제한(지역KR)
https://<k>api.themoviedb.org/3/movie/157336/release_dates?language=ko-KR&region=KR&api_key=f89a6c1f22aca3858a4ae7aef10de967


---

트렌딩 trending/movie/
오늘 day
https://<k>api.themoviedb.org/3/trending/movie/day?api_key=f89a6c1f22aca3858a4ae7aef10de967language=ko-KR&region=KR
이번주 week
https://<k>api.themoviedb.org/3/trending/movie/week?api_key=f89a6c1f22aca3858a4ae7aef10de967language=ko-KR&region=KR

---

발견discover (검색search와 다름)

https://<k>api.themoviedb.org/3/discover/movie?

&with_text_query=christmas 검색키워드


이번주 개봉한 영화(discover만 적용되는 것 같음)

종료일 &release_date.lte=2024-09-12

시작일 &release_date.gte=2024-09-06

영화관

&with_release_type=2|3



영화관+디지털

&with_release_type=2|3|4


개봉형태(discover만 적용되는 것 같음)

1 Premiere

2 Theatrical (limited)

3 Theatrical

4 Digital

5 Physical

6 TV



정렬(discover만 적용되는 것 같음)

&sort_by=popularity.desc

최신순	    release_date.desc

인기순	    popularity.desc

오름차순	title.asc

내림차순	title.desc


2시간 이하 (discover만 적용되는 것 같음)

&with_runtime.lte=120

장르 검색(and) (discover만 적용되는 것 같음)

&with_genres=16,28


나이 제한(개봉일 데이터 certification에 있음)

https://<k>api.themoviedb.org/3/movie/${movieId}/release_dates

[All, 12, 15, 19, 제한상영가] = [0, 1, 2, 3, 4]


장르 종류

"genres" = [
        {"id": 12, "name": "모험"},
        {"id": 14, "name": "판타지"},
        {"id": 16, "name": "애니메이션"},
        {"id": 18, "name": "드라마"},
        {"id": 27, "name": "공포"},

        {"id": 28, "name": "액션"},
        {"id": 35, "name": "코미디"},
        {"id": 36, "name": "역사"},
        {"id": 37, "name": "서부"}
        {"id": 53, "name": "스릴러"},
        
        {"id": 80, "name": "범죄"},
        {"id": 99, "name": "다큐멘터리"},
        {"id": 878, "name": "SF"},
        {"id": 9648, "name": "미스터리"},
        {"id": 10402, "name": "음악"},
        
        {"id": 10749, "name": "로맨스"},
        {"id": 10751, "name": "가족"},
        {"id": 10752, "name": "전쟁"},
        {"id": 10770, "name": "TV 영화"},
    ]

</details>




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
