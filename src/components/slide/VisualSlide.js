import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import VisualSlideSmall from './VisualSlideSmall';
import mainScss from '../../assets.scss/Main.module.scss'
import { useNavigate } from 'react-router-dom';


const VisualSlide = ({visualData}) => {
  const navi = useNavigate();

  return (
    <>
      <Swiper
        className='visualSlide'
        slidesPerView={1}
        spaceBetween={24}
        pagination={{clickable: true}}
        loop={true}
        modules={[Pagination]}
      >
      {visualData.map((visualData) => (
        <SwiperSlide key={visualData.id}>
          <div className={mainScss.overview}>
            <h2>{visualData.title}</h2>
            <p>{visualData.overview}</p>          
            
            <button onClick={()=>navi('/details', {state: visualData.id})}>더보기</button>
            
          </div>
          <img src={ visualData.backdrop ? ('https://image.tmdb.org/t/p/original/' + visualData.backdrop) : ('https://image.tmdb.org/t/p/original/' + visualData.poster)} />
          <VisualSlideSmall visualData={visualData} />
        </SwiperSlide>
      ))}
      </Swiper>
        
    </>
  )
}

export default VisualSlide  