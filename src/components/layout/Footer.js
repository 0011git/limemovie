import React from 'react'
import footerStyle from '../../styles/footer.module.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <FooterMain />
    </>
  )
}
export default Footer

const FooterMain = () => {
  return (
    <footer className={footerStyle.footer}>
      <div className={footerStyle.footerWrap}>
        <span className={`logo ${footerStyle.logo}`}></span>
        <ul>
          <li className={footerStyle.notice}>
            <p>이 웹사이트는 리액트와 TMDB API를 이용해 학습용으로 제작되었습니다.</p>
            <p>This website was created for educational purposes using React and the TMDB API.</p>
          </li>
          <li className={footerStyle.policyWrap}>
            <PolicyBtn />
          </li>
          <li className={footerStyle.snsWrap}>
            <SnsBtn />
          </li>
        </ul>
      </div>
      <div className={footerStyle.copyright}>
        Copyright ©2024 <span>LimeMovie</span> All Rights Reserved 
      </div>
    </footer>
  )
}


const PolicyBtn = () => {
  return (
    <div className={footerStyle.policyBtns}>
        <ul>
            <li>
                <button>About</button>
            </li>
            <li>
                <button>Privacy & Terms</button>
            </li>
            <li>
                <button>Policy</button>
            </li>
        </ul>
    </div>
  )
}

const SnsBtn = () => {
  return (
    <div className={footerStyle.snsBtns}>
      <ul>
        <li><button className={footerStyle.facebook}></button></li>
        <li><button className={footerStyle.twitter}></button></li>
        <li><button className={footerStyle.instagram}></button></li>
        <li><button className={footerStyle.google}></button></li>
        <li><Link to="https://github.com/0011git/limemovie" target='_blank'><button className={footerStyle.github}></button></Link></li>
      </ul>
    </div>
  )
}