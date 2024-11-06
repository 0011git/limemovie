import './assets.scss/reset.scss';
import './assets.scss/App.scss';
import { HashRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';
import Main from './pages/Main';
import Sub01 from './pages/Sub01'
import Sub02 from './pages/Sub02'
import Sub03 from './pages/Sub03'
import Details from './pages/Details';
import SearchResult from './pages/SearchResult';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 변경될 때 스크롤을 상단으로 이동
  }, [pathname]);

  return null; // 아무 내용도 렌더링하지 않음
};


const App = () => {

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/nowplaying" element={<Sub01 />}/>
        <Route path="/popular" element={<Sub02 />}/>
        <Route path="/genres" element={<Sub03 />}/>
        <Route path="/details" element={<Details />}/>
        <Route path="/result" element={<SearchResult />}/>
      </Routes>      
    </Router>
  );
}



export default App;
