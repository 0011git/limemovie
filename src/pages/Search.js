import React, { useState, useEffect } from 'react'
import searchStyle from '../styles/search.module.scss'
import { apiSearch } from '../api/instance'
import LoadMoreBtn from '../components/sub/LoadMoreBtn'
import { useLocation } from 'react-router-dom';
import store from '../store/store'
import Loading from '../components/Loading';
import { useNavigate } from 'react-router-dom';

const Search = () => {
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
    {"id": 10770,"name": "TV 영화"}
  ]
  const { loading, setLoading } = store();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const keyword = queryParams.get('keyword');
  let prevKeyword = '';
  const [searchResult, setSearchResult] = useState([]);
  const [page, setPage] = useState(1);
  const navi = useNavigate();

  useEffect (() => {
    const fetchSearchResult = async () => {
        const result = await apiSearch(keyword, page);
        setSearchResult((prev) => [...prev, ...result.search])
        setLoading(false)
    };
    fetchSearchResult();
  }, [page]);

  useEffect(() => {
    const fetchSearchResult = async () => {
      window.scrollTo({top:0})
      setPage(1);
      const result = await apiSearch(keyword, page);
      console.log(result.search);
      setSearchResult(() => [...result.search])
      prevKeyword = keyword;
    }
    if(prevKeyword !== keyword) fetchSearchResult();
  }, [keyword])


  console.log(searchResult);
  if(loading) return <Loading />


  return (
    <section className={searchStyle.searchResultWrap}>
      <div className={searchStyle.titleWrap}>
        <h2>'{keyword}' 검색 결과</h2>
        {searchResult.length < 20 ? <p>총 {searchResult.length} 건</p> : <p>총 20+ 건</p>}       
      </div>

      <div className={searchStyle.searchResult}>
        {searchResult.map((obj) => (
          <div key={obj.id} className={searchStyle.oneResult}>
            <div className={searchStyle.imgWrap} onClick={() => navi('/details', {state: obj.id}) }>
              <img src={'https://image.tmdb.org/t/p/w300/' + obj.poster_path} alt={`${obj.title} 포스터`} />
            </div>
            <div className={searchStyle.textWrap}>
              <h3 onClick={() => navi('/details', {state: obj.id}) }>{obj.title}</h3>
              <ul>
                <li>
                  {
                    obj.genre_ids.map((genre_id) => (
                        ((genres.find((genre) => genre.id===genre_id)).name)
                    )).slice(0,2).join(', ')
                  }
                </li>
                <li>{obj.release_date.slice(0,4)}</li>
                <li>{obj.vote_average.toFixed(2)}점</li>
              </ul>
              <p>{obj.overview}</p>
            </div>
          </div>
        ))}
      </div>
      <LoadMoreBtn page={page} setPage={setPage} />
    </section>
  )
}



export default Search