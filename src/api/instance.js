// api요청시 CORS이슈x, 서버 없이 진행
// https://www.npmjs.com/package/axios
import axios from 'axios';
// process.env.REACT_APP_SERVER_URL,
const api_key = 'f89a6c1f22aca3858a4ae7aef10de967'
// const api_key = process.env.REACT_APP_API_API_KEY;
const defaultParams = 
    {
        api_key, 
        language:'ko-KR', 
        region:'KR'
    }

let today = new Date();   //월은 0부터 시작
let aWeekAgo = new Date(today);
aWeekAgo.setDate(today.getDate() - 7);
// const dateFormat = (date) => {
//     let YYYY = date.getFullYear()
//     let MM = (date.getMonth()+1) < 10 ? '0'+ (date.getMonth()+1) : (date.getMonth()+1);
//     let DD = (date.getDate()+1) < 10 ? '0'+ (date.getDate()) : (date.getDate());
//     return `${YYYY}-${MM}-${DD}`
// }
// let date = [dateFormat(aWeekAgo), dateFormat(today)];

// const genres = [
//     {"id": 12, "name": "모험"},
//     {"id": 14,"name": "판타지"},
//     {"id": 16, "name": "애니메이션"},
//     {"id": 18,"name": "드라마"},
//     {"id": 27,"name": "공포"},
//     {"id": 28, "name": "액션"},
//     {"id": 35, "name": "코미디"},
//     {"id": 36,"name": "역사"},
//     {"id": 37,"name": "서부"},
//     {"id": 53,"name": "스릴러"},
//     {"id": 80,"name": "범죄"},
//     {"id": 99,"name": "다큐멘터리"},
//     {"id": 878,"name": "SF"},
//     {"id": 9648,"name": "미스터리"},
//     {"id": 10402,"name": "음악"},
//     {"id": 10749,"name": "로맨스"},
//     {"id": 10751,"name": "가족"},
//     {"id": 10752,"name": "전쟁"},
//     {"id": 10770,"name": "TV 영화"},
//     {"id": 999999,"name": "2시간 이하 짧은 영화"}
// ]
// const chooseTwoRandomGenres = () => {
//     const ranidx1 = Math.floor(Math.random() * genres.length);
//     let ranidx2;
//     do {
//         ranidx2 = Math.floor(Math.random() * genres.length);
//     }while(ranidx2 === ranidx1)
//     return [genres[ranidx1].id, genres[ranidx2].id]
// }

// let selectedGenres = chooseTwoRandomGenres();

let visualId = [1241982, 1184918, 402431, 533535, 1022789, 917496, 508442, 335983];    

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    // baseURL: process.env.REACT_APP_API_BASE_URL,
    params: defaultParams    
});

export async function apiMain(){
   let [visual1,visual2,visual3, visual4, visual5, visual6, visual7, trending, releaseThisWeek, top_rated, twoHours, sfAction] =  await Promise.all([
        // visual1,visual2,visual3,     
        instance.get(`/movie/${visualId[0]}?append_to_response=videos`),
        instance.get(`/movie/${visualId[1]}?append_to_response=videos`),
        instance.get(`/movie/${visualId[2]}?append_to_response=videos`),
        instance.get(`/movie/${visualId[3]}?append_to_response=videos`),
        instance.get(`/movie/${visualId[4]}?append_to_response=videos`),
        instance.get(`/movie/${visualId[5]}?append_to_response=videos`),
        instance.get(`/movie/${visualId[6]}?append_to_response=videos`),
        instance.get('/trending/movie/week'), 
        instance.get('/discover/movie?sort_by=popularity.desc&with_release_type=2|3|4&release_date.gte=2024-09-05&release_date.lte=2024-09-12&page=1'), 
        instance.get('/movie/top_rated?sort_by=popularity.desc&page=1'),
        instance.get('/discover/movie?sort_by=popularity.desc&with_genres=16|28|35|10751&with_runtime.lte=120&page=1'),
        instance.get('/discover/movie?sort_by=popularity.desc&with_genres=28,878&page=1')
    ])

    return {
        visual: [visual1.data,visual2.data,visual3.data, visual4.data, visual5.data, visual6.data, visual7.data],
        trending: trending.data.results,
        releaseThisWeek: releaseThisWeek.data.results,
        top_rated: top_rated.data.results,
        twoHours: twoHours.data.results,
        sfAction: sfAction.data.results
      };
}

export async function apiSub01(page){
    let [releaseThisWeek, nowPlaying] = await Promise.all([
        instance.get(`/discover/movie?sort_by=popularity.desc&with_release_type=2|3|4&release_date.gte=2024-09-05&release_date.lte=2024-09-12&page=${page}`),
        instance.get(`movie/now_playing?page=${page}`)
    ])
    return {
        releaseThisWeek: releaseThisWeek.data.results, 
        nowPlaying: nowPlaying.data.results
    };
}

export async function apiSub02(page){
    let [trending, topRated] =  await Promise.all([
        instance.get(`/trending/movie/week?page=${page}`),
        instance.get(`/movie/top_rated?sort_by=popularity.desc&page=${page}`),

    ])
    return {
        trending: trending.data.results, 
        topRated: topRated.data.results
    };
}

export async function apiSub03(genreID, page){
    let [genres, twoHours] = await Promise.all([
        instance.get(`/discover/movie?sort_by=popularity.desc${genreID !== 999999 ? `&with_genres=${genreID}` : ''}&page=${page}`),
        instance.get(`/discover/movie?sort_by=popularity.desc${genreID !== 999999 ? `&with_genres=${genreID}` : ''}&page=${page}&with_runtime.lte=120`)
    ])
    return {
        genres: genres.data.results, 
        twoHours: twoHours.data.results
    };
}

export async function apiDetails(movieId){
    let [watchProviders, certification, info, similar] = await Promise.all([
        instance.get(`/movie/${movieId}/watch/providers`),
        instance.get(`/movie/${movieId}/release_dates`),
        instance.get(`/movie/${movieId}?append_to_response=videos,casts`),
        instance.get(`/movie/${movieId}/similar`)
    ])
    return {
        watchProviders: watchProviders.data.results.KR, 
        certification: ( (certification.data.results).find(item => item.iso_3166_1 === 'KR') ? (certification.data.results).find(item => item.iso_3166_1 === 'KR').release_dates[0].certification : null  ),
        info: info.data, 
        similar:similar.data.results
    };
}

export async function apiSearch(keyword, page){
    let search = await instance.get(`/discover/movie?&sort_by=populcarity.desc&with_text_query=${keyword}&page=${page}`);
    return {
        search: search.data.results
    };
}