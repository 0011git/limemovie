import React from 'react'
import footerScss from '../assets.scss/Footer.module.scss';
import Logo from './Logo';
import PolicyBtn from './PolicyBtn';
import SnsBtn from './SnsBtn';

const Footer = () => {
  return (
    <footer className={footerScss.footer}>
      <div className={footerScss.footerWrap}>
        <Logo />
        <ul>
          <li>
            <p>이 웹사이트는 리액트와 TMDB API를 이용해 학습용으로 제작되었습니다.</p>
            <p>This website is created for academic purposes using React and TMDB API.</p>
          </li>
          <li>
            <PolicyBtn />
          </li>
          <li>
            <SnsBtn />
          </li>
        </ul>
      </div>
      <div className={footerScss.copyright}>
        Copyright ©2024 <span>LimeMovie</span> All Rights Reserved 
      </div>
    </footer>
  )
}

export default Footer