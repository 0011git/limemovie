import React, { useRef } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';


const CastSlide = ({castsArr}) => {
  const swiperRef = useRef();

  return (
    <div>
        <Swiper
          className='castSlide'
          slidesPerView={5}
          slidesPerGroup={5}
          spaceBetween={12}
          centeredSlides={false}
          navigation={true}
          modules={[Navigation]}
          ref={swiperRef}
        >
          {castsArr.map((obj) => (
              <SwiperSlide key={obj.credit_id}>
                <img src={'https://image.tmdb.org/t/p/w300/' + obj.profile_path} alt={obj.name} />
                <p>{obj.name}</p>
              </SwiperSlide>
          ))}
        </Swiper>
    </div>
  )
}

export default CastSlide