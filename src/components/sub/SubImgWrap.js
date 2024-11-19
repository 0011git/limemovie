import React from 'react'
import subImgWrap from '../../styles/SubImgWrap.module.scss'
import { useNavigate } from 'react-router-dom';

const SubImgWrap = ({imgArr}) => {
  const navi = useNavigate();
  return (
    <div className={subImgWrap.subImgWrap}>
          <ul>
            {imgArr.map((movie) => (
                <li key={movie.id} onClick={() => navi('/details', {state: movie.id})}>
                  <div>
                      <img src={'https://image.tmdb.org/t/p/w300/' + movie.poster_path} alt={movie.title} />
                  </div>                    
                </li>
            ))}
          </ul>
        </div>
  )
}
export default SubImgWrap