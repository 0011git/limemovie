import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import BasicSlide from '../components/slide/BasicSlide'
import store from '../store/store'
import mainStyle from '../styles/main.module.scss'
import { apiMain } from '../api/instance'


// 스와이퍼
 import { Swiper, SwiperSlide } from 'swiper/react';
 import 'swiper/css';
 import 'swiper/css/pagination';
 import 'swiper/css/free-mode';
 import 'swiper/css/navigation';
 import { FreeMode, Navigation, Pagination } from 'swiper/modules';
import Loading from '../components/Loading';



const Main = () => {
  const { loading, setLoading } = store();
  const [mainData, setMainData] = useState({});


  useEffect(() => {
    const fetchData = async() => {
      const res = await apiMain();
      setLoading(false)
      return res;
    }
    fetchData().then(res => setMainData(res))
  },[])

  if(loading || !mainData.visual) return <Loading />
  // console.log(mainData);

  return (
    <div>
      <Visual visualData={mainData.visual} />
      <MainContents mainData={mainData} />
    </div>
  )
}

// 메인 비주얼
const Visual = ({ visualData }) => {
  // console.log(visualData);
  const navi = useNavigate();
  const [activeModal, setActiveModal] = useState(false);
  const [modalData, setModalData] = useState({});

  const onModal = (info) => {
    console.log(info);
    setActiveModal((prev)=> !prev)
    setModalData(info)
  }


    return (
      <section className='visual'>
        <Swiper
          className='visualSlide'
          slidesPerView={1}
          spaceBetween={24}
          pagination={{clickable: true}}
          loop={true}
          modules={[Pagination]}
        >
        {
          visualData.map((visualData) => (
            <SwiperSlide key={visualData.id}>
              <div className={mainStyle.overview}>
                <h2>{visualData.title}</h2>
                <p>{visualData.overview}</p>     
                <button onClick={()=>navi('/details', {state: visualData.id})}>더보기</button>
              </div>
              <img src={`https://image.tmdb.org/t/p/original/${visualData.backdrop_path}`} alt={`${visualData.title} 배경사진`} />
              {/* 트레일러 */}
              <div className='visualSmall'>
                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  freeMode={true}
                  navigation={true}
                  modules={[FreeMode, Navigation]}
                >
                  {
                    (visualData.videos.results.slice(0,5)).map((obj) => (
                      <SwiperSlide key={`${obj.id}_${obj.key}`}>
                        <div className='youtubeWrap' onClick={() => onModal(obj)}>
                          <iframe allowFullScreen className='youtube' src={`https://www.youtube.com/embed/${obj.key}`} title={obj.name}></iframe>
                        </div>
                      </SwiperSlide>
                    ))
                  }
                </Swiper>
              </div>
            </SwiperSlide>
          ))
        }
        </Swiper>
        <ModalPopupForVideo video={modalData} />
      </section>
    )
}

// 메인 컨텐츠
const MainContents = ({ mainData }) => {

  return (
      <>
        <section>
          {/* 지금 뜨는 콘텐츠 */}
          <article className={mainStyle.mainArticle}>
            <div className={mainStyle.titleWrap}>
              <h2 className={mainStyle.title}>지금 뜨는 콘텐츠</h2>
              <div className={mainStyle.viewMore}>
                <ViewMoreBtn path={'/popular'} />
              </div>
            </div>
            <div className={mainStyle.basicSlideWrap}>
              <BasicSlide posterArr={mainData.trending} />
            </div>
          </article>
          {/* 이번 주 새로 개봉한 영화 */}
          <article className={mainStyle.mainArticle}>
            <div className={mainStyle.titleWrap}>
              <h2 className={mainStyle.title}>이번 주 새로 개봉한 영화</h2>
              <div className={mainStyle.viewMore}>
                <ViewMoreBtn path={'/nowplaying'} />
              </div>
            </div>
            <div className={mainStyle.basicSlideWrap}>
              <BasicSlide posterArr={mainData.releaseThisWeek} />
            </div>
          </article>
          {/* 가장 인기 있는 영화 */}
          <article className={mainStyle.mainArticle}>
            <div className={mainStyle.titleWrap}>
              <h2 className={mainStyle.title}>가장 인기 있는 영화</h2>
              <div className={mainStyle.viewMore}>
                <ViewMoreBtn path={'/popular'} />
              </div>
            </div>
            <div className={mainStyle.basicSlideWrap}>
              <BasicSlide posterArr={mainData.top_rated} />
            </div>
          </article>
          {/* 가볍게 보는 짧은 영화 */}
          <article className={mainStyle.mainArticle}>
            <div className={mainStyle.titleWrap}>
              <h2 className={mainStyle.title}>가볍게 보는 짧은 영화</h2>
              <div className={mainStyle.viewMore}>
                <ViewMoreBtn path={'/genres'} />
              </div>
            </div>
            <div className={mainStyle.basicSlideWrap}>
              <BasicSlide posterArr={mainData.twoHours} />
            </div>
          </article>
          {/* SF 액션 영화 */}
          <article className={mainStyle.mainArticle}>
            <div className={mainStyle.titleWrap}>
              <h2 className={mainStyle.title}>SF 액션 영화</h2>
              <div className={mainStyle.viewMore}>
                <ViewMoreBtn path={'/genres'} />
              </div>
            </div>
            <div className={mainStyle.basicSlideWrap}>
              <BasicSlide posterArr={mainData.sfAction} />
            </div>
          </article>

        </section>
        <section className={mainStyle.email}>
          <h2>매주 새로운 영화를 발견해 보세요.</h2>
          <Subscribe />
        </section>
      </>
  );
}

// 제목 옆 더보기 버튼
const ViewMoreBtn = ({path}) => {
  return (
    <Link to={path}>
      <div className={mainStyle.viewMoreBtnWrap}>
        <button type='button'>더보기</button>
      </div>
    </Link>
  )
}
// 비주얼-비디오 팝업
const ModalPopupForVideo  = ({video}) => {
  return (
    <div className={mainStyle.modal}>
      <div className={mainStyle.modalBox}>
        <div className={mainStyle.videoWrap}>
          <iframe allowFullScreen className='youtube' src={`https://www.youtube.com/embed/${video.key}`} title={video.name}></iframe>
        </div>

      </div>

    </div>
  )
 }

// 구독-이메일 주소 입력
const Subscribe = () => {
  const [email, setEmail] = useState('');
  const emailRef = useRef();

  const onEmail = (e) => {
    setEmail(e.target.value)
    if(email !== ''){
      emailRef.current.classList.add(mainStyle.activeSubscribe);
    }else{
      emailRef.current.classList.remove(mainStyle.activeSubscribe);
    }
  }

  const onReset = () => {
    setEmail(''); 
    emailRef.current.classList.remove(mainStyle.activeSubscribe);
  }
  
  return (
    <form>
      <div ref={emailRef} className={mainStyle.subscribe}>
        <div className={mainStyle.inputWrap}>
          <label htmlFor='email'></label>
          <input value={email} onChange={onEmail} type='email' id='email' placeholder='movie@limemovie.com'/>
          <button onClick={onReset} className={mainStyle.reset}></button>
        </div>
        <button>구독하기</button>
      </div>
    </form>
  )
}

export default Main