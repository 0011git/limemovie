import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Navigation, Pagination } from 'swiper/modules';

const TrailerSlide = ({trailersArr}) => {
  return (
    <Swiper
        className='trailerSlide'
        slidesPerView={1}
        spaceBetween={12}
        navigation={true}
        pagination={{clickable: true}} 
        modules={[Navigation, Pagination]} 
    >
      {trailersArr.map((video) => (
        <SwiperSlide key={video.key}>
          <div>
            <iframe allowFullScreen className='youtube' src={'https://www.youtube.com/embed/' + video.key}></iframe>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default TrailerSlide