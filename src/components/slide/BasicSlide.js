import React, { useRef } from 'react'
import basicSlideStyle from '../../styles/basicSlide.module.scss'
import { useNavigate } from 'react-router-dom';


// 스와이퍼
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';


const BasicSlide = ({posterArr}) => {
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
        {/* <div className={basicSlideStyle.titleWrap}>
          <h2 className={basicSlideStyle.title}>{title}</h2>
          <div className={basicSlideStyle.viewMore}>
            <ViewMoreBtn />
          </div>
        </div> */}
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
                  <img src={`https://image.tmdb.org/t/p/w300/${obj.poster_path}`} alt={`${obj.title} 포스터`} />
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