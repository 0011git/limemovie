import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/reset.scss';
import './styles/App.scss';

import Layout from './components/layout/Layout';
import Main from './pages/Main';
import Sub01 from './pages/Sub01'
import Sub02 from './pages/Sub02'
import Sub03 from './pages/Sub03'
import Details from './pages/Details';
import SearchResult from './pages/SearchResult';

const App = () => {
  return (
    <Router>
      <Layout>  {/* 레이아웃: 헤더+푸터 */}
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/nowplaying" element={<Sub01 />}/>
          <Route path="/popular" element={<Sub02 />}/>
          <Route path="/genres" element={<Sub03 />}/>
          <Route path="/details" element={<Details />}/>
          <Route path="/search" element={<SearchResult />}/>
        </Routes>      
      </Layout>
    </Router>
  );
}

export default App;