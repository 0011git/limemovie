import React, { useState, useRef, useEffect } from 'react'
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import headerScss from '../styles/Header.module.scss';
import '../styles/App.scss'
import Search from './Search'


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
      <header className={`${headerScss.header} ${down ? headerScss.hide : ''}`}>
        <div className={headerScss.inner}>
          <Link to='/'>
            <h1 className='logo'></h1>
          </Link>
          <div className={headerScss.navWrap}>
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

export default Header