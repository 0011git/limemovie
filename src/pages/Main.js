import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BasicSlide from '../components/slide/BasicSlide'
import VisualSlide from '../components/slide/VisualSlide'
import Subscribe from '../components/Subscribe'
import mainScss from '../assets.scss/Main.module.scss'
import store from '../store/store'

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
  


// const VisualTitle = ({visualData}) => {
//   return(
//     <>
//     {visualData.map((data) => (
//         <div className={mainScss.overview}>
//           <h2>{data.title}</h2>
//           <p>{data.overview}</p>          
//           <a href="http://localhost:3000/#/details">
//             <button>더보기</button>
//           </a>
//         </div>
//     ))}
//     </>
//   )
// }

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

export default Main