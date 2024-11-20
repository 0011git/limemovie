import React, { useEffect, useState } from 'react'
import subStyle from '../styles/sub.module.scss'
import SubImgWrap from '../components/sub/SubImgWrap'
import LoadMoreBtn from '../components/sub/LoadMoreBtn'
import store from '../store/store'
import GenreBtn from '../components/GenreBtn'
import { apiSub01 } from '../api/instance'
import Loading from '../components/Loading'

const Sub01 = () => {
  const btnNameArr = ['이번 주에 개봉한 영화', '영화관에서 지금 상영 중인 영화'];
  const { loading, setLoading } = store();

  // 데이터 저장용
  const [releaseThisWeekData, setReleaseThisWeekData] = useState([]);
  const [nowPlayingData, setNowPlayingData] = useState([]);
  // 페이지++
  const [page, setPage] = useState(1);

  // btnNameArr버튼들 온오프용 변수들
  const initialArr = Array(btnNameArr.length).fill(false);
  const [isActive, setIsActive] = useState(initialArr);
  // 선택한 버튼의 인덱스(기본값0)
  const [category, setCategory] = useState(0);

  useEffect(() => {
    const fetchData = async() => {
      const res = await apiSub01(page);
      setLoading(false)
      return res;
    }
    isActive[category] = true;
    fetchData().then(res => {
      setReleaseThisWeekData( prev => ([...prev, ...res.releaseThisWeek]) )
      setNowPlayingData( prev => ([...prev, ...res.nowPlaying]) )
    }) 
  }, [page]);

  
  if(loading) return <Loading />;
  
  const chooseGenres = (e) => {    
    let state = [...isActive]
    const selectedGenres = e.target.innerText
    const selectedIdx = btnNameArr.indexOf(selectedGenres)
    
    if (selectedIdx !== -1) {
        // 해당 버튼 활성화
        state = state.map((item) => item = false) // 모든 버튼 비활성화
        state[selectedIdx] = true;  // 클릭한 버튼 인덱스만 활성화
        setIsActive(state);

        setCategory(selectedIdx)
    }
  }

 
  return (
    <section className={subStyle.subWrap}>
      <h2 className={subStyle.title}>최신 콘텐츠</h2>
      
      <ul className={subStyle.tabWrap}>
        {
          btnNameArr.map((name, idx) => (
            <li onClick={chooseGenres} key={idx} style={{margin:'0 12px 12px 0'}}>
                <GenreBtn name={name} isActive={isActive[idx]} />
            </li>
          ))
        }
      </ul>
      
      { 
        category === 0  ?
        <SubImgWrap imgArr={releaseThisWeekData} />
        : <SubImgWrap imgArr={nowPlayingData} />
      }
      <LoadMoreBtn page={page} setPage={setPage} />
    </section>
  )
}

export default Sub01