import React, { useEffect, useState } from 'react'
import subStyle from '../styles/sub.module.scss'
import SubImgWrap from '../components/sub/SubImgWrap'
import LoadMoreBtn from '../components/sub/LoadMoreBtn'
import store from '../store/store'
import GenreBtn from '../components/GenreBtn'
import { apiSub03 } from '../api/instance'
import Loading from '../components/Loading'

const Sub03 = () => {
  const genresArr = [
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
  const btnNameArr = genresArr.map((obj) => obj.name);
  const { loading, setLoading } = store();

  // 데이터 저장용
  const [genres, setGenres] = useState([]);
  const [twoHours, setTwoHours] = useState([]);
  // 페이지++
  const [page, setPage] = useState(1);

  // btnNameArr버튼들 온오프용 변수들
  const initialArr = Array(btnNameArr.length).fill(false);
  const [isActive, setIsActive] = useState(initialArr);
    // 선택한 버튼의 인덱스(기본값0)
  const [category, setCategory] = useState(0);

  // 장르 여러 개 선택하게?
  // const genresQueryFormat = () => {
  //   const genresIdArr = category.map((item) => (
  //     genresArr[item].id
  //   ))
  //   return genresIdArr.join(',')
  // }

  useEffect(() => {
    const fetchData = async() => {
      const res = await apiSub03(genresArr[category].id, page);
      setLoading(false)
      return res;
    }
    isActive[category] = true;
    fetchData().then(res => {
      setGenres( prev => ([...prev, ...res.genres]) )
      setTwoHours( prev => ([...prev, ...res.twoHours]) )
    }) 
  }, [page, category])

  if(loading) return <Loading />;


  const chooseGenres = (e) => {
    let state = [...isActive]
    const selectedGenres = e.target.innerText
    const selectedIdx = btnNameArr.indexOf(selectedGenres)
    setGenres(() => []);  //데이터 저장소 비우기

    if (selectedIdx !== -1) {
        // 해당 버튼 활성화
        state = state.map((item) => item = false)
        state[selectedIdx] = true;
        // state[selectedIdx] = !state[selectedIdx];
        setIsActive(state);
        // 해당 콘텐츠 활성화
        // setCategory((prev) => (prev.includes(selectedIdx) ? prev : [...prev, selectedIdx]) );
        setCategory(selectedIdx);
    }
  }

  
  return (
    <section className={subStyle.subWrap}>
      <h2 className={subStyle.title}>장르</h2>
      
      <ul className={subStyle.tabWrap}>
          {btnNameArr.map((name, idx) => (
            <li onClick={chooseGenres} key={name} style={{margin:'0 12px 12px 0'}}>
                <GenreBtn name={name} isActive={isActive[idx]} />
            </li>
          ))}
      </ul>

      { 
        category === 19  ?
        <SubImgWrap imgArr={twoHours} />
        : <SubImgWrap imgArr={genres} />
      }
      <LoadMoreBtn page={page} setPage={setPage} />
    </section>
  )
}

export default Sub03