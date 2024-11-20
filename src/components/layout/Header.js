import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import headerStyle from '../../styles/header.module.scss';

const Header = () => {
  const [down, setDown] = useState(false);
  let prevY = useRef(0);
  const navigate = useNavigate();

  const goToPage = (path) => {
    navigate(path)
  }

  const onScroll = () => {
    let newY = window.scrollY;

    if(newY > prevY.current){
      setDown(true)
    }else if(newY < prevY.current){
      setDown(false)
    }
    prevY.current = newY;
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);


    return (
      <header className={`${headerStyle.header} ${down ? headerStyle.hide : ''}`}>
        <div className={headerStyle.inner}>
          <h1 onClick={() => goToPage('/')} className={`logo ${headerStyle.logo}`} aria-label="라임무비 사이트 로고">
            <span className={headerStyle.forScreenReader}>라임무비 LimeMovie</span>
          </h1>
          <div className={headerStyle.navWrap}>
            <nav>
              <ul className={headerStyle.categoryGroup}>
                <li className={headerStyle.categoryCommon} onClick={() => goToPage('/nowplaying')}>최신</li>
                <li className={headerStyle.categoryCommon} onClick={() => goToPage('/popular')}>인기</li>
                <li className={headerStyle.categoryCommon} onClick={() => goToPage('/genres')}>장르</li>
              </ul>
            </nav>
            <Search />
          </div>
        </div>
      </header>
    )
}


// 검색 박스
const Search = () => {
  const [keyword, setKeyword] = useState('');
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  
  const insertKeyword = (e) => {
      setKeyword(e.target.value);
      setActive(true);
  }

  const onReset = (e) => {
    e.preventDefault();
    setKeyword(''); 
    setActive(false);
  }

  const onSearch = (e) => {
    e.preventDefault();
    navigate(`/search?keyword=${keyword}`);    
  }


  return (
    <form onSubmit={onSearch}>
    <div className={headerStyle.searchWrap}>
      <div className={`${headerStyle.search} ${active ? headerStyle.active : ''}`}>
        <input value={keyword} id='search' onChange={(e) => insertKeyword(e)} type='text' placeholder='검색...' />
        <label htmlFor='search'></label>
        <button type="button" onClick={onReset} className={headerStyle.reset}></button>
      </div>
    </div>
    </form>
  )
}


export default Header