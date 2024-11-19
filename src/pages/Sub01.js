import React, { useEffect, useRef, useState } from 'react'
import subStyle from '../styles/sub.module.scss'
import SubBtnWrap from '../components/sub/SubBtnWrap'
import SubImgWrap from '../components/sub/SubImgWrap'
import LoadMoreBtn from '../components/sub/LoadMoreBtn'
import store from '../store/store'
import GenreBtn from '../components/GenreBtn'
import { apiSub01 } from '../api/instance'

const Sub01 = () => {
  const btnNameArr = ['이번 주에 개봉한 영화', '영화관에서 지금 상영 중인 영화'];
  const { loading, setLoading } = store();
  const [sub01Data, setSub01Data] = useState({ releaseThisWeek: [], nowPlaying: [] });
  const [page, setPage] = useState(1);

  const initialArr = Array(btnNameArr.length).fill(false);
  const [isActive, setIsActive] = useState(initialArr);
  const [category, setCategory] = useState([]);
  const btn = useRef(null);

  useEffect(() => {
    const fetchData = async() => {
      const res = await apiSub01(page);
      setLoading(false)
      return res;
    }
    fetchData().then(res => { 
      setSub01Data( prevData => ({
      ...prevData,
      releaseThisWeek: [...prevData.releaseThisWeek, ...res.releaseThisWeek],
      nowPlaying: [...prevData.nowPlaying, ...res.nowPlaying]
    }) );
  }
    )
  }, [page])

  // useEffect(()=>{
  //   console.log('sdfsdfsfsfd===================')
  //   if(btn.current) {
  //     btn.current.querySelector('li').click();
  //   } 
  // },[sub01Data])

  
  if(loading) return <div>loading...</div>;
  /** sub01Data에 누적하는건 확인함. category에 어떻게 동시에 반영시킬지 생각!!!*/
  console.log(sub01Data.releaseThisWeek);
  console.log(category);
  
  const chooseGenres = (e) => {
    
    let categoryArr = [sub01Data.releaseThisWeek, sub01Data.nowPlaying]

    let state = [...isActive]
    const selectedGenres = e.target.innerText
    const selectedIdx = btnNameArr.indexOf(selectedGenres)
    
    if (selectedIdx !== -1) {
        // 해당 버튼 활성화
        state = state.map((item) => item = false)
        state[selectedIdx] = true;
        setIsActive(state);

        // 해당 콘텐츠 활성화
        setCategory([...categoryArr[selectedIdx]]);
    }
  }

 
  return (
    <section ref={btn} className={subStyle.subWrap}>
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
      
      <SubImgWrap imgArr={category} />
      <LoadMoreBtn page={page} setPage={setPage} />
    </section>
  )
}

export default Sub01