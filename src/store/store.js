//store에는 요청으로 받은 데이터를 저장, api에서는 요청
import axios from 'axios';
import { create } from 'zustand';
import React from 'react'
import { apiMain, apiSub01, apiSub02, apiSub03, apiDetails, apiSearchResult } from '../api/instance';
         //instance에 저장

const store = create((set)=>({
    loading: true,

    mainData: {},
    apiMain: async () => {
        await fetchData(apiMain, 'mainData', set)
    },

    sub01Data: {},
    apiSub01: async () => {
         await fetchData(apiSub01, 'sub01Data', set)
    },

    sub02Data: {},
    apiSub02: async () => {
         await fetchData(apiSub02, 'sub02Data', set)
    },

    sub03Data: {},
    apiSub03: async () => {
         await fetchData(apiSub03, 'sub03Data', set)
    },

    detailsData: {},
    apiDetails: async () => {
         await fetchData(apiDetails, 'detailsData', set)
    },

    searchResultData: {},
    apiSearchResult: async () => {
         await fetchData(apiSearchResult, 'searchResultData', set)
    }
}))

async function fetchData (instance, storedData, set) {
   set({loading:true})
   let res = await instance();
   
   set(() => {
      let data = {};
      for(let key in res){
         data[key] = res[key];
      }
      return { [storedData]: data, loading: false }
   })
}



// 메인비주얼: id 사진 타이틀 줄거리 동영상
// https://api.themoviedb.org/3/movie/157336?api_key=f89a6c1f22aca3858a4ae7aef10de967&language=ko-kr&region=KR&append_to_response=videos
// 1022789
// 508442
// 533535

// 메인하단슬라이드: id 사진
//     카테고리에서 5개 선정, 주소 뒤에 &page=1 붙이기

// 카테고리: id 사진 카테고리별정보(true|false로)
//     1. 상영중
//     <날짜 조정 필요함>
//     이번 주 새로 개봉한 영화(영화관)
//     https://api.themoviedb.org/3/discover/movie?api_key=f89a6c1f22aca3858a4ae7aef10de967&language=ko-KR&region=KR&sort_by=popularity.desc&with_release_type=2|3&release_date.gte=2024-09-05&release_date.lte=2024-09-12

//     이번 주 새로 개봉한 영화(디지털)
//     https://api.themoviedb.org/3/discover/movie?api_key=f89a6c1f22aca3858a4ae7aef10de967&language=ko-KR&region=KR&sort_by=popularity.desc&with_release_type=4&release_date.gte=2024-09-05&release_date.lte=2024-09-12

//     이번 주 새로 개봉한 영화(영화관+디지털)
//     https://api.themoviedb.org/3/discover/movie?api_key=f89a6c1f22aca3858a4ae7aef10de967&language=ko-KR&&region=KR&sort_by=popularity.desc&with_release_type=2|3|4&release_date.gte=2024-09-05&release_date.lte=2024-09-12

//     상영 중인 영화(영화관) now_playing
//     https://api.themoviedb.org/3/movie/now_playing?api_key=f89a6c1f22aca3858a4ae7aef10de967&language=ko-KR&region=KR





//     2. 인기
//     지금 뜨는 콘텐츠(이번주) : trending/movie/week
//     https://api.themoviedb.org/3/trending/movie/week?api_key=f89a6c1f22aca3858a4ae7aef10de967&language=ko-KR&region=KR

//     TOP 100 : 평점 높은 순(vote_average), popularity.desc 정렬, page=1~5까지
//     https://api.themoviedb.org/3/movie/top_rated?api_key=f89a6c1f22aca3858a4ae7aef10de967&language=ko-KR&region=KR&sort_by=popularity.desc&page=1
//     https://api.themoviedb.org/3/movie/top_rated?api_key=f89a6c1f22aca3858a4ae7aef10de967&language=ko-KR&region=KR&sort_by=popularity.desc&page=2
//     https://api.themoviedb.org/3/movie/top_rated?api_key=f89a6c1f22aca3858a4ae7aef10de967&language=ko-KR&region=KR&sort_by=popularity.desc&page=3
//     https://api.themoviedb.org/3/movie/top_rated?api_key=f89a6c1f22aca3858a4ae7aef10de967&language=ko-KR&region=KR&sort_by=popularity.desc&page=4
//     https://api.themoviedb.org/3/movie/top_rated?api_key=f89a6c1f22aca3858a4ae7aef10de967&language=ko-KR&region=KR&sort_by=popularity.desc&page=5


//     3. 장르(중복검색가능)
//     https://api.themoviedb.org/3/discover/movie?api_key=f89a6c1f22aca3858a4ae7aef10de967&language=ko-KR&region=KR&sort_by=popularity.desc&with_genres=28,878

//     2시간이하
//     https://api.themoviedb.org/3/discover/movie?api_key=f89a6c1f22aca3858a4ae7aef10de967&language=ko-KR&region=KR&sort_by=popularity.desc&with_runtime.lte=120&with_genres=16,28


// 검색: id 사진 타이틀 개봉연도 평점(vote_average) 장르2개 줄거리
// https://api.themoviedb.org/3/discover/movie?api_key=f89a6c1f22aca3858a4ae7aef10de967&language=ko-KR&region=KR&sort_by=popularity.desc&with_text_query=노래


// 디테일페이지(id필요): id 사진 타이틀 개봉연도 나이제한 시간 장르1개 줄거리 주연 
//             / 시청플랫폼 장르모두 평점 개봉연월일 출연 동영상 유사콘텐츠

//     시청플랫폼(지역KR)
//     https://api.themoviedb.org/3/movie/157336/watch/providers?api_key=f89a6c1f22aca3858a4ae7aef10de967&language=ko-KR

//     나이제한(지역KR - certification)
//     https://api.themoviedb.org/3/movie/157336/release_dates?api_key=f89a6c1f22aca3858a4ae7aef10de967&language=ko-KR&region=KR

//     나머지
//     https://api.themoviedb.org/3/movie/157336?api_key=f89a6c1f22aca3858a4ae7aef10de967&language=ko-kr&region=KR&append_to_response=videos,casts




export default store