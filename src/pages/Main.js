import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import BasicSlide from '../components/slide/BasicSlide'
import store from '../store/store'
import mainStyle from '../styles/main.module.scss'
import { apiMain } from '../api/instance'


// 스와이퍼
 import { Swiper, SwiperSlide } from 'swiper/react';
 import 'swiper/css';
 import 'swiper/css/pagination';
 import 'swiper/css/free-mode';
 import 'swiper/css/navigation';
 import { FreeMode, Navigation, Pagination } from 'swiper/modules';



const Main = () => {
  const { loading, setLoading } = store();
  const [mainData, setMainData] = useState({});


  useEffect(() => {
    const fetchData = async() => {
      const res = await apiMain();
      setLoading(false)
      return res;
    }
    fetchData().then(res => setMainData(res))
  },[])

  if(loading || !mainData.visual) return <>loading...</>
  console.log(mainData);
  // return

  return (
    <div>
      <Visual visualData={mainData.visual} />
      <MainContents mainData={mainData} />
    </div>
  )
}

// 메인 비주얼
const Visual = ({ visualData }) => {
  console.log(visualData);
  const navi = useNavigate();
  // let videoLinks = visualData.videos.results;
  
  // if(videoLinks.length > 5){
  //   videoLinks = videoLinks.slice(0, 5);
  // }
  // videoLinks = videoLinks.map((obj) => ('https://www.youtube.com/embed/' + obj.key))

  // const { mainData } = store();
  // let visualData = [];
  
  //   const visualKeys = ['visual1', 'visual2', 'visual3']; // 반복할 키 배열

    // visualKeys.forEach((key, idx) => {
    //     visualData[idx] = {
    //         id: mainData[key].data.id,
    //         title: mainData[key].data.title,
    //         overview: mainData[key].data.overview,
    //         videos: mainData[key].data.videos,
    //         backdrop:mainData[key].data.backdrop_path,
    //         poster:mainData[key].data.poster_path
    //     };
    // });
  
    return (
      <section className='visual'>
        <Swiper
        className='visualSlide'
        slidesPerView={1}
        spaceBetween={24}
        pagination={{clickable: true}}
        loop={true}
        modules={[Pagination]}
        >
        {
          visualData.map((visualData) => (
            <SwiperSlide key={visualData.id}>
              <div className={mainStyle.overview}>
                <h2>{visualData.title}</h2>
                <p>{visualData.overview}</p>     
                <button onClick={()=>navi('/details', {state: visualData.id})}>더보기</button>
              </div>
              <img src={`https://image.tmdb.org/t/p/original/${visualData.backdrop_path}`} alt={`${visualData.title} 배경사진`} />

              <div className='visualSmall'>
                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  freeMode={true}
                  navigation={true}
                  modules={[FreeMode, Navigation]}
                >
                  {
                    (visualData.videos.results.slice(0,5)).map((obj) => (
                      <SwiperSlide key={`${obj.id}_${obj.key}`}>
                        <div className='youtubeWrap'>
                          <iframe allowFullScreen className='youtube' src={`https://www.youtube.com/embed/${obj.key}`}></iframe>
                        </div>
                      </SwiperSlide>
                    ))
                  }
                </Swiper>
              </div>
            </SwiperSlide>
          ))
        }
        </Swiper> 
      </section>
    )
}

