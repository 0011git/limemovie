import React, { useState, useRef, useEffect } from 'react'
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import headerStyle from '../../styles/header.module.scss';


const Header = () => {
  const [down, setDown] = useState(false);
  let prevY = useRef(0);

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
          <Link to='/'>
            <h1 className='logo'></h1>
          </Link>
          <div className={headerStyle.navWrap}>
            <nav>
              <Link to="/nowplaying">최신</Link>
              <Link to="/popular">인기</Link>
              <Link to="/genres">장르</Link>
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
  const searchRef = useRef();

  
  const onSearch = (e) => {
      setKeyword(e.target.value);
      if(keyword !== ''){
        searchRef.current.classList.add(headerStyle.activeSearch);
      }else{
        searchRef.current.classList.remove(headerStyle.activeSearch);
      }
  }

  const onReset = () => {
    setKeyword(''); 
    searchRef.current.classList.remove(headerStyle.activeSearch); 
  }

  const searchKeyword = () => {
    
  }


  return (
    <form onSubmit={searchKeyword}>
    <div className={headerStyle.searchWrap}>
      <div ref={searchRef} className={headerStyle.search}>
        <input value={keyword} id='search' onChange={onSearch} type='text' placeholder='검색...' />
        <label htmlFor='search'></label>
        <button onClick={onReset} className={headerStyle.reset}></button>
      </div>
    </div>
    </form>
  )
}


export default Header