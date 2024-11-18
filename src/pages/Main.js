import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BasicSlide from '../components/slide/BasicSlide'
import Subscribe from '../components/Subscribe'
import mainScss from '../styles/Main.module.scss'
import store from '../store/store'
import { useNavigate } from 'react-router-dom';


 // Import Swiper related
 import { Swiper, SwiperSlide } from 'swiper/react';
 import 'swiper/css';
 import 'swiper/css/pagination';
 import 'swiper/css/free-mode';
 import 'swiper/css/navigation';
 import { FreeMode, Navigation, Pagination } from 'swiper/modules';




const Main = () => {
  const {apiMain, loading} = store();
  useEffect(() => {
    apiMain();
  },[])
  if(loading) return <>loading...</>

  return (
    <>
      <Header />
      <main>
        <Visual />
        <MainContents />
      </main>
      <Footer />
    </>
  )
}

 // 비주얼-슬라이드
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

// 비주얼-유튜브 영상 슬라이드
const VisualSlideSmall = ({visualData}) => {

  let videoLinks = visualData.videos.results;
  
  if(videoLinks.length > 5){
    videoLinks = videoLinks.slice(0, 5);
  }

  videoLinks = videoLinks.map((obj) => ('https://www.youtube.com/embed/' + obj.key))

  

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
              <div className='youtubeWrap'>
                <iframe allowFullScreen className='youtube' src={video}></iframe>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
    </div>
  )
}

const Visual = () => {
  const { mainData } = store();
  let visualData = [];
  
    const visualKeys = ['visual1', 'visual2', 'visual3']; // 반복할 키 배열

    visualKeys.forEach((key, idx) => {
        visualData[idx] = {
            id: mainData[key].data.id,
            title: mainData[key].data.title,
            overview: mainData[key].data.overview,
            videos: mainData[key].data.videos,
            backdrop:mainData[key].data.backdrop_path,
            poster:mainData[key].data.poster_path
        };
    });
  
    return (
      <section className='visual'>
        <VisualSlide visualData={visualData} />
      </section>
    )
}
  

const MainContents = () => {
  let titles = ['지금 뜨는 콘텐츠', '이번 주 새로 개봉한 영화', '가장 인기 있는 영화 TOP 100', '가볍게 보는 짧은 영화', 'SF 액션 영화'];
  const { mainData } = store();
  let trendingPoster = [],
      releaseThisWeekPoster = [],
      top_rated1Poster = [],
      twoHoursPoster = [],
      sfActionPoster = [],
      posterArr = [];

  if(mainData.length !== 0){
    
    trendingPoster = (mainData.trending.data.results).map((obj) => (
      {
        id: obj.id,
        poster: 'https://image.tmdb.org/t/p/w300/' + obj.poster_path
      }
    ))

    releaseThisWeekPoster = (mainData.releaseThisWeek.data.results).map((obj) => (
      {
        id: obj.id,
        poster: 'https://image.tmdb.org/t/p/w300/' + obj.poster_path
      }
    ))

    top_rated1Poster = (mainData.top_rated1.data.results).map((obj) => (
      {
        id: obj.id,
        poster: 'https://image.tmdb.org/t/p/w300/' + obj.poster_path
      }
    ))

    twoHoursPoster = (mainData.twoHours.data.results).map((obj) => (
      {
        id: obj.id,
        poster: 'https://image.tmdb.org/t/p/w300/' + obj.poster_path
      }
    ))

    sfActionPoster = (mainData.sfAction.data.results).map((obj) => (
      {
        id: obj.id,
        poster: 'https://image.tmdb.org/t/p/w300/' + obj.poster_path
      }
    ))

    posterArr = [trendingPoster, releaseThisWeekPoster, top_rated1Poster, twoHoursPoster, sfActionPoster];
  }

  return (
      <>
        <section>
            {titles.map((title, idx) => (
              <article className={mainScss.mainArticle} key={idx}>
                <BasicSlide title={title} posterArr={posterArr[idx]} />
              </article>
            ))}
        </section>
        <section className={mainScss.email}>
          <h2>매주 새로운 영화를 발견해 보세요.</h2>
          <Subscribe />
        </section>
      </>
  );

}


const ModalPopupForVideo  = () => {

  return (
    <div className={mainScss.modal}>
      <div className={mainScss.modalBox}>
        <div className={mainScss.videoWrap}>
          <iframe ></iframe>
        </div>

      </div>

    </div>
  )
 }
 



export default Main