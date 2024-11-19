import React from 'react'
import footerStyle from '../../styles/footer.module.scss';

const Footer = () => {
  return (
    <>
      <FooterMain />
      {/* <FooterSub /> */}
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
            <p>This website is created for academic purposes using React and TMDB API.</p>
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

const FooterSub = () => {
  return (
    <footer className={footerStyle.footerSub}>
      <div className={footerStyle.footerWrap}>
        <div className={footerStyle.upperWrap}>
          <div className={footerStyle.leftWrap}>
            <span className='logo'></span>
            <ul>
              <li className={footerStyle.notice}>
                <p>이 웹사이트는 리액트와 TMDB API를 이용해 학습용으로 제작되었습니다.</p>
                <p>This website is created for academic purposes using React and TMDB API.</p>
              </li>
            </ul>
          </div>
          <div className={footerStyle.rightWrap}>
            <div className={footerStyle.subscribe}>
              <form>
                <label htmlFor='email'>
                  <input type='email' id='email' placeholder='movie@limemovie.com'/>
                  <button>구독하기</button>
                </label>
              </form>
            </div>
          </div>        
        </div>
      <div className={footerStyle.lowerWrap}>
        <div className={footerStyle.policyWrap}>
          <PolicyBtn/>
        </div>
        <div className={footerStyle.snsWrap}>
          <SnsBtn/>
        </div>
      </div>
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
                <a href='#'>About</a>
            </li>
            <li>
                <a href='#'>Privacy & Terms</a>
            </li>
            <li>
                <a href='#'>Policy</a>
            </li>
        </ul>
    </div>
  )
}

const SnsBtn = () => {
  return (
    <div className={footerStyle.snsBtns}>
      <ul>
        <li><a href='#'></a></li>
        <li><a href='#'></a></li>
        <li><a href='#'></a></li>
        <li><a href='#'></a></li>
        <li><a href='#'></a></li>
      </ul>
    </div>
  )
}