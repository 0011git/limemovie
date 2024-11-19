import React, { useRef } from 'react'
import basicSlideStyle from '../../styles/basicSlide.module.scss'
import { useNavigate } from 'react-router-dom';


// 스와이퍼
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';


const BasicSlide = ({title, posterArr}) => {
  const swiperRef = useRef();
  const onHover = () => {
    swiperRef.current.swiper.autoplay.stop();
  }

  const offHover = () => {
    swiperRef.current.swiper.autoplay.start();
  }
  const navi = useNavigate();

  return (
    <>
      <div className={basicSlideStyle.basicSlide} onMouseEnter={onHover} onMouseLeave={offHover}>
        <div className={basicSlideStyle.titleWrap}>
          <h2 className={basicSlideStyle.title}>{title}</h2>
          <div className={basicSlideStyle.viewMore}>
            <ViewMoreBtn />
          </div>
        </div>
        <Swiper
            className='basic'
            slidesPerView={5}
            slidesPerGroup={4}
            spaceBetween={12}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false
            }}
            centeredSlides={true}
            navigation={true}
            modules={[Navigation, Autoplay]}
            ref={swiperRef}
        >
        {
          (posterArr && posterArr.length !== 0) ? (
            posterArr.map((obj, idx) => (
              <SwiperSlide key={obj.id} onClick={() => navi('/details', {state: obj.id}) }>
                  <img src={obj.poster} alt={obj.title} />
              </SwiperSlide>
            ))
          ) : (<div>Loading...</div>)
        }
      
        </Swiper>
      </div>
    </>
  )
}

// 더보기 버튼
const ViewMoreBtn = () => {
  return (
    <div className={basicSlideStyle.viewMoreBtnWrap}>
      <button>더보기</button>
    </div>
  )
}
export default BasicSlide