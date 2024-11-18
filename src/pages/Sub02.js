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

const Sub02 = () => {
  const title = '인기'
  let btnNameArr = ['지금 뜨는 콘텐츠', 'TOP 100'];
  const { sub02Data, loading, apiSub02 } = store();

  const initialArr = Array(btnNameArr.length).fill(false);
  const [isActive, setIsActive] = useState(initialArr);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    apiSub02();
  }, [])
  if(loading) return <>loading...</>

  let trending = sub02Data.trending.data.results
  console.log(trending);
  // console.log(sub02Data.top_rated1.data.results);
  const topRated100 = sub02Data.top_rated1.data.results.concat(sub02Data.top_rated2.data.results, sub02Data.top_rated3.data.results, sub02Data.top_rated4.data.results, sub02Data.top_rated5.data.results)
  // console.log(topRated100);
  const categoryArr = [trending, topRated100]
  
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

        <SubImgWrap imgArr={category} />
        <SubLoadMore />
      </section>
      <FooterSub />
    </div>
  )
}

export default Sub02