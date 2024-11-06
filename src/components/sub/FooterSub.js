import React from 'react'
import fsScss from '../../assets.scss/FooterSub.module.scss';
import Logo from '../../components/Logo';
import PolicyBtn from '../../components/PolicyBtn';
import SnsBtn from '../../components/SnsBtn';
import Subscribe from '../Subscribe';
import SubscribeSub from './SubscribeSub';

const FooterSub = () => {
  return (
    <footer className={fsScss.footer}>
      <div className={fsScss.footerWrap}>
        <div className={fsScss.upperWrap}>
          <div className={fsScss.leftWrap}>
            <Logo />
            <ul>
              <li>
                <p>이 웹사이트는 리액트와 TMDB API를 이용해 학습용으로 제작되었습니다.</p>
                <p>This website is created for academic purposes using React and TMDB API.</p>
              </li>
            </ul>
          </div>
          <div className={fsScss.rightWrap}>
            <SubscribeSub />
          </div>        
        </div>
      <div className={fsScss.lowerWrap}>
        <div>
          <PolicyBtn/>
        </div>
        <div>
          <SnsBtn/>
        </div>
      </div>
      </div>
      <div className={fsScss.copyright}>
        Copyright ©2024 <span>LimeMovie</span> All Rights Reserved 
      </div>
    </footer>
  )
}

export default FooterSub