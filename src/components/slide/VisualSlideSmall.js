import React, { useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

// import required modules
import { FreeMode, Navigation } from 'swiper/modules';

const VisualSlideSmall = ({visualData}) => {

  let videoLinks = visualData.videos.results;
  
  if(videoLinks.length > 5){
    videoLinks = videoLinks.slice(0, 5);
  }

  videoLinks = videoLinks.map((obj) => ('https://www.youtube.com/embed/' + obj.key))

  const [fullScreen, setFullScreen] = useState(false);
  
  function onFullScreen(){
    setFullScreen(true)
  }

  return (
    <div className='visualSmall'>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          navigation={true}
          modules={[FreeMode, Navigation]}
        >
          {videoLinks.map((video) => (
            <SwiperSlide key={video}>
              <div onClick={onFullScreen} className={`youtubeWrap ${fullScreen ? 'active' : ''}`}>
                <iframe allowFullScreen className='youtube' src={video}></iframe>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
    </div>
  )
}

export default VisualSlideSmall