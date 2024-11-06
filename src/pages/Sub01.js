import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import FooterSub from '../components/sub/FooterSub'
import sub01Scss from '../assets.scss/Sub01.module.scss'
import SubTitle from '../components/sub/SubTitle'
import SubBtnWrap from '../components/sub/SubBtnWrap'
import SubImgWrap from '../components/sub/SubImgWrap'
import SubLoadMore from '../components/sub/SubLoadMore'
import store from '../store/store'
import GenreBtn from '../components/GenreBtn'

const Sub01 = () => {
  const title = '최신 콘텐츠'
  const btnNameArr = ['이번 주에 개봉한 영화', '영화관에서 지금 상영 중인 영화'];   
  const { sub01Data, loading, apiSub01 } = store();

  const initialArr = Array(btnNameArr.length).fill(false);
  const [isActive, setIsActive] = useState(initialArr);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    apiSub01();
  }, [])
  if(loading || sub01Data == {}) return <>loading...</>

  let releaseThisWeek = sub01Data.releaseThisWeek.data.results;
  let nowPlaying = sub01Data.nowPlaying.data.results;
  const categoryArr = [releaseThisWeek, nowPlaying]
  

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
        setCategory([...categoryArr[selectedIdx]]);
    }
  }


  return (
    <div className={sub01Scss.sub01}>
      <Header />
      <section>
        <SubTitle title={title} />

        {/* <SubBtnWrap btnNameArr={btnNameArr} isActive={isActive} /> */}
        <div>
            <ul style={{margin:'40px 0', display:'flex', flexWrap:'wrap'}}>
                {btnNameArr.map((name, idx) => (
                  <li onClick={chooseGenres} key={name} style={{margin:'0 12px 12px 0'}}>
                      <GenreBtn name={name} isActive={isActive[idx]} />
                  </li>
                ))}
            </ul>
        </div>

        <SubImgWrap imgArr={category} />
        <SubLoadMore />
      </section>
      <FooterSub />
    </div>
  )
}

export default Sub01