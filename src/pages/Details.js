import React, { useEffect, useRef, useState } from 'react'
import DetailScss from '../styles/Details.module.scss'
import BasicSlide from '../components/slide/BasicSlide'
// import CastSlide from '../components/slide/CastSlide'
// import TrailerSlide from '../components/slide/TrailerSlide'
import { apiDetails } from '../api/instance'
import { useLocation } from 'react-router-dom'
import store from '../store/store'

// 스와이퍼
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

const Details = () => {
    const { loading, setLoading } = store();
    const {state} = useLocation();  //id받기
    // const [details, setDetails] = useState({watchProviders:{}, certification:{}, info:{}, similar:{}});
    const [details, setDetails] = useState({});

    useEffect (() => {
        const fetchDetails = async () => {
            console.log(state);
            
            const result = await apiDetails(state);
            setLoading(false)
            setDetails(result)
                // {watchProviders: result.watchProviders.data,
                // certification: (result.certification.data.results.map((kr) => (kr.iso_3166_1 === 'KR' ? kr.release_dates[0] : null))).filter((item) => item !== null),
                // info: result.info.data,
                // similar: result.similar.data}
        };
        window.scrollTo({top:0})
        fetchDetails();
      }, [state]);    
      if(loading) return<>Loading...</>;

      console.log(details.info);
      console.log(details.watchProviders);
      console.log(details.certification);
      console.log(details.similar);
  return (
    <>
        <div className={DetailScss.subDetailsWrap}>
            <SubVisual info={details.info} cer={details.certification} />
            <SubDetails info={details.info} watch={details.watchProviders} />
            <SubSimilar similar={details.similar} />
        </div>
    </>
  )
}

const SubVisual = ({info, cer}) => {
    if(info == {}) return<>Loading...</>;
    let genresArr = [];
    genresArr = ((info.genres).map((g) => g.name)).slice(0,2);

    let castsArr = [];
    castsArr = [
        (info.casts.cast)[0].name,
        (info.casts.cast)[1].name];

    let ageRating = cer[0].certification;
    let ageRatingKR =''
    switch(ageRating){
        case 'ALL':
            ageRatingKR = '전체연령가';
            break;
        case '12':
            ageRatingKR = '12+';
            break;
        case '15':
            ageRatingKR = '15+';
            break;
        case '19':
            ageRatingKR = '19+';
            break;
        case 'Restricted Screening':
            ageRatingKR = '제한상영가';
            break;
    }

    return (
        <section className={DetailScss.subVisual}>
            <div className={DetailScss.overview}>
                <h3>{info.title}</h3>
                <ul className={DetailScss.listWrap}>
                    <li className={DetailScss.shortInfo}>
                        <ul>
                            <li>{genresArr.join(', ')}</li>
                            <li>{(info.release_date).slice(0,4)}</li>
                            <li>{info.vote_average.toFixed(2)}점</li>
                            <li>{ageRatingKR}</li>
                        </ul>
                    </li>
                    <li className={DetailScss.shortSummary}>{info.overview}</li>
                    <li className={DetailScss.shortCast}>
                        <h4>주연</h4>
                        <p>{castsArr.join(', ')} 외</p>
                    </li>
                </ul>
            </div>
            <div className={DetailScss.imgWrap}>
                <img src={info.backdrop_path ? `https://image.tmdb.org/t/p/original/${info.backdrop_path}` : `https://image.tmdb.org/t/p/original/${info.poster_path}`}/>
            </div>

        </section>
    )
}

