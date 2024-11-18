import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
// import VisualSlideSmall from './VisualSlideSmall';
import mainScss from '../../styles/Main.module.scss'
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

export default VisualSlide  