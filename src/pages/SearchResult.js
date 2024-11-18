import React, { useRef, useState, useEffect } from 'react'
import Header from '../components/Header'
import FooterSub from '../components/sub/FooterSub'
import SubLoadMore from '../components/sub/SubLoadMore'
import searchResultScss from '../styles/SearchResult.module.scss'
import { apiSearchResult } from '../api/instance'

const SearchResult = () => {
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
    {"id": 10770,"name": "TV 영화"}]
  const [searchResult, setSearchResult] = useState([]);
  const name = '더 많은 검색 결과 보기'
  const keyword = '키워드'
  let num = 6450
  num = num.toLocaleString();

  const ulRef = useRef();
  const [orderBy, setOrderBy] = useState(false);

  useEffect (() => {
    const fetchSearchResult = async () => {
        const result = await apiSearchResult('우주');
        console.log();
        setSearchResult(() => (result.data.results))
    };
    fetchSearchResult();
  }, []);
  if(!searchResult.length) return <>Loading...</>;


  console.log(searchResult);


  const onOrderBy = () => {
    setOrderBy(!orderBy);
      if(orderBy){
        ulRef.current.classList.add(searchResultScss.clicked);
      }else{
        ulRef.current.classList.remove(searchResultScss.clicked);
      }
  }

  return (
    <>
        <Header />
        <main className={searchResultScss.searchResultWrap}>
          <section className={searchResultScss.titleWrap}>
            <h2>'{keyword}' 검색 결과</h2>
            <p>총 {num}건</p>
            <div className={searchResultScss.selectBox}>
              <h5>정렬 : </h5>
              <ul ref={ulRef} onClick={onOrderBy}>
                <li>인기순<span></span></li>
                <li>최신순<span></span></li>
                <li>평점순<span></span></li>
                <li>오름차순<span></span></li>
                <li>내림차순<span></span></li>
              </ul>
            </div>
          </section>

          <section className={searchResultScss.searchResult}>
            {searchResult.map((obj) => (
              <div key={obj.id} className={searchResultScss.oneResult}>
                <div className={searchResultScss.imgWrap}>
                  <img src={'https://image.tmdb.org/t/p/w300/' + obj.poster_path} />
                </div>
                <div className={searchResultScss.textWrap}>
                  <h3>{obj.title}</h3>
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
          </section>
          <SubLoadMore name={name}/>
        </main>
        <FooterSub />
    </>
  )
}



export default SearchResult