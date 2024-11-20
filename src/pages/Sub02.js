import React, { useEffect, useState } from 'react'
import subStyle from '../styles/sub.module.scss'
import SubImgWrap from '../components/sub/SubImgWrap'
import LoadMoreBtn from '../components/sub/LoadMoreBtn'
import store from '../store/store'
import GenreBtn from '../components/GenreBtn'
import { apiSub02 } from '../api/instance'
import Loading from '../components/Loading'

const Sub02 = () => {
  let btnNameArr = ['지금 뜨는 콘텐츠', '가장 인기 있는 영화'];
  const { loading, setLoading } = store();

  // 데이터 저장용
  const [trending, setTrending] = useState([]);
  const [topRated, setTopRated] = useState([]);
  // 페이지++
  const [page, setPage] = useState(1);

  // btnNameArr버튼들 온오프용 변수들
  const initialArr = Array(btnNameArr.length).fill(false);
  const [isActive, setIsActive] = useState(initialArr);
    // 선택한 버튼의 인덱스(기본값0)
  const [category, setCategory] = useState(0);

  useEffect(() => {
    const fetchData = async() => {
      const res = await apiSub02(page);
      setLoading(false)
      return res;
    }
    isActive[category] = true;
    fetchData().then(res => {
      setTrending( prev => ([...prev, ...res.trending]) )
      setTopRated( prev => ([...prev, ...res.topRated]) )
    }) 
  }, [page])

  if(loading) return <Loading />;
  

  const chooseGenres = (e) => {
    let state = [...isActive]
    const selectedGenres = e.target.innerText
    const selectedIdx = btnNameArr.indexOf(selectedGenres)
    
    if (selectedIdx !== -1) {
        // 해당 버튼 활성화
        state = state.map((item) => item = false)
        state[selectedIdx] = true;
        setIsActive(state);
        // 해당 콘텐츠 활성화
        setCategory(selectedIdx);
    }
  }


  return (
    <section className={subStyle.subWrap}>
      <h2 h2 className={subStyle.title}>인기</h2>

      <ul className={subStyle.tabWrap}>
          {btnNameArr.map((name, idx) => (
            <li onClick={chooseGenres} key={name} style={{margin:'0 12px 12px 0'}}>
                <GenreBtn name={name} isActive={isActive[idx]} />
            </li>
          ))}
      </ul>

      { 
        category === 0  ?
        <SubImgWrap imgArr={trending} />
        : <SubImgWrap imgArr={topRated} />
      }
      <LoadMoreBtn page={page} setPage={setPage} />
    </section>
  )
}

export default Sub02