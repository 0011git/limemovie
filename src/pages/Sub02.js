import React, { useEffect, useState } from 'react'
import subStyle from '../styles/sub.module.scss'
import SubBtnWrap from '../components/sub/SubBtnWrap'
import SubImgWrap from '../components/sub/SubImgWrap'
import LoadMoreBtn from '../components/sub/LoadMoreBtn'
import store from '../store/store'
import GenreBtn from '../components/GenreBtn'

const Sub02 = () => {
  let btnNameArr = ['지금 뜨는 콘텐츠', 'TOP 100'];
  const { sub02Data, loading, apiSub02 } = store();
  const [page, setPage] = useState(1);

  const initialArr = Array(btnNameArr.length).fill(false);
  const [isActive, setIsActive] = useState(initialArr);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    apiSub02(page);
  }, [page])
  if(loading) return <>loading...</>

  let trending = sub02Data.trending;
  const topRated100 = sub02Data.top_rated1.data.results.concat(sub02Data.top_rated2.data.results, sub02Data.top_rated3.data.results, sub02Data.top_rated4.data.results, sub02Data.top_rated5.data.results)

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
    <div className={subStyle.sub01}>
      <section>
      <h2 className={subStyle.title}>인기</h2>

      <ul className={subStyle.tabWrap}>
          {btnNameArr.map((name, idx) => (
            <li onClick={chooseGenres} key={name} style={{margin:'0 12px 12px 0'}}>
                <GenreBtn name={name} isActive={isActive[idx]} />
            </li>
          ))}
      </ul>

      <SubImgWrap imgArr={category} />
      <LoadMoreBtn page={page} setPage={setPage} />
      </section>
    </div>
  )
}

export default Sub02