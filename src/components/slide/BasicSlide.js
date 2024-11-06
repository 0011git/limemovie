import React, { useRef } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import bsScss from '../../assets.scss/BasicSlide.module.scss'
import { useStore } from '../../store/store'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation, Autoplay } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

import ViewMoreBtn from '../ViewMoreBtn';

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
      <div className={bsScss.basicSlide} onMouseEnter={onHover} onMouseLeave={offHover}>
        <div className={bsScss.titleWrap}>
          <h2 className={bsScss.title}>{title}</h2>
          <div className={bsScss.viewMore}>
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

export default BasicSlide