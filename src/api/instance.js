// https://www.npmjs.com/package/axios
import axios from 'axios';

const api_key = 'f89a6c1f22aca3858a4ae7aef10de967'
const defaultParams = 
    {
        api_key, 
        language:'ko-KR', 
        region:'KR'
    }

let today = new Date();   //월은 0부터 시작
let aWeekAgo = new Date(today);
aWeekAgo.setDate(today.getDate() - 7);
const dateFormat = (date) => {
    let YYYY = date.getFullYear()
    let MM = (date.getMonth()+1) < 10 ? '0'+ (date.getMonth()+1) : (date.getMonth()+1);
    let DD = (date.getDate()+1) < 10 ? '0'+ (date.getDate()) : (date.getDate());
    return `${YYYY}-${MM}-${DD}`
}
let date = [dateFormat(aWeekAgo), dateFormat(today)];

const genres = [
    {"id": 12, "name": "모험"},
    {"id": 14,"name": "판타지"},
    {"id": 16, "name": "애니메이션"},
    {"id": 18,"name": "드라마"},
    {"id": 27,"name": "공포"},
    {"id": 28, "name": "액션"},
    {"id": 35, "name": "코미디"},
    {"id": 36,"name": "역사"},
    {"id": 37,"name": "서부"},
    {"id": 53,"name": "스릴러"},
    {"id": 80,"name": "범죄"},
    {"id": 99,"name": "다큐멘터리"},
    {"id": 878,"name": "SF"},
    {"id": 9648,"name": "미스터리"},
    {"id": 10402,"name": "음악"},
    {"id": 10749,"name": "로맨스"},
    {"id": 10751,"name": "가족"},
    {"id": 10752,"name": "전쟁"},
    {"id": 10770,"name": "TV 영화"},
    {"id": 999999,"name": "2시간 이하 짧은 영화"}
]

let selectedGenres = [28, 878];
let keyword = '검색키워드';
let movieId = 1022789;    

const instance = axios.create({
    // baseURL: process.env.REACT_APP_SERVER_URL,
    baseURL: 'https://api.themoviedb.org/3',
    params: defaultParams    
});

let visual = [
    '/movie/157336?append_to_response=videos',
    '/movie/157336?append_to_response=videos',
    '/movie/157336?append_to_response=videos'
]

let top_rated= [
    '/movie/top_rated?sort_by=popularity.desc&page=1',
    '/movie/top_rated?sort_by=popularity.desc&page=2',
    '/movie/top_rated?sort_by=popularity.desc&page=3',
    '/movie/top_rated?sort_by=popularity.desc&page=4',
    '/movie/top_rated?sort_by=popularity.desc&page=5'
]

export async function apiMain(){
   let [visual1,visual2,visual3, trending, releaseThisWeek, top_rated1, twoHours, sfAction] =  await Promise.all([
        // visual1,visual2,visual3,     
        instance.get('/movie/1022789?append_to_response=videos'),
        instance.get('/movie/508442?append_to_response=videos'),
        instance.get('/movie/533535?append_to_response=videos'),
        instance.get('/trending/movie/week'), 
        instance.get('/discover/movie?sort_by=popularity.desc&with_release_type=2|3|4&release_date.gte=2024-09-05&release_date.lte=2024-09-12&page=1'), 
        instance.get('/movie/top_rated?sort_by=popularity.desc&page=1'),
        instance.get('/discover/movie?sort_by=popularity.desc&with_genres=16|28|35|10751&with_runtime.lte=120&page=1'),
        instance.get('/discover/movie?sort_by=popularity.desc&with_genres=28,878&page=1')
    ])

    return {visual1,visual2,visual3, trending ,releaseThisWeek, top_rated1, twoHours, sfAction};
}

export async function apiSub01(){
    let [releaseThisWeek, nowPlaying] = await Promise.all([
        instance.get('/discover/movie?sort_by=popularity.desc&with_release_type=2|3|4&release_date.gte=2024-09-05&release_date.lte=2024-09-12'),
        instance.get('movie/now_playing?')
    ])
    return {releaseThisWeek, nowPlaying};
}

export async function apiSub02(){
    let [trending, top_rated1,top_rated2,top_rated3,top_rated4,top_rated5] =  await Promise.all([
        instance.get('/trending/movie/week'),
        ...top_rated.map(obj => {
            return instance.get(obj)
        })
    ])
    return {trending, top_rated1,top_rated2,top_rated3,top_rated4,top_rated5};
}

export async function apiSub03(){
    let [genres, twoHours] = await Promise.all([
        instance.get('/discover/movie?sort_by=popularity.desc&with_genres=28,878'),
        instance.get('/discover/movie?sort_by=popularity.desc&with_genres=28,878&with_runtime.lte=120')
    ])
    return {genres, twoHours};
}

export async function apiDetails(movieId){
    let [watchProviders, certification, info, similar] = await Promise.all([
        instance.get(`/movie/${movieId}/watch/providers`),
        instance.get(`/movie/${movieId}/release_dates`),
        instance.get(`/movie/${movieId}?append_to_response=videos,casts`),
        instance.get(`/movie/${movieId}/similar`)
    ])
    return {watchProviders, certification, info, similar};
}

export async function apiSearchResult(keyword){
    console.log(keyword);
    let result = await instance.get(`/discover/movie?&sort_by=populcarity.desc&with_text_query=${keyword}`);
    return result;
}



// Promise.all([axios.get(),axios.get()])
// .then(res=>{
//     [{},{}]
//     res
// })

// let [a,b] = await Promise.all([axios.get(),axios.get()])