const SubDetails = ({info, watch}) => {
    // 시청
    // if( watch.link !== '') return<>Loading...</>;

    let flatrate = watch.flatrate?.length ? watch.flatrate : [];
    let rent = watch.rent?.length ?  watch.rent : [];
    let buy = watch.buy?.length ?  watch.buy : [];

    console.log(flatrate);
    console.log(rent);
    console.log(buy);
    


    //장르
    let genresArr = [];
    genresArr = (info.genres).map((g) => g.name)

    //캐스트
    let castsArr = (info.casts.cast).slice(0, 15);

    //트레일러
    let trailersArr = [];
    trailersArr = (info.videos.results).slice(0,5);


    


    return (
        <section className={DetailScss.subDetails}>
            {/* 시청 */}
            <article style={trailersArr.length === 0 ? {display:'none'} : {} } className={DetailScss.watch}>
                <h3>
                    시청
                </h3>
                <ul className={DetailScss.platforms}>
                    { flatrate.length != 0 ? 
                    <li>
                        <h4>스트리밍</h4>
                        <ul>
                            {
                                flatrate.map((platform) => (
                                    <li>
                                        <a href={watch.link} target='_blank'>
                                            <div className={DetailScss.logoWrap}>
                                                <img className={DetailScss.logo} src={`https://image.tmdb.org/t/p/w500/${platform.logo_path}`} />
                                            </div>
                                        </a>
                                    </li>
                                ))
                            }
                            <li><a href="#" className={DetailScss.netflix}></a></li>
                        </ul>
                    </li> : <li style={{display:'none'}}></li>
                    }

                    { rent.length != 0 ?
                    <li>
                        <h4>대여</h4>
                        <ul>
                            {
                                rent.map((platform) => (
                                    <li>
                                        <a href={watch.link} target='_blank'>
                                            <div className={DetailScss.logoWrap}>
                                                <img className={DetailScss.logo} src={`https://image.tmdb.org/t/p/w500/${platform.logo_path}`} />
                                            </div>
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </li> : <li style={{display:'none'}}></li>
                    }

                    { buy.length != 0 ?
                    <li>
                        <h4>구매</h4>
                        <ul>
                            {
                                buy.map((platform) => (
                                    <li>
                                        <a href={watch.link} target='_blank'>
                                            <div className={DetailScss.logoWrap}>
                                                <img className={DetailScss.logo} src={`https://image.tmdb.org/t/p/w500/${platform.logo_path}`} />
                                            </div>
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </li> : <li style={{display:'none'}}></li>
                    }
                </ul>
            </article>

            {/* 개요 */}
            <article className={DetailScss.info}>
                <h3>
                    개요
                </h3>
                <ul>
                    <li>
                        <h4>장르</h4>
                        <p>{genresArr.join(', ')}</p>
                    </li>
                    <li>
                        <h4>시간</h4>
                        <p>{info.runtime}분 ({Math.floor(info.runtime/60)}시간 {info.runtime%60}분)</p>
                    </li>
                    <li>
                        <h4>평점</h4>
                        <p>{info.vote_average.toFixed(2)}</p>
                    </li>
                    <li>
                        <h4>개봉일</h4>
                        <p>{info.release_date}</p>
                    </li>
                </ul>
            </article>

            {/* 줄거리 */}
            <article className={DetailScss.summary}>
                <h3>
                    줄거리
                </h3>
                <p>
                    {info.overview}
                </p>
            </article>

            {/* 출연 */}
            <article className={DetailScss.casts}>
                <h3>
                    출연
                </h3>
                <CastSlide castsArr={castsArr} />
            </article>

            {/* 트레일러 */}
            <article style={trailersArr.length === 0 ? {display:'none'} : {} } className={DetailScss.trailers}>
                <h3>
                    트레일러
                </h3>
                <TrailerSlide trailersArr={trailersArr} />
            </article>
        </section>
    )
}

const SubSimilar = ({similar}) => {
    // let posterArr =[];
    // posterArr = (similar).map((obj) => (
    //     {
    //         id: obj.id,
    //         poster: `https://image.tmdb.org/t/p/w300/${obj.poster_path}`
    //     }
    // ))
    
    return (
        <section className={DetailScss.subSimilar}>
            <article>
                <BasicSlide title={'유사한 콘텐츠'} posterArr={similar}/>
            </article>
        </section>
    )
}

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
export default Details