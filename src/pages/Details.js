import React, { useEffect, useRef, useState } from 'react'
import detailStyle from '../styles/details.module.scss'
import BasicSlide from '../components/slide/BasicSlide'
import { apiDetails } from '../api/instance'
import { useLocation } from 'react-router-dom'
import store from '../store/store'

// 스와이퍼
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Loading from '../components/Loading'

const Details = () => {
    const { loading, setLoading } = store();
    const {state} = useLocation();  //id받기
    const [details, setDetails] = useState({});

    useEffect (() => {
        const fetchDetails = async () => {
            const result = await apiDetails(state);
            setDetails(result)
            setLoading(false)
            window.scrollTo({top:0})
        };        
        fetchDetails();
    }, [state, setLoading]);

    if(loading) return <Loading />;


    return (
        <div className={detailStyle.subDetailsWrap}>
            <SubVisual info={details.info} cer={details.certification} />
            <SubDetails info={details.info} watch={details.watchProviders} />
            <SubSimilar similar={details.similar} />
        </div>
    )
}

const SubVisual = ({info, cer}) => {
    if(info === undefined) return <Loading />;

    let ageRatingKR =''
    switch(cer){
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
        default:
            ageRatingKR = '-';
            break;
    }

    return !info ? (<section></section>) :
        (<section className={detailStyle.subVisual}>
            <div className={detailStyle.overview}>
                <h3>{info.title}</h3>
                <ul className={detailStyle.listWrap}>
                    <li className={detailStyle.shortInfo}>
                        <ul>
                            <li>{(info.genres.slice(0,2)).map((obj)=>(<span className={detailStyle.twoGenres} key={`${info.id}_${obj.id}`}>{obj.name}</span>))}</li>
                            <li>{(info.release_date).slice(0,4)}</li>
                            <li>{info.vote_average.toFixed(2)}점</li>
                            <li>{ageRatingKR}</li>
                        </ul>
                    </li>
                    <li className={detailStyle.shortSummary}>{info.overview}</li>
                    <li className={detailStyle.shortCast}>
                        <h4>주연</h4>
                        <p>{(info.casts.cast.slice(0,2)).map((obj) => (<span className={detailStyle.twoCasts} key={`${obj.original_name}_${obj.id}`}>{obj.name}</span>) )} 외</p>
                    </li>
                </ul>
            </div>
            <div className={detailStyle.imgWrap}>
                <img src={info.backdrop_path ? `https://image.tmdb.org/t/p/original/${info.backdrop_path}` : `https://image.tmdb.org/t/p/original/${info.poster_path}`} alt={`${info.title} 이미지`} />
            </div>

        </section>)
  
}

const SubDetails = ({info, watch}) => {
    if( info === undefined ) return <Loading />;

    let flatrate = [];
    let rent = [];
    let buy = [];

    if(watch !== undefined){
        flatrate = watch.flatrate?.length ? watch.flatrate : [];
        rent = watch.rent?.length ?  watch.rent : [];
        buy = watch.buy?.length ?  watch.buy : [];
    }

    return (
        <section className={detailStyle.subDetails}>
            {/* 시청 */}
            <article style={watch === undefined ? {display:'none'} : {} } className={detailStyle.watch}>
                <h3>
                    시청
                </h3>
                <ul className={detailStyle.platforms}>
                    { flatrate.length !== 0 ? 
                    <li>
                        <h4>스트리밍</h4>
                        <ul>
                            {
                                flatrate.map((platform) => (
                                    <li key={`${platform.provider_id}_flatrate`}>
                                        <a href={watch.link} target='_blank' rel="noopener noreferrer">
                                            <div className={detailStyle.logoWrap}>
                                                <img className={detailStyle.logo} src={`https://image.tmdb.org/t/p/w500/${platform.logo_path}`} alt={`${platform.provider_name} logo`} />
                                            </div>
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </li> : <li style={{display:'none'}}></li>
                    }

                    { rent.length !== 0 ?
                    <li>
                        <h4>대여</h4>
                        <ul>
                            {
                                rent.map((platform) => (
                                    <li key={`${platform.provider_id}_rent`}>
                                        <a href={watch.link} target='_blank' rel="noopener noreferrer">
                                            <div className={detailStyle.logoWrap}>
                                                <img className={detailStyle.logo} src={`https://image.tmdb.org/t/p/w500/${platform.logo_path}`} alt={`${platform.provider_name} logo`} />
                                            </div>
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </li> : <li style={{display:'none'}}></li>
                    }

                    { buy.length !== 0 ?
                    <li>
                        <h4>구매</h4>
                        <ul>
                            {
                                buy.map((platform) => (
                                    <li key={`${platform.provider_id}_buy`}>
                                        <a href={watch.link} target='_blank' rel="noopener noreferrer">
                                            <div className={detailStyle.logoWrap}>
                                                <img className={detailStyle.logo} src={`https://image.tmdb.org/t/p/w500/${platform.logo_path}`} alt={`${platform.provider_name} logo`} />
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
            <article className={detailStyle.info}>
                <h3>
                    개요
                </h3>
                <ul>
                    <li>
                        <h4>장르</h4>
                        <p>
                        {
                            info.genres.map((obj) => (
                                <span className={detailStyle.infoGenres} key={`${info.id}_${obj.name}`}>{obj.name}</span>
                            ))
                        }
                        </p>
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
            <article className={detailStyle.summary}>
                <h3>
                    줄거리
                </h3>
                <p>
                    {info.overview}
                </p>
            </article>

            {/* 출연 */}
            <article className={detailStyle.casts}>
                <h3>
                    출연
                </h3>
                <CastSlide castsArr={(info.casts.cast).slice(0, 15)} />
            </article>

            {/* 트레일러 */}
            <article style={info.videos.results.length === 0 ? {display:'none'} : {} } className={detailStyle.trailers}>
                <h3>
                    트레일러
                </h3>
                <TrailerSlide trailersArr={info.videos.results} />
            </article>
        </section>
    )
}

const SubSimilar = ({similar}) => {
    return (
        <section className={detailStyle.subSimilar}>
            <article>
                <h3>
                    유사한 콘텐츠
                </h3>
                <BasicSlide posterArr={similar}/>
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
              <iframe allowFullScreen className='youtube' src={'https://www.youtube.com/embed/' + video.key} title={video.name}></iframe>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    )
  }
export default Details