// 메인 컨텐츠
const MainContents = ({ mainData }) => {

  return (
      <>
        <section>
          {/* 지금 뜨는 콘텐츠 */}
          <article className={mainStyle.mainArticle}>
            <div className={mainStyle.titleWrap}>
              <h2 className={mainStyle.title}>지금 뜨는 콘텐츠</h2>
              <div className={mainStyle.viewMore}>
                <ViewMoreBtn />
              </div>
            </div>
            <div className={mainStyle.basicSlideWrap}>
              <BasicSlide posterArr={mainData.trending} />
            </div>
          </article>
          {/* 이번 주 새로 개봉한 영화 */}
          <article className={mainStyle.mainArticle}>
            <div className={mainStyle.titleWrap}>
              <h2 className={mainStyle.title}>이번 주 새로 개봉한 영화</h2>
              <div className={mainStyle.viewMore}>
                <ViewMoreBtn />
              </div>
            </div>
            <div className={mainStyle.basicSlideWrap}>
              <BasicSlide posterArr={mainData.releaseThisWeek} />
            </div>
          </article>
          {/* 가장 인기 있는 영화 */}
          <article className={mainStyle.mainArticle}>
            <div className={mainStyle.titleWrap}>
              <h2 className={mainStyle.title}>가장 인기 있는 영화</h2>
              <div className={mainStyle.viewMore}>
                <ViewMoreBtn />
              </div>
            </div>
            <div className={mainStyle.basicSlideWrap}>
              <BasicSlide posterArr={mainData.top_rated} />
            </div>
          </article>
          {/* 가볍게 보는 짧은 영화 */}
          <article className={mainStyle.mainArticle}>
            <div className={mainStyle.titleWrap}>
              <h2 className={mainStyle.title}>가볍게 보는 짧은 영화</h2>
              <div className={mainStyle.viewMore}>
                <ViewMoreBtn />
              </div>
            </div>
            <div className={mainStyle.basicSlideWrap}>
              <BasicSlide posterArr={mainData.twoHours} />
            </div>
          </article>
          {/* SF 액션 영화 */}
          <article className={mainStyle.mainArticle}>
            <div className={mainStyle.titleWrap}>
              <h2 className={mainStyle.title}>SF 액션 영화</h2>
              <div className={mainStyle.viewMore}>
                <ViewMoreBtn />
              </div>
            </div>
            <div className={mainStyle.basicSlideWrap}>
              <BasicSlide posterArr={mainData.sfAction} />
            </div>
          </article>

        </section>
        <section className={mainStyle.email}>
          <h2>매주 새로운 영화를 발견해 보세요.</h2>
          <Subscribe />
        </section>
      </>
  );
}

// 제목 옆 더보기 버튼
const ViewMoreBtn = () => {
  return (
    <div className={mainStyle.viewMoreBtnWrap}>
      <button>더보기</button>
    </div>
  )
}

// ==============================================
// 비주얼-슬라이드 : Visual컴포넌트에 합쳤음
//  const VisualSlide = ({visualData}) => {
//   const navi = useNavigate();

//   return (
//     <>
//       <Swiper
//         className='visualSlide'
//         slidesPerView={1}
//         spaceBetween={24}
//         pagination={{clickable: true}}
//         loop={true}
//         modules={[Pagination]}
//       >
//       {visualData.map((visualData) => (
//         <SwiperSlide key={visualData.id}>
//           <div className={mainStyle.overview}>
//             <h2>{visualData.title}</h2>
//             <p>{visualData.overview}</p>          
            
//             <button onClick={()=>navi('/details', {state: visualData.id})}>더보기</button>
            
//           </div>
//           <img src={ visualData.backdrop ? ('https://image.tmdb.org/t/p/original/' + visualData.backdrop) : ('https://image.tmdb.org/t/p/original/' + visualData.poster)} />
//           <VisualSlideSmall visualData={visualData} />
//         </SwiperSlide>
//       ))}
//       </Swiper>        
//     </>
//   )
// }

// // 비주얼-유튜브 영상 슬라이드 : Visual컴포넌트에 합쳤음
// const VisualSlideSmall = ({visualData}) => {

//   let videoLinks = visualData.videos.results;
  
//   if(videoLinks.length > 5){
//     videoLinks = videoLinks.slice(0, 5);
//   }

//   videoLinks = videoLinks.map((obj) => ('https://www.youtube.com/embed/' + obj.key))

  

//   return (
//     <div className='visualSmall'>
//         <Swiper
//           slidesPerView={3}
//           spaceBetween={30}
//           freeMode={true}
//           navigation={true}
//           modules={[FreeMode, Navigation]}
//         >
//           {videoLinks.map((video) => (
//             <SwiperSlide key={video}>
//               <div className='youtubeWrap'>
//                 <iframe allowFullScreen className='youtube' src={video}></iframe>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//     </div>
//   )
// }

// ==============================================
// 비주얼-비디오 팝업
const ModalPopupForVideo  = () => {
  return (
    <div className={mainStyle.modal}>
      <div className={mainStyle.modalBox}>
        <div className={mainStyle.videoWrap}>
          <iframe ></iframe>
        </div>

      </div>

    </div>
  )
 }

// 구독-이메일 주소 입력
const Subscribe = () => {
  const [email, setEmail] = useState('');
  const emailRef = useRef();

  const onEmail = (e) => {
    setEmail(e.target.value)
    if(email !== ''){
      emailRef.current.classList.add(mainStyle.activeSubscribe);
    }else{
      emailRef.current.classList.remove(mainStyle.activeSubscribe);
    }
  }

  const onReset = () => {
    setEmail(''); 
    emailRef.current.classList.remove(mainStyle.activeSubscribe);
  }
  
  return (
    <form>
      <div ref={emailRef} className={mainStyle.subscribe}>
        <div className={mainStyle.inputWrap}>
          <label htmlFor='email'></label>
          <input value={email} onChange={onEmail} type='email' id='email' placeholder='movie@limemovie.com'/>
          <button onClick={onReset} className={mainStyle.reset}></button>
        </div>
        <button>구독하기</button>
      </div>
    </form>
  )
}

