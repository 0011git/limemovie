import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import FooterSub from '../components/sub/FooterSub'
import sub01Scss from '../styles/Sub01.module.scss'
import SubTitle from '../components/sub/SubTitle'
import SubBtnWrap from '../components/sub/SubBtnWrap'
import SubImgWrap from '../components/sub/SubImgWrap'

import SubLoadMore from '../components/sub/SubLoadMore'
import store from '../store/store'
import GenreBtn from '../components/GenreBtn'

const Sub03 = () => {
  const title = '장르'
  const { sub03Data, loading, apiSub03 } = store();
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
    
    {"id": 999999, "name": "2시간 이하 짧은 영화"}
  ]
  const btnNameArr = genres.map((obj) => obj.name);

  const initialArr = Array(btnNameArr.length).fill(false);
  const [isActive, setIsActive] = useState(initialArr);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    apiSub03();
  }, [])
  if(loading) return <>loading...</>

  // console.log(sub03Data);
  // console.log(sub03Data.genres.data.results);
  // console.log(sub03Data.twoHours.data.results);
  let genresArr = sub03Data.genres.data.results
  let twoHoursArr = sub03Data.twoHours.data.results

  

  
  const categoryArr = btnNameArr;

  
  const chooseGenres = (e) => {
    let state = [...isActive]
    const selectedGenres = e.target.innerText
    const selectedIdx = btnNameArr.indexOf(selectedGenres)
    
    if (selectedIdx !== -1) {
        // 해당 버튼 활성화
        // state = state.map((item) => item = false)
        state[selectedIdx] = !state[selectedIdx];
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
        
        {/* <SubBtnWrap btnNameArr={btnNameArr} /> */}
        <div>
            <ul style={{margin:'40px 0', display:'flex', flexWrap:'wrap'}}>
                {btnNameArr.map((name, idx) => (
                  <li onClick={chooseGenres} key={name} style={{margin:'0 12px 12px 0'}}>
                      <GenreBtn name={name} isActive={isActive[idx]} />
                  </li>
                ))}
            </ul>
        </div>

        <SubImgWrap imgArr={twoHoursArr} />
        <SubLoadMore />
      </section>
      <FooterSub />
    </div>
  )
}

export default Sub03