export default Main






/** 데이터 응답 형식 */
// {visual: Array(3), trending: Array(20), releaseThisWeek: Array(20), top_rated1: Array(20), twoHours: Array(20), …}
// releaseThisWeek
// : 
// Array(20)
// 0
// : 
// {adult: false, backdrop_path: '/6VoxDupaW2VXfLtJyeOoGCgXSjD.jpg', genre_ids: Array(2), id: 1116490, original_language: 'en', …}
// 1
// : 
// {adult: false, backdrop_path: '/1fL2S8LKxCVE9KoPRBXeagmBtex.jpg', genre_ids: Array(2), id: 1114513, original_language: 'en', …}
// 2
// : 
// {adult: false, backdrop_path: '/1MzBCKjwDyQg2Cu8XJR8Ox59sWY.jpg', genre_ids: Array(2), id: 1244492, original_language: 'ja', …}
// 3
// : 
// {adult: false, backdrop_path: '/cyKH7pDFlxIXluqRyNoHHEpxSDX.jpg', genre_ids: Array(4), id: 646097, original_language: 'en', …}
// 4
// : 
// {adult: false, backdrop_path: '/jfC2xCBD8a5QJNd5yY3q23E8i7U.jpg', genre_ids: Array(3), id: 1186947, original_language: 'pt', …}
// 5
// : 
// {adult: false, backdrop_path: '/9utq8PrMyvFBtlte2BDNaj1ktSi.jpg', genre_ids: Array(2), id: 1088563, original_language: 'de', …}
// 6
// : 
// {adult: false, backdrop_path: '/83NiekHNOZkLbPdjd5KTIOE92Tn.jpg', genre_ids: Array(1), id: 1280440, original_language: 'pl', …}
// 7
// : 
// {adult: false, backdrop_path: '/k9dOgIzSnU4yl6Peqgn6Yi74Hi8.jpg', genre_ids: Array(2), id: 1250786, original_language: 'es', …}
// 8
// : 
// {adult: false, backdrop_path: '/2eBL3wXDZqemW8SJ1RNxqtx6bgJ.jpg', genre_ids: Array(3), id: 109, original_language: 'fr', …}
// 9
// : 
// {adult: false, backdrop_path: '/gRLrlofwDuICqGIEXYkoElDe4Y.jpg', genre_ids: Array(2), id: 1249216, original_language: 'en', …}
// 10
// : 
// {adult: false, backdrop_path: '/b9OLxVueCcdBc0YbwSJShjtBjkt.jpg', genre_ids: Array(2), id: 1267217, original_language: 'ru', …}
// 11
// : 
// {adult: false, backdrop_path: '/89i65Rst6hO0kbx1GFjqp4F6hH8.jpg', genre_ids: Array(2), id: 1089223, original_language: 'ko', …}
// 12
// : 
// {adult: false, backdrop_path: '/zjnctpKe4Unjf1edDi2uLjQYrKI.jpg', genre_ids: Array(2), id: 1255020, original_language: 'zh', …}
// 13
// : 
// {adult: false, backdrop_path: '/hKIWpQlHgbMGvt1p9GptL3Q7k5l.jpg', genre_ids: Array(2), id: 1241231, original_language: 'en', …}
// 14
// : 
// {adult: false, backdrop_path: '/jHhyLGDQRfFi60K0mMxB4golEuY.jpg', genre_ids: Array(2), id: 1014843, original_language: 'tl', …}
// 15
// : 
// {adult: false, backdrop_path: '/yK6506AW43aGv7hzZhmxIe64bjN.jpg', genre_ids: Array(1), id: 1037830, original_language: 'tl', …}
// 16
// : 
// {adult: false, backdrop_path: '/ugo189wtTkGr6vpS1r5SHCKo7jg.jpg', genre_ids: Array(2), id: 1355320, original_language: 'ko', …}
// 17
// : 
// {adult: false, backdrop_path: '/g0dqtYCx1BMcuH39pZgkfy6zFd4.jpg', genre_ids: Array(1), id: 972423, original_language: 'en', …}
// 18
// : 
// {adult: false, backdrop_path: '/m7ESXM4kJ5LGbw4BJAbXjPBxFHq.jpg', genre_ids: Array(1), id: 1051690, original_language: 'en', …}
// 19
// : 
// {adult: false, backdrop_path: '/jMmxzCRbcQjz9lfnmD3pYNbuuRs.jpg', genre_ids: Array(3), id: 1200052, original_language: 'zh', …}
// length
// : 
// 20
// [[Prototype]]
// : 
// Array(0)
// sfAction
// : 
// Array(20)
// 0
// : 
// {adult: false, backdrop_path: '/3V4kLQg0kSqPLctI5ziYWabAZYF.jpg', genre_ids: Array(3), id: 912649, original_language: 'en', …}
// 1
// : 
// {adult: false, backdrop_path: '/dvBCdCohwWbsP5qAaglOXagDMtk.jpg', genre_ids: Array(3), id: 533535, original_language: 'en', …}
// 2
// : 
// {adult: false, backdrop_path: '/9s9o9RT9Yj6nDuRJjnJm78WFoFl.jpg', genre_ids: Array(4), id: 1051896, original_language: 'en', …}
// 3
// : 
// {adult: false, backdrop_path: '/VuukZLgaCrho2Ar8Scl9HtV3yD.jpg', genre_ids: Array(2), id: 335983, original_language: 'en', …}
// 4
// : 
// {adult: false, backdrop_path: '/csQSGH0QU8D3Ov5YLEYuHep8ihA.jpg', genre_ids: Array(4), id: 1196470, original_language: 'fr', …}
// 5
// : 
// {adult: false, backdrop_path: '/vIgyYkXkg6NC2whRbYjBD7eb3Er.jpg', genre_ids: Array(3), id: 580489, original_language: 'en', …}
// 6
// : 
// {adult: false, backdrop_path: '/kwXycPsLA6SV3KUOagn343TtMOf.jpg', genre_ids: Array(3), id: 791042, original_language: 'en', …}
// 7
// : 
// {adult: false, backdrop_path: '/tCKWksaQI8XkAQLVou0AlGab5S6.jpg', genre_ids: Array(2), id: 1144962, original_language: 'en', …}
// 8
// : 
// {adult: false, backdrop_path: '/hd1TvTUGjkoYoqvXYfSBpI5Ri9B.jpg', genre_ids: Array(4), id: 1159311, original_language: 'ja', …}
// 9
// : 
// {adult: false, backdrop_path: '/hPIWQT70wQK6akqfLXByEvr62u0.jpg', genre_ids: Array(4), id: 726139, original_language: 'ko', …}
// 10
// : 
// {adult: false, backdrop_path: '/iHYh4cdO8ylA3W0dUxTDVdyJ5G9.jpg', genre_ids: Array(3), id: 653346, original_language: 'en', …}
// 11
// : 
// {adult: false, backdrop_path: '/mKOBdgaEFguADkJhfFslY7TYxIh.jpg', genre_ids: Array(3), id: 365177, original_language: 'en', …}
// 12
// : 
// {adult: false, backdrop_path: '/wNAhuOZ3Zf84jCIlrcI6JhgmY5q.jpg', genre_ids: Array(3), id: 786892, original_language: 'en', …}
// 13
// : 
// {adult: false, backdrop_path: '/veIyxxi5Gs8gvztLEW1Ysb8rrzs.jpg', genre_ids: Array(3), id: 823464, original_language: 'en', …}
// 14
// : 
// {adult: false, backdrop_path: '/ukfmKsIeXkKAEoKZ7O4fVDHCiTS.jpg', genre_ids: Array(5), id: 939243, original_language: 'en', …}
// 15
// : 
// {adult: false, backdrop_path: '/2vFuG6bWGyQUzYS9d69E5l85nIz.jpg', genre_ids: Array(3), id: 667538, original_language: 'en', …}
// 16
// : 
// {adult: false, backdrop_path: '/zD5v1E4joAzFvmAEytt7fM3ivyT.jpg', genre_ids: Array(3), id: 634649, original_language: 'en', …}
// 17
// : 
// {adult: false, backdrop_path: '/kVd3a9YeLGkoeR50jGEXM6EqseS.jpg', genre_ids: Array(4), id: 569094, original_language: 'en', …}
// 18
// : 
// {adult: false, backdrop_path: '/mDfJG3LC3Dqb67AZ52x3Z0jU0uB.jpg', genre_ids: Array(3), id: 299536, original_language: 'en', …}
// 19
// : 
// {adult: false, backdrop_path: '/vHJlbhsXrZ5yrO2KqCbGSIU6fRX.jpg', genre_ids: Array(4), id: 198663, original_language: 'en', …}
// length
// : 
// 20
// [[Prototype]]
// : 
// Array(0)
// top_rated1
// : 
// Array(20)
// 0
// : 
// {adult: false, backdrop_path: '/zfbjgQE1uSd9wiPTX4VzsLi0rGG.jpg', genre_ids: Array(2), id: 278, original_language: 'en', …}
// 1
// : 
// {adult: false, backdrop_path: '/tmU7GeKVybMWFButWEGl2M4GeiP.jpg', genre_ids: Array(2), id: 238, original_language: 'en', …}
// 2
// : 
// {adult: false, backdrop_path: '/kGzFbGhp99zva6oZODW5atUtnqi.jpg', genre_ids: Array(2), id: 240, original_language: 'en', …}
// 3
// : 
// {adult: false, backdrop_path: '/zb6fM1CX41D9rF9hdgclu0peUmy.jpg', genre_ids: Array(3), id: 424, original_language: 'en', …}
// 4
// : 
// {adult: false, backdrop_path: '/qqHQsStV6exghCM7zbObuYBiYxw.jpg', genre_ids: Array(1), id: 389, original_language: 'en', …}
// 5
// : 
// {adult: false, backdrop_path: '/m4TUa2ciEWSlk37rOsjiSIvZDXE.jpg', genre_ids: Array(3), id: 129, original_language: 'ja', …}
// 6
// : 
// {adult: false, backdrop_path: '/90ez6ArvpO8bvpyIngBuwXOqJm5.jpg', genre_ids: Array(3), id: 19404, original_language: 'hi', …}
// 7
// : 
// {adult: false, backdrop_path: '/oOv2oUXcAaNXakRqUPxYq5lJURz.jpg', genre_ids: Array(4), id: 155, original_language: 'en', …}
// 8
// : 
// {adult: false, backdrop_path: '/vxJ08SvwomfKbpboCWynC3uqUg4.jpg', genre_ids: Array(3), id: 497, original_language: 'en', …}
// 9
// : 
// {adult: false, backdrop_path: '/hiKmpZMGZsrkA3cdce8a7Dpos1j.jpg', genre_ids: Array(3), id: 496243, original_language: 'ko', …}
// 10
// : 
// {adult: false, backdrop_path: '/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg', genre_ids: Array(2), id: 680, original_language: 'en', …}
// 11
// : 
// {adult: false, backdrop_path: '/dIWwZW7dJJtqC6CgWzYkNVKIUm8.jpg', genre_ids: Array(3), id: 372058, original_language: 'ja', …}
// 12
// : 
// {adult: false, backdrop_path: '/5JrZAtyk3LwiiAWLW0kwz41XZJC.jpg', genre_ids: Array(3), id: 122, original_language: 'en', …}
// 13
// : 
// {adult: false, backdrop_path: '/v9acaWVVFdZT5yAU7J2QjwfhXyD.jpg', genre_ids: Array(3), id: 1184918, original_language: 'en', …}
// 14
// : 
// {adult: false, backdrop_path: '/ghgfzbEV7kbpbi1O8eIILKVXEA8.jpg', genre_ids: Array(3), id: 13, original_language: 'en', …}
// 15
// : 
// {adult: false, backdrop_path: '/Adrip2Jqzw56KeuV2nAxucKMNXA.jpg', genre_ids: Array(1), id: 429, original_language: 'it', …}
// 16
// : 
// {adult: false, backdrop_path: '/sJNNMCc6B7KZIY3LH3JMYJJNH5j.jpg', genre_ids: Array(2), id: 346, original_language: 'ja', …}
// 17
// : 
// {adult: false, backdrop_path: '/7TF4p86ZafnxFuNqWdhpHXFO244.jpg', genre_ids: Array(2), id: 769, original_language: 'en', …}
// 18
// : 
// {adult: false, backdrop_path: '/gwj4R8Uy1GwejKqfofREKI9Jh7L.jpg', genre_ids: Array(3), id: 12477, original_language: 'ja', …}
// 19
// : 
// {adult: false, backdrop_path: '/7lyq8hK0MhPHpUXdnqbFvZYSfkk.jpg', genre_ids: Array(2), id: 11216, original_language: 'it', …}
// length
// : 
// 20
// [[Prototype]]
// : 
// Array(0)
// trending
// : 
// Array(20)
// 0
// : 
// {backdrop_path: '/8mjYwWT50GkRrrRdyHzJorfEfcl.jpg', id: 558449, title: '글래디에이터 II', original_title: 'Gladiator II', overview: '로마의 영웅이자 최고의 검투사였던 ‘막시무스’가 콜로세움에서 죽음을 맞이한 뒤 20여 년이… 자신이 진짜 누구인지 알게 되고 마침내 로마의 운명을 건 결전을 준비하게 되는데...!', …}
// 1
// : 
// {backdrop_path: '/7h6TqPB3ESmjuVbxCxAeB1c9OB1.jpg', id: 933260, title: '서브스턴스', original_title: 'The Substance', overview: '더 나은 버전의 당신을 꿈꿔본 적 있나요? 당신의 인생을 바꿔줄 신제품 ‘서브스턴스’. ‘…, 각각 7일간의 완벽한 밸런스. 쉽죠? 균형을 존중한다면… 무엇이 잘못될 수 있을까요?', …}
// 2
// : 
// {backdrop_path: '/3rxoUVI74z7rTWYSAC2q3Uax2nC.jpg', id: 1100782, title: '스마일 2', original_title: 'Smile 2', overview: '월드투어를 앞두고 자신의 눈 앞에서 기괴한 미소와 함께 끔찍한 죽음을 맞은 친구를 목격한 …림치던 ‘스카이’는 자신이 죽어야만 전염처럼 번지는 저주가 끝난다는 사실을 듣게 되는데…', …}
// 3
// : 
// {backdrop_path: '/nazLAYvFewST34QMueOq4MlYKoc.jpg', id: 402431, title: '위키드', original_title: 'Wicked', overview: '자신의 진정한 힘을 아직 발견하지 못한 엘파바와 자신의 진정한 본성을 발견하지 못한 글린다, 전혀 다른 두 인물이 우정을 쌓아가며 맞닥뜨리는 예상치 못한 위기와 모험을 그린 이야기', …}
// 4
// : 
// {backdrop_path: '/dvBCdCohwWbsP5qAaglOXagDMtk.jpg', id: 533535, title: '데드풀과 울버린', original_title: 'Deadpool & Wolverine', overview: '히어로 생활에서 은퇴한 후, 평범한 중고차 딜러로 살아가던 ‘데드풀’이 예상치 못한 거대한…아 모든 면에서 상극인 ‘울버린’을 찾아가게 되며 펼쳐지는 도파민 폭발 액션 블록버스터.', …}
// 5
// : 
// {backdrop_path: '/nA0RDmSDqpN5tLun4sCqdPekObD.jpg', id: 592831, title: '메갈로폴리스', original_title: 'Megalopolis', overview: '재난으로 파괴된 뉴욕풍 대도시. 부패한 시장 프랭크 시세로와 이상주의자 건축가 시저는 도시… 대립한다. 사교계 스타인 프랭크의 딸 줄리아는 둘 사이에서 자신만의 길을 찾고자 한다.', …}
// 6
// : 
// {backdrop_path: '/rOmUuQEZfPXglwFs5ELLLUDKodL.jpg', id: 845781, title: '레드 원', original_title: 'Red One', overview: "크리스마스 D-1, 철통같은 보안을 뚫고 코드명 '레드 원' 산타클로스가 납치되고 크리스마…부터 삐그덕 거리는 이들 앞에 크리스마스의 존재를 위협하는 위험천만한 적들이 나타나는데…", …}
// 7
// : 
// {backdrop_path: '/jhk6D8pim3yaByu1801kMoxXFaX.jpg', id: 98, title: '글래디에이터', original_title: 'Gladiator', overview: '죽을 날이 머지않은 황제 마르쿠스 아우렐리우스는 막시무스를 총애하여 아들이 아닌 그에게 권… 간다. 그러던 어느 날 오래 전 사랑했던 황제의 누이 루실라를 다시 만나게 되는데...', …}
// 8
// : 
// {backdrop_path: '/18TSJF1WLA4CkymvVUcKDBwUJ9F.jpg', id: 1034541, title: '테리파이어 3', original_title: 'Terrifier 3', overview: '"아트 더 클라운"이 크리스마스 이브에 평화롭게 잠든 "마일스 카운티"의 주민들을 향해 혼돈을 일으키려 한다', …}
// 9
// : 
// {backdrop_path: '/u2eA9pqi1q3DvevT7RuDuJHxxBT.jpg', id: 974950, title: '에밀리아 페레스', original_title: 'Emilia Pérez', overview: '범죄자를 법정에 세우는 것보다 감옥에서 빼내는 데 더 관심이 많은 대형 로펌에서 일하는 저평가된 변호사 리타가 범죄 조직의 리더에게 고용됩니다.', …}
// 10
// : 
// {backdrop_path: '/uGmYqxh8flqkudioyFtD7IJSHxK.jpg', id: 889737, title: '조커: 폴리 아 되', original_title: 'Joker: Folie à Deux', overview: '2년 전, 세상을 뒤흔들며 고담시 아이콘으로 자리한 아서 플렉은 아캄 수용소에 갇혀 최종 …게 된 아서. 그는 최후의 심판대에서 할리 퀸과 함께 자신, 조커의 이야기를 시작하는데…', …}
// 11
// : 
// {backdrop_path: '/tl3WVdgrDQK70tSVHMAd59XxR3j.jpg', id: 1290287, title: '핫 스노우맨', original_title: 'Hot Frosty', overview: '남편을 잃은 젊은 여성이 어느 날 마법의 스카프로 매력적인 눈사람을 살아나게 한다. 눈사람이 녹아 없어지기 전, 그를 통해 로맨스와 웃음, 크리스마스의 즐거움을 되찾을 수 있을까?', …}
// 12
// : 
// {backdrop_path: '/3V4kLQg0kSqPLctI5ziYWabAZYF.jpg', id: 912649, title: '베놈: 라스트 댄스', original_title: 'Venom: The Last Dance', overview: '환상의 케미스트리의 에디 브록과 그의 심비오트 베놈은 그들을 노리는 정체불명 존재의 추격을…위해 지구를 침략하고 에디와 베놈은 그동안 겪어보지 못한 최악의 위기를 맞이하게 되는데…', …}
// 13
// : 
// {backdrop_path: '/v9acaWVVFdZT5yAU7J2QjwfhXyD.jpg', id: 1184918, title: '와일드 로봇', original_title: 'The Wild Robot', overview: '우연한 사고로 거대한 야생에 불시착한 로봇 로즈는 주변 동물들의 행동을 배우며 낯선 환경 … 가르쳐준다. 그러나 선천적으로 몸집이 작은 브라이트빌은 짧은 비행도 힘겨워 하는데...', …}
// 14
// : 
// {backdrop_path: '/llIXQAndg5kB6SWlp6ouUdO7Zxd.jpg', id: 1084736, title: '몬테크리스토 백작', original_title: 'Le Comte de Monte-Cristo', overview: '에드먼드 단테스는  음모에 빠져 결혼식 날 자신이 저지르지도 않은 범죄로 체포된다. 샤토 …된다. 단테스는 몬테크리스토 백작으로 신분을 위장하고 세 남자에게 복수를 실행에 옮긴다.', …}
// 15
// : 
// {backdrop_path: '/tElnmtQ6yz1PjN1kePNl8yMSb59.jpg', id: 1241982, title: '모아나 2', original_title: 'Moana 2', overview: '바다를 누볐던 선조들에게서 예기치 못한 부름을 받은 모아나가 마우이와 다시 만나 새로운 선원들과 함께 오랫동안 잊혀진 멀고 위험한 바다 너머로 떠나는 특별한 모험을 담은 이야기', …}
// 16
// : 
// {backdrop_path: '/xi1VSt3DtkevUmzCx2mNlCoDe74.jpg', id: 917496, title: '비틀쥬스 비틀쥬스', original_title: 'Beetlejuice Beetlejuice', overview: '유령과 대화하는 영매로 유명세를 타게 된 리디아와 그런 엄마가 마음에 들지 않는 10대 딸…건으로 내민 비틀쥬스. 이번엔 아스트리드가 비틀쥬스를 다시 저세상으로 보내야 하는데···', …}
// 17
// : 
// {backdrop_path: '/2h9yTYWTb909J28bzNTIE7dyNqP.jpg', id: 698687, title: '트랜스포머 ONE', original_title: 'Transformers One', overview: '사이버트론 행성의 지하 광산에서 일하는 변신 못 하는 하급 로봇 오라이온 팩스와 D-16.…행성을 지배하고 있는 거대한 배후의 존재를 알게 되며 모든 것을 바꿀 전쟁을 시작하는데…', …}
// 18
// : 
// {backdrop_path: '/hziiv14OpD73u9gAak4XDDfBKa2.jpg', id: 671, title: '해리 포터와 마법사의 돌', original_title: "Harry Potter and the Philosopher's Stone", overview: '해리 포터는 위압적인 버논 숙부와 냉담한 이모 페투니아, 욕심 많고 버릇없는 사촌 더즐리 … 축하하러 온 거인 해그리드는 해리가 모르고 있었던 해리의 진정한 정체를 알려주는데...', …}
// 19
// : 
// {backdrop_path: '/6lE2e6j8qbtQR8aHxQNJlwxdmKV.jpg', id: 974453, title: 'Absolution', original_title: 'Absolution', overview: '', …}
// length
// : 
// 20
// [[Prototype]]
// : 
// Array(0)
// twoHours
// : 
// Array(20)
// 0
// : 
// {adult: false, backdrop_path: '/3V4kLQg0kSqPLctI5ziYWabAZYF.jpg', genre_ids: Array(3), id: 912649, original_language: 'en', …}
// 1
// : 
// {adult: false, backdrop_path: '/2fxnTXr8NwyTFkunkimJkGkhqfy.jpg', genre_ids: Array(3), id: 1118031, original_language: 'es', …}
// 2
// : 
// {adult: false, backdrop_path: '/v9acaWVVFdZT5yAU7J2QjwfhXyD.jpg', genre_ids: Array(3), id: 1184918, original_language: 'en', …}
// 3
// : 
// {adult: false, backdrop_path: '/2h9yTYWTb909J28bzNTIE7dyNqP.jpg', genre_ids: Array(4), id: 698687, original_language: 'en', …}
// 4
// : 
// {adult: false, backdrop_path: '/1FBHAQnq7Bs3djBmaNkfdVbnCUE.jpg', genre_ids: Array(2), id: 1124641, original_language: 'en', …}
// 5
// : 
// {adult: false, backdrop_path: '/rOmUuQEZfPXglwFs5ELLLUDKodL.jpg', genre_ids: Array(3), id: 845781, original_language: 'en', …}
// 6
// : 
// {adult: false, backdrop_path: '/lgkPzcOSnTvjeMnuFzozRO5HHw1.jpg', genre_ids: Array(4), id: 519182, original_language: 'en', …}
// 7
// : 
// {adult: false, backdrop_path: '/9s9o9RT9Yj6nDuRJjnJm78WFoFl.jpg', genre_ids: Array(4), id: 1051896, original_language: 'en', …}
// 8
// : 
// {adult: false, backdrop_path: '/6VoxDupaW2VXfLtJyeOoGCgXSjD.jpg', genre_ids: Array(2), id: 1116490, original_language: 'en', …}
// 9
// : 
// {adult: false, backdrop_path: '/VuukZLgaCrho2Ar8Scl9HtV3yD.jpg', genre_ids: Array(2), id: 335983, original_language: 'en', …}
// 10
// : 
// {adult: false, backdrop_path: '/p5ozvmdgsmbWe0H8Xk7Rc8SCwAB.jpg', genre_ids: Array(5), id: 1022789, original_language: 'en', …}
// 11
// : 
// {adult: false, backdrop_path: '/csQSGH0QU8D3Ov5YLEYuHep8ihA.jpg', genre_ids: Array(4), id: 1196470, original_language: 'fr', …}
// 12
// : 
// {adult: false, backdrop_path: '/n9Do4rv1Hl3QvQLMmT5w6pBadqq.jpg', genre_ids: Array(3), id: 1142518, original_language: 'fr', …}
// 13
// : 
// {adult: false, backdrop_path: '/vIgyYkXkg6NC2whRbYjBD7eb3Er.jpg', genre_ids: Array(3), id: 580489, original_language: 'en', …}
// 14
// : 
// {adult: false, backdrop_path: '/uLqNGzJwnj8JKkKuRM2dHWJKCtc.jpg', genre_ids: Array(3), id: 1029235, original_language: 'en', …}
// 15
// : 
// {adult: false, backdrop_path: '/1aOPPkXASkd2By3EKIw66Ilx5qF.jpg', genre_ids: Array(2), id: 1094974, original_language: 'en', …}
// 16
// : 
// {adult: false, backdrop_path: '/jT4KqFTrR2ofpUUwzKCIn4uYWXp.jpg', genre_ids: Array(2), id: 1331375, original_language: 'en', …}
// 17
// : 
// {adult: false, backdrop_path: '/m1MifWpNjOU1g8UfIyNSI2dMFZf.jpg', genre_ids: Array(4), id: 1371727, original_language: 'en', …}
// 18
// : 
// {adult: false, backdrop_path: '/5IIFJxwRzmkhczQidIhpoaolpZY.jpg', genre_ids: Array(3), id: 976734, original_language: 'en', …}
// 19
// : 
// {adult: false, backdrop_path: '/xi1VSt3DtkevUmzCx2mNlCoDe74.jpg', genre_ids: Array(3), id: 917496, original_language: 'en', …}
// length
// : 
// 20
// [[Prototype]]
// : 
// Array(0)
// visual
// : 
// Array(3)
// 0
// : 
// {adult: false, backdrop_path: '/p5ozvmdgsmbWe0H8Xk7Rc8SCwAB.jpg', belongs_to_collection: {…}, budget: 200000000, genres: Array(5), …}
// 1
// : 
// {adult: false, backdrop_path: '/rQaHA74pevnGsxcKGaoZVGWe9TC.jpg', belongs_to_collection: null, budget: 150000000, genres: Array(4), …}
// 2
// : 
// {adult: false, backdrop_path: '/dvBCdCohwWbsP5qAaglOXagDMtk.jpg', belongs_to_collection: {…}, budget: 200000000, genres: Array(3